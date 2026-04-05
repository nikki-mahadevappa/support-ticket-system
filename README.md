# 🎫 Support Ticket System

A full-stack web application that allows users to create, view, and manage support tickets.

---

## 🚀 Features

* Create new support tickets
* View all tickets
* Update ticket status (NEW → INVESTIGATING → RESOLVED)
* Simple and clean dashboard UI

---

## 🛠️ Tech Stack

### Frontend:

* React (Vite)
* Axios
* CSS

### Backend:

* Node.js
* Express.js

---

## 📂 Project Structure

```
Support Ticket System/
│── backend/
│── frontend/
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/nikki-mahadevappa/support-ticket-system.git
```

---

### 2. Run Backend

```
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3. Run Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

* **POST /api/tickets** → Create ticket
* **GET /api/tickets** → Get all tickets
* **PATCH /api/tickets/:id** → Update ticket status

---

## 💡 Future Improvements

* Add database (MongoDB)
* Add authentication (login/signup)
* Add search & filters
* Improve UI design

---

## 👩‍💻 Author

* Niharika M

---

## ⭐ Note

This project was built as a full-stack practice project to demonstrate API integration, frontend-backend communication, and modular architecture.
