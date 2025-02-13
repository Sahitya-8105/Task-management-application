# Task Manager

## Overview
The **Task Manager** is a simple CRUD application that allows users to create, update, delete, and mark tasks as completed. It is built using **React** for the front-end and **Node.js with Express** for the back-end, with MongoDB as the database.

---

## Features
- Add, delete, and mark tasks as completed.
- Persistent task storage using **MongoDB**.
- RESTful API with **Express.js**.
- Front-end built with **React.js**.
- Basic error handling and validation.
- Deployed on a cloud platform (**Bonus**).

---

## Tech Stack
### Front-end:
- React.js
- Axios (for API requests)

### Back-end:
- Node.js
- Express.js
- MongoDB
- Mongoose (for MongoDB Object Modeling)

---

## Setup Instructions
### Prerequisites
Make sure you have the following installed:
- Node.js (v14+)
- MongoDB (running locally or on MongoDB Atlas)
- Git

### Steps to Set Up Locally
#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Sahitya-8105/Task-Manager.git
cd Task-Manager
```

#### 2️⃣ Install Dependencies
##### Front-end
```sh
cd client
npm install
```
##### Back-end
```sh
cd server
npm install
```

#### 3️⃣ Configure Environment Variables
Create a `.env` file in the **server** directory and add:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_secret_key
```

#### 4️⃣ Start the Application
##### Start the Backend Server
```sh
cd server
npm start
```
##### Start the Front-end
```sh
cd client
npm start
```

The app should be running at `http://localhost:3000/`

---

## Project Architecture
### **1️⃣ Folder Structure**
```
Task-Manager/
│── client/          # Front-end React application
│── server/          # Back-end Node.js/Express API
│── .env             # Environment variables
│── README.md        # Documentation
│── package.json     # Dependency management
```

### **2️⃣ Design Decisions**
- **Separation of concerns**: The front-end and back-end are in separate folders.
- **MongoDB**: Chosen for its scalability and easy integration with Node.js.
- **JWT Authentication (Bonus)**: Implemented for user authentication.

---

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/tasks` | Fetch all tasks |
| POST | `/tasks` | Add a new task |
| PUT | `/tasks/:id` | Update a task (mark complete/incomplete) |
| DELETE | `/tasks/:id` | Delete a task |

---

## Bonus Features
### ✅ User Authentication & Authorization
- **JWT-based authentication** to protect API routes.
- Users can **sign up, log in, and manage tasks** only when authenticated.

### ✅ Unit and Integration Tests
- Implemented tests using **Jest and Supertest** for the back-end API.
- Run tests with:
```sh
npm test
```

### ✅ API Validation and Error Handling
- Input validation using **Express Validator**.
- Error handling middleware for better debugging.

---

## Future Enhancements
- Implement **user roles and permissions**.
- Add **task categories** for better organization.
- Implement **drag-and-drop task sorting**.

---

## Contributing
If you want to contribute, fork the repository and create a pull request with your changes.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any issues or feature requests, open an issue on the GitHub repository or contact [pndsahitya8105@gmail.com].

