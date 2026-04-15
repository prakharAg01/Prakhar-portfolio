# Prakhar Agrawal — Personal Portfolio

A full-stack personal portfolio built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## 📖 Project Description

A full-stack personal portfolio website built from scratch using the MERN Stack. It serves as a living CV — showcasing my skills, projects, credentials, and a fully functional contact form that stores messages in MongoDB and sends email notifications via Nodemailer. The resume is available for download in both PDF and DOCX formats served through dedicated Express backend routes. The UI is fully responsive across all devices and features a clean dark-themed design.

### ✨ Features

- ⚛️ **React 19 frontend** powered by Vite for fast dev builds
- 🎨 **Tailwind CSS v4** for utility-first styling
- 🗂️ **Sections**: About, Skills, Projects, Credentials, Contact
- 📬 **Contact form** wired to backend — saves to MongoDB + sends email notification via Nodemailer
- 📄 **Resume download** in PDF and DOCX from Express backend routes
- 🌐 **Fully responsive** (mobile, tablet, desktop)
- 🔀 **React Router v7** for client-side routing with SPA fallback via `vercel.json`
- 🛡️ **CORS** configured for secure cross-origin communication
- 📊 **Morgan** request logging on the backend

---

## 🚀 Live Deployment

| Layer | Platform | URL |
|---|---|---|
| Frontend | Vercel | https://prakhar-portfolio-a1p5.vercel.app |
| Backend | Render | https://prakhar-portfolio.onrender.com |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS v4, React Router v7 |
| Icons | Lucide React, React Icons |
| Backend | Node.js, Express.js 5 |
| Database | MongoDB Atlas, Mongoose |
| Email | Nodemailer (Gmail SMTP) |
| Middleware | CORS, Morgan, dotenv |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📂 Project Structure

```
Prakhar-portfolio/
├── client/                        # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx          # About section
│   │   │   ├── Contact.jsx        # Contact form → Express → MongoDB + email
│   │   │   ├── Credentials.jsx    # Certifications & achievements
│   │   │   ├── Projects.jsx       # Projects showcase
│   │   │   ├── Skills.jsx         # Skills section
│   │   │   └── layout/            # Shared layout components (Navbar, Footer, etc.)
│   │   ├── constants/             # Static data & config constants
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── pages/
│   │   │   └── Home.jsx           # Main single-page layout
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── vercel.json                # SPA routing fallback fix
│   ├── .env.example
│   └── package.json
│
└── server/                        # Node.js + Express backend
    ├── Routes/
    │   └── Contacts.js            # POST /api/contact
    ├── models/
    │   └── contacts.js            # Mongoose schema for contact messages
    ├── files/                     # Resume files (gitignored)
    │   ├── Prakhar_Agrawal_Resume.pdf
    │   └── Prakhar_Agrawal_Resume.docx
    ├── server.js                  # App entry point
    ├── config.env                 # Local env config (gitignored)
    ├── .env.example
    └── package.json
```

---

## ⚙️ Local Setup

### Prerequisites

- **Node.js** v18+
- **npm** v9+
- **MongoDB Atlas** account
---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Prakhar-portfolio.git
cd Prakhar-portfolio
```

---

### 2. Setup the Backend

```bash
cd server
npm install
```

Create your `config.env` file (copy from `.env.example`):

```bash
cp .env.example config.env
```

Fill in your values in `config.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_16_char_app_password_no_spaces
```

Place your resume files inside `server/files/`:

```
server/files/Prakhar_Agrawal_Resume.pdf
server/files/Prakhar_Agrawal_Resume.docx
```

Start the backend server:

```bash
npm run dev
# Server runs at → http://localhost:5000
```

---

### 3. Setup the Frontend

Open a new terminal:

```bash
cd client
npm install
```

Create `client/.env` (copy from `.env.example`):

```bash
cp .env.example .env
```

Fill in your values in `client/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Start the frontend dev server:

```bash
npm run dev
# Frontend runs at → http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/download/resume/pdf` | Download resume as PDF |
| `GET` | `/api/download/resume/docx` | Download resume as Word document |

---

## 🔐 Environment Variables

### `server/config.env`

| Variable | Description |
|---|---|
| `PORT` | Server port (`5000` locally, auto-set on Render) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `FRONTEND_URL` | Frontend URL for CORS (`*` for open, or your Vercel URL) |
| `EMAIL_USER` | Gmail address used by Nodemailer |
| `EMAIL_PASS` | 16-character Gmail App Password (no spaces) |

### `client/.env`

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Backend base URL (`http://localhost:5000` or your Render URL) |

---

## 🚢 Deployment

### Frontend → Vercel

1. Push your repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Set **Root Directory** to `client`
4. Set **Framework** to `Vite`
5. Add environment variable:
   ```
   VITE_API_BASE_URL=https://your-backend.onrender.com
   ```

### Backend → Render

1. Create a **New Web Service** on [render.com](https://render.com)
2. Set **Root Directory** to `server`
3. Set **Build Command** to `npm install`
4. Set **Start Command** to `npm start`
5. Add all environment variables from `server/config.env`

---

## 👤 Made By

**Prakhar Agrawal**

- GitHub: [prakharAg01](https://github.com/prakharAg01)
- LinkedIn: [Prakhar Agrawal](https://www.linkedin.com/in/prakhar-agrawal-1135352aa/)
