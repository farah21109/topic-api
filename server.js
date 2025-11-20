const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const topicsFile = path.join(__dirname, 'topics.json');

// Load topics from JSON
function loadTopics() {
  try {
    const data = fs.readFileSync(topicsFile, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Failed to read topics data');
  }
}

// GET /api/topics?search=<query>&sort=name
app.get('/api/topics', (req, res) => {
  try {
    const { search, sort } = req.query;

    if (search !== undefined && typeof search !== 'string') {
      return res.status(400).json({ error: 'Invalid search query' });
    }

    let topics = loadTopics();

    if (search) {
      const q = search.toLowerCase();
      topics = topics.filter(t => t.name.toLowerCase().includes(q));
    }

    if (sort === 'name') {
      topics.sort((a, b) => a.name.localeCompare(b.name));
    }

    res.status(200).json(topics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
