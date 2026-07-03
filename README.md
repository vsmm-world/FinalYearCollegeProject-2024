# Final Year College Project (2024) — Language Learning Platform

> 🍴 This is a fork of [vedantbhavani/colege-project](https://github.com/vedantbhavani/colege-project), kept here as a personal archive/reference from a final-year college project collaboration.

A language-learning web platform built with Express, EJS, and MongoDB, supporting text/video/document lessons per language, user authentication, and an admin/content-management area.

## Features

- User registration & login (Passport local strategy, session-based)
- Language catalog with per-language content
- Multiple content types: text, video, and document lessons (`textContent`, `videoContent`, `docContent`)
- File/image upload handling (`multer`)
- User profile, feedback, and contact pages
- Server-rendered views with EJS (navbar/footer partials, sliders, language pages, admin views)

## Tech Stack

- Node.js, Express
- Passport.js (local strategy) + `express-session`
- MongoDB via Mongoose
- EJS templating
- Multer for uploads

## Project Structure

```
app.js                  # Express app entry point
auth/
├── auth.js             # Passport auth middleware
└── passportConf.js     # Passport strategy configuration
db/
└── connection.js       # MongoDB connection
middleware/
└── imageHandler.js     # Upload handling
models/
├── user.js
├── Langauage.js
├── textContent.js
├── videoContent.js
└── docContent.js
routes/
└── route.js
views/                  # EJS templates (language pages, admin, auth, partials)
public/                 # Static CSS/JS/images/icons
uploads/                # Uploaded content (e.g. project logo)
```

## Getting Started

### Prerequisites
- Node.js 18+
- A running MongoDB instance

### Setup

```bash
git clone https://github.com/vsmm-world/FinalYearCollegeProject-2024.git
cd FinalYearCollegeProject-2024
npm install
```

Configure your MongoDB connection in `db/connection.js` / via `.env` (the project uses `dotenv`), then run:

```bash
npm run start:dev   # nodemon, auto-restarts on change
# or
npm start
```

## Attribution

Original project by [vedantbhavani](https://github.com/vedantbhavani) at [colege-project](https://github.com/vedantbhavani/colege-project). This fork is kept as a personal reference from the collaboration.

## License

MIT
