# 📝 MERN Blog Platform

A robust and feature-rich blogging platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and styled using **Tailwind CSS**. This app enables authenticated users to create, edit, and manage blogs with rich-text formatting and image uploads.

---

## 🚀 Features

- 🔐 Authentication with token-based login
- 🖼️ Image Upload & Management (Appwrite integrated)
- ✍️ Rich Text Editor for blog writing
- 📄 Full CRUD operations for blogs
- 🌙 Dark mode toggle support
- ⚡ Built with Vite for lightning-fast development
- ✅ Mobile-friendly and responsive layout
- 📂 Organized folder structure for scalability

---

## 🧠 Tech Stack

### Frontend

- React 18
- Vite
- Tailwind CSS
- Flowbite + Lucide Icons
- React Router
- Redux Toolkit
- Sonner (toast notifications)

### Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Appwrite SDK (file uploads)
- JWT Authentication
- dotenv for env config

---

## 🗂️ Folder Structure Overview

MERN_BLOG/
│
├── client/ # Frontend React application
│ ├── components/ # UI components
│ ├── pages/ # Page views (Home, Dashboard, Blog view)
│ ├── assets/ # Images and static files
│ ├── dist/ # Production build (optional)
│ ├── redux/ # Redux store and slices
│ └── vite.config.js # Vite build config
│
├── models/ # Mongoose models
├── routes/ # Express route handlers
├── controllers/ # Business logic for API
├── utils/ # Utility functions
├── .env # Environment variables
├── server.js # Express app entry point
└── README.md # You’re here!

---

## 🔐 Environment Setup

Create a `.env` file at the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key

APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_BUCKET_ID=your_bucket_id
APPWRITE_API_KEY=your_api_key
⚙️ Getting Started
1. Clone the repository

git clone https://github.com/your-username/MERN_BLOG.git
cd MERN_BLOG
2. Install Backend Dependencies

npm install
3. Start Backend

npm run dev
Runs on http://localhost:5000

4. Setup Frontend

cd client
npm install
npm run dev
Runs on http://localhost:5173

🛠️ API Endpoints
Auth
POST /api/v1/auth/register

POST /api/v1/auth/login

Blogs
GET /api/v1/blog

POST /api/v1/blog (requires login)

PUT /api/v1/blog/:id

DELETE /api/v1/blog/:id

🧪 Deployment (Render)
Deploy Backend
Push backend code to GitHub

Create a new Web Service on Render

Set build/start commands:

Build: npm install

Start: npm run dev

Add Environment Variables from .env

Deploy!

Deploy Frontend
Build the frontend:


cd client
npm run build
Serve /client/dist with any static host (e.g., Netlify, Vercel, or Render static site)

🧰 Future Improvements
✅ Comment system

🧑 User profile & dashboard

🔍 Search and filtering

📊 View count per post

💬 Like/share functionality

📷 Screenshots
Add preview images from /client/dist/assets/ if needed

📄 License
This project is open-source under the MIT License.

🙌 Acknowledgements
Appwrite.io

Tiptap Editor

MongoDB Atlas

Flowbite React

```
