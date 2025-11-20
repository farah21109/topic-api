# Topic Retrieval API – TOTLE Backend Intern Submission

## Overview

This project implements a Node.js/Express API to retrieve topics from a JSON file with search functionality, simulating TOTLE’s `/api/catalogue/`. It supports case-insensitive search by topic name and optional sorting by name.

---

## Features

- **Endpoint:** `GET /api/topics?search=<query>&sort=name`
- **Search:** Case-insensitive search by topic name
- **Sort:** Optional ascending sort by name (`sort=name`)
- **Response:** JSON array of objects `{ id, name, category }`
- **Status Codes:**  
  - `200 OK` – Successful request  
  - `400 Bad Request` – Invalid search query  
  - `500 Internal Server Error` – Server errors
- **Data Source:** `topics.json` file containing 5+ topics
- **Error Handling:** Validates search query and handles file read errors

---

## Folder Structure

topic-api/
│
├─ server.js # Express server and API logic
├─ topics.json # JSON file storing topics
├─ package.json # Node.js dependencies and scripts
├─ .gitignore # Ignored files (node_modules, .env)
└─ README.md # This file

---

## Installation & Setup

1. Clone the repository:

```bash
git clone  https://github.com/farah21109/topic-api.git
cd topic-api

**Install dependencies**


npm install

Start the server:

npm run dev

Server runs at: http://localhost:3000

API Usage
1. Get all topics
GET /api/topics

Response:
[
  { "id": 1, "name": "Blockchain", "category": "Technology" },
  { "id": 2, "name": "DeFi", "category": "Finance" },
  { "id": 3, "name": "NFTs", "category": "Digital Assets" },
  { "id": 4, "name": "Smart Contracts", "category": "Technology" },
  { "id": 5, "name": "Cryptocurrency", "category": "Finance" }
]


2. Search topics by name
GET /api/topics?search=block

Response:
[
  { "id": 1, "name": "Blockchain", "category": "Technology" }
]


3. Search + Sort
GET /api/topics?search=a&sort=name

Response:
[
  { "id": 1, "name": "Blockchain", "category": "Technology" },
  { "id": 4, "name": "Smart Contracts", "category": "Technology" }
]


4. Invalid search query example
GET /api/topics?search=123

Response:
[]
Returns empty array if no matches
Optionally, can return 400 for strictly invalid queries

Scripts:

npm run dev → Start server with nodemon (auto-reload)
npm start → Start server normally

**Workflow / Step-by-Step Process**

1)Project Initialization


npm init -y to create package.json


2)Installed dependencies: express, cors, nodemon

3)Data Preparation
Created topics.json with 5+ topic objects { id, name, category }

4)Server Setup
Created server.js
Configured Express server, CORS, and JSON middleware

5)Testing:
Verified all endpoints with Postman and browser:


/api/topics → returns all topics
/api/topics?search=<query> → filtered results
/api/topics?search=<query>&sort=name

**Repository Link**
 https://github.com/farah21109/topic-api.git

**Dependencies**


express – Web framework for API
cors – Enable cross-origin requests
nodemon – Development tool for auto-reload

**Notes**
This API is fully functional with search and sorting.
Can be extended to include pagination, POST/PUT/DELETE endpoints, or database integration for larger datasets.
