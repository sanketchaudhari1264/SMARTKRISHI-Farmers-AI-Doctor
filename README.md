# 🌿 SmartKrishi — Smart Crop Doctor & Farming Assistant

SmartKrishi is a web application that helps farmers diagnose crop diseases by uploading a photo and entering basic crop details. It provides instant disease detection, treatment advice, fertilizer recommendations, and prevention tips.

---

## 🖥️ Live Preview

| Page | URL |
|---|---|
| Home | http://localhost:3000 |
| Crop Doctor | http://localhost:3000/doctor |
| Features | http://localhost:3000/features |
| About | http://localhost:3000/about |

---

## 🗂️ Project Structure

```
SMARTKRISHI/
├── frontend/          # Next.js frontend (React)
│   ├── pages/         # App pages (Home, Doctor, About, etc.)
│   ├── components/    # Navbar, Layout
│   ├── styles/        # CSS modules
│   └── public/        # Static images
│
├── backend/           # Express.js backend (Node.js)
│   ├── routes/
│   │   └── analyze.js # Crop diagnosis API
│   └── server.js      # Entry point
│
└── README.md
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, React, CSS Modules |
| Backend | Node.js, Express.js |
| File Upload | Multer |
| API Communication | Fetch API (FormData) |
| Cross-Origin | CORS |

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smartkrishi.git
cd smartkrishi
```

### 2. Start the Backend

```bash
cd backend
npm install
node server.js
```

Backend runs at: `http://localhost:5000`

### 3. Start the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

> Both terminals must be running at the same time.

---

## 🌾 Crop Doctor — How It Works

1. Go to `http://localhost:3000/doctor`
2. Upload a photo of your crop
3. Enter the crop name (e.g. `tomato`, `rice`, `wheat`)
4. Optionally describe the problem
5. Click **Diagnose Crop**
6. Get instant results:
   - Detected Disease
   - Severity Level
   - Recommended Treatment
   - Fertilizer Suggestion
   - Prevention Tips

---

## 🔗 API Endpoint

**POST** `http://localhost:5000/api/analyze`

| Field | Type | Required |
|---|---|---|
| `image` | File | Yes |
| `cropName` | Text | Yes |
| `description` | Text | No |

**Example Response:**
```json
{
  "success": true,
  "cropName": "tomato",
  "diagnosis": {
    "disease": "Early Blight",
    "severity": "Moderate",
    "treatment": "Apply fungicide spray every 7-10 days.",
    "fertilizer": "Use balanced NPK (19:19:19) fertilizer.",
    "prevention": "Use mulch, ensure good air circulation."
  }
}
```

---

## 📦 Dependencies

### Backend
```bash
npm install express cors multer
```

### Frontend
```bash
npm install   # installs Next.js and React automatically
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for farmers by the SmartKrishi Team
