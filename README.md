---------------------Backend-------------------

#  Log Ingestion Backend (Node.js + Express)

This is the backend service for the Log Ingestion and Querying System. It exposes RESTful API endpoints to ingest and retrieve log data with filtering capabilities. All data is persisted to a single local JSON file.

##  Features

- Accepts log entries via `POST /logs`
- Retrieves and filters logs via `GET /logs`
- Filters supported:
  - `level` (e.g., `error`, `warn`, `info`, `debug`)
  - `message` (full-text search)
  - `resourceId`
  - `timestamp_start` and `timestamp_end`
  - `traceId`, `spanId`, `commit`
- Data is stored in `logs.json` using the native Node.js `fs` module (no external DB used)

---


---

## Log Schema

```json
{
  "level": "error",
  "message": "Failed to connect to DB",
  "resourceId": "server-1234",
  "timestamp": "2023-09-15T08:00:00Z",
  "traceId": "abc-xyz-123",
  "spanId": "span-456",
  "commit": "5e5342f",
  "metadata": {
    "parentResourceId": "server-5678"
  }
}

---

##  Installation & Run

cd log-system-backend
npm install
npm run dev

-------------------------Frontend-----------------------


```markdown
# 🧾 Log Ingestion Frontend (React + Material UI)

This is the React-based frontend for the Log Ingestion and Querying System. It allows users to view, search, and filter log data visually.

## Features

- Clean UI built with **Material UI (MUI)**
- Filters logs by:
  - Message (full-text search)
  - Log level (`error`, `warn`, `info`, `debug`)
  - Resource ID
  - Timestamp range (start/end)
- Dynamic filtering with debounce
- Color-coded log levels (e.g., red for `error`)
- Responsive and minimal layout for developer usability

---


---

##  Tech Stack

- React
- Material UI
- Axios
- ES6 Modules
- Vite (build tool)

---

##  Setup Instructions

```bash
cd client
npm install
npm run dev




