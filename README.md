# 🚨 Medical Emergency Alert Platform

> **Real-time emergency alert system for quick response coordination.**

This project is a **real-time web application** designed to manage and respond to medical emergencies. Built using the **MERN stack**, it enables users (patients, responders, or medical staff) to trigger alerts, view incident statuses, and receive **live updates** via WebSockets.

The platform ensures **secure authentication**, efficient alert tracking, and live communication — all containerized and automated with **Docker** and **Jenkins** for seamless CI/CD deployment.

---

## 🚀 Features

- 🧠 **Real-time emergency alerts** using WebSockets
- 🔐 **JWT-based secure login & registration**
- 🗺️ **Incident dashboard** with status updates
- 📦 **Dockerized full-stack application**
- ⚙️ **CI/CD pipeline with Jenkins** for automated builds and deployments
- 🎨 **Responsive UI** built with Tailwind CSS

---

## 🧪 Tech Stack & Their Roles

| Technology       | Purpose / Role                                                                 |
|------------------|----------------------------------------------------------------------------------|
| **React.js**     | Frontend UI framework; displays dashboard, forms, live alerts                   |
| **Node.js**      | Backend runtime environment for handling APIs and WebSocket server              |
| **Express.js**   | Simplifies route handling and middleware setup for REST APIs                    |
| **MongoDB**      | NoSQL database for storing users, alerts, and messages                          |
| **JWT**          | Used for user authentication and session management                             |
| **WebSockets**   | Enables real-time alert delivery and notification updates                       |
| **Docker**       | Containerizes both client and server for consistent environment and portability |
| **Docker Compose**| Orchestrates multi-container setup (client, server, MongoDB)                    |
| **Jenkins**      | Automates CI/CD: code integration, testing, and deployment                      |
| **Tailwind CSS** | Styling framework used for building a clean, responsive interface               |
| **Postman**      | API testing and documentation tool during development                           |
| **Git**          | Version control system used to manage project history                           |

---

## 📚 API Endpoints

### 🔐 Authentication

| Method | Endpoint        | Description                    | Auth Required |
|--------|------------------|--------------------------------|---------------|
| POST   | `/api/register`  | Register a new user            | ❌            |
| POST   | `/api/login`     | Log in and receive a JWT token | ❌            |

### 🚨 Alerts

| Method | Endpoint          | Description                           | Auth Required |
|--------|-------------------|---------------------------------------|---------------|
| POST   | `/api/alerts`     | Create a new emergency alert          | ✅            |
| GET    | `/api/alerts`     | Get all alerts for the dashboard      | ✅            |
| PUT    | `/api/alerts/:id` | Update alert status (resolved, etc.)  | ✅            |

---

## 🧾 Database Schema

### 👤 Users

| Field       | Type     | Description             |
|-------------|----------|-------------------------|
| `name`      | String   | Full name of the user   |
| `email`     | String   | Unique email            |
| `password`  | String   | Hashed password         |
| `role`      | String   | 'user' or 'responder'   |
| `createdAt` | Date     | Timestamp of registration |

### 🚨 Alerts

| Field        | Type     | Description                          |
|--------------|----------|--------------------------------------|
| `title`      | String   | Short description of the emergency   |
| `location`   | String   | Address or coordinates               |
| `status`     | String   | 'active', 'resolved', etc.           |
| `createdBy`  | ObjectId | Reference to User who raised the alert |
| `createdAt`  | Date     | Timestamp of when alert was created  |

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- Node.js + npm
- Docker & Docker Compose
- MongoDB (if not using Docker)
- Jenkins (optional for CI/CD)

### 🔧 Local Development (No Docker)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/medical-emergency-platform.git
   cd medical-emergency-platform
2. **Install frontend and backend**
   ```bash
   git clone https://github.com/yourusername/medical-emergency-platform.git
   cd medical-emergency-platform
3. **Start both servers**
   ```bash
   cd server && npm run dev
   cd client && npm start

### 🐳 Run with Docker (Recommended)

Make sure Docker is installed.

**Run:**
```bash
docker-compose up --build

### 🧪 CI/CD with Jenkins

A `Jenkinsfile` is provided for automating the CI/CD pipeline.

**Pipeline includes:**
- ✅ Install dependencies
- ✅ Run tests
- ✅ Docker build
- ✅ Docker push (optional: DockerHub/Registry)
- ✅ Deployment trigger (production/staging)

## 👨‍💻 Author

**Simer13**

Feel free to explore, contribute, and connect!  
📨 *Pull requests and stars are always welcome!*

---

## 🌈 Contribute

If you'd like to help improve this emergency platform, fork the repo and make a pull request — or open an issue for discussion.  
Your contributions can help save lives! 🚑❤️
