# Expense Tracker

A full-stack **Expense Tracker** application that allows users to manage their expenses and categories efficiently.  
It includes both **frontend** and **backend** code, built using the **MERN stack** (MongoDB, Express.js, React, Node.js).

---

## 🚀 Features

- Add, and delete expenses  
- Create and manage categories  
- Filter expenses by category  
- Real-time data updates  
- RESTful API architecture  
- Environment variables for secure configuration  
- Email notifications for over budget expenses

---

## 🧩 Project Structure

# 💰 Expense Tracker

A full-stack **Expense Tracker** application that allows users to manage their expenses and categories efficiently.  
It includes both **frontend** and **backend** code, built using the **MERN stack** (MongoDB, Express.js, React, Node.js).

---

## 🚀 Features

- Add, edit, and delete expenses  
- Create and manage categories  
- Filter expenses by category  
- Real-time data updates  
- RESTful API architecture  
- Environment variables for secure configuration  
- Email notifications for specific events (optional setup)

---
<pre> expense-tracker/https://github.com/giselaz/expense-tracker/tree/master
## 🧩 Project Structure
expense-tracker/
│
├── backend/ # Node.js + Express + MongoDB API
│ ├── src/
│ ├── models/
│ ├── routes/
│ ├── controllers/
| |── services/
| |── validation/
| |── utils/
│ └── server.js
│ └──.env
│ └── package.json
├── frontend/ # React.js app
│ ├── src/
│ ├── components/
│ ├── services/
│ ├── ui/
│ ├── util/
│ ├── context/
│ ├── App.js
│ └── package.json </pre>


---

## ⚙️ Installation & Setup

### 🧩 Step 1: Clone the repository

```
git clone https://github.com/giselaz/expense-tracker.git
cd expense-tracker
```
### 📦 Step 2: Install dependencies
#### Install backend dependencies:
```
cd backend
npm install
```
#### Install frontend dependencies:
```
cd frontend
npm install
```
###🔑 Step 3: Environment variables

Create a .env file in the backend folder using .env.example as reference:
```
cp backend/.env.example backend/.env
```

###🚀 Step 4: Start the project

Run the backend:
```
cd backend
npm run dev
```
Run the frontend:
```
cd frontend
npm run dev
```
🖥️ The backend runs on http://localhost:3000

🌐 The frontend runs on http://localhost:5173

##🧠 Environment Variables

Create a .env file in the backend/ directory with the following keys:
```
PORT=3000
DATABASE_URL=mongodb+srv://test12:HO9pvgOPlSvkSm92@cluster0.agctkgz.mongodb.net/expense-tracker?retryWrites=true&w=majority
GOOGLE_PASSWORD ="your_email_pass"
GOOGLE_EMAIL=youremail@gmail.com
COMPANY_EMAIL=testemail@gmail.com
```
📧 Email Service Setup

This project optionally supports sending emails (e.g., expense summaries or confirmation messages).
It uses Nodemailer for email delivery.
Steps

Create a Gmail account or use an existing one.
Enable App Passwords in your Google Account settings (if 2FA is enabled).
Add credentials in your .env file:

```
GOOGLE_PASSWORD=gmail
GOOGLE_EMAIL=your_email@gmail.com
COMPANY_EMAIL=testemail@gmail.com
```
The backend uses these credentials for sending automated emails.
⏱️ Time Spent
## ⏱️ Time Spent

| Task                                  | Duration  |
|--------------------------------------|-----------|
| Backend setup (API, models, routes)  | 3 hours   |
| Frontend setup (React, components)   | 2.5 hours |
| Email service & environment config   | 1 hour    |
| Testing & bug fixing                  | 1.5 hours |
| Documentation (README, .env setup)   | 0.5 hour  |
| **Total**                             | **~8.5 hours** |
