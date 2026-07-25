# SmartKrishi

SmartKrishi is a responsive farming-assistance web app. Farmers can sign in, upload a crop image for diagnosis, view a Banana Leaf Blight example, and access crop-care guidance in English, Hindi, and Marathi.

## Features

- Login-first user flow with session logout
- Responsive desktop and mobile interface
- English, Hindi, and Marathi navigation and authentication screens
- Crop Doctor form with image upload
- Banana Leaf Blight sample image and bilingual diagnosis result
- Express API for demo crop diagnoses

## Tech stack

| Area | Technology |
| --- | --- |
| Frontend | Next.js 14, React 18 |
| Styling | CSS Modules, global CSS |
| Backend | Node.js, Express |
| Upload handling | Multer |
| API requests | Fetch API / FormData |

## Project structure

```text
SMARTKRISHI/
├── frontend/                 # Next.js web application
│   ├── components/           # Layout and navigation
│   ├── context/              # Language provider
│   ├── pages/                # Application routes and screens
│   ├── public/               # Public images, including Banana.jpg
│   ├── styles/               # Global and CSS-module styles
│   ├── .env.example          # Frontend environment-variable template
│   └── package.json
├── backend/                  # Express diagnosis API
│   ├── routes/analyze.js     # Demo crop-analysis endpoint
│   ├── server.js             # API entry point
│   └── package.json
├── .gitignore
└── README.md
```

## Run locally

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### 1. Start the backend

```bash
cd backend
npm install
npm start
```

The API starts at `http://localhost:5000`.

### 2. Configure and start the frontend

Open another terminal from the repository root:

```bash
cd frontend
copy .env.example .env.local
npm install
npm run dev
```

On macOS/Linux, use `cp .env.example .env.local` instead of `copy`.

Open `http://localhost:3000`. New browser sessions begin at Login. Use **Use Banana Leaf Blight Sample**, then click **Diagnose Crop** to view the sample result.

## Environment variables

| Variable | Used by | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Frontend | Base URL of the Express API, for example `https://your-api.example.com` |
| `PORT` | Backend | API port; defaults to `5000` locally |
| `OPENAI_API_KEY` | Backend | Reserved for a future OpenAI integration; keep the real value only in hosting-provider environment variables |
| `OPENAI_MODEL` | Backend | Optional future model configuration |

## Production build

```bash
cd frontend
npm run build
npm start
```

## Deploy

### Frontend on Vercel

1. Push this repository to GitHub.
2. In Vercel, select **Add New → Project** and import the GitHub repository.
3. Set the **Root Directory** to `frontend`.
4. Add `NEXT_PUBLIC_API_URL` in **Project Settings → Environment Variables**. Its value must be the public URL of your deployed backend (without a trailing slash).
5. Deploy. Vercel detects Next.js automatically.

### Backend deployment

The `backend` folder is an Express server, so deploy it to a Node.js host such as Render, Railway, or a Vercel serverless-function setup. Set its `PORT` only if the host requires it, then use the deployed API URL as `NEXT_PUBLIC_API_URL` in Vercel.

> The crop-doctor form cannot use `http://localhost:5000` after deployment. Set `NEXT_PUBLIC_API_URL` before deploying the frontend.

## Future OpenAI integration

The Express backend is intentionally kept as a separate service for future AI diagnosis. When you are ready, add `OPENAI_API_KEY` and `OPENAI_MODEL` to the backend host's environment variables and implement the API call only in `backend/routes/analyze.js`. Do not put OpenAI keys in the frontend or commit them to Git.

## Push to GitHub

```bash
git add .
git commit -m "Prepare SmartKrishi for deployment"
git push origin main
```

If your default branch is not `main`, replace it with the branch name shown by `git branch --show-current`.
