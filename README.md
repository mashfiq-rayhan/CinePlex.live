# CinePlex.live 🎬

CinePlex.live is a modern online movie streaming platform designed to simplify the management and streaming of movies for both administrators and users. Built with Node.js, Express, and EJS templating, CinePlex.live features an intuitive admin dashboard for adding and managing movies, as well as a scalable backend architecture ready for future enhancements.

## ✨ Features

- 🎥 Add and manage movies with detailed metadata (title, year, genre, quality, actors, trailer, and more)
- 🏷️ Quick category, quality, and keyword selection with one-click buttons
- 🔗 TMDB integration for auto-filling movie details and posters
- 📄 Responsive admin dashboard built with Bootstrap and EJS
- 📦 Modular code structure for easy maintenance and scalability
- 🛡️ Error handling and custom 404 pages for better user experience

## 🏆 Achievements

- 🚀 Developed a fully functional movie management system with a user-friendly admin interface
- ⚡ Automated movie metadata entry using TMDB API, reducing manual input and errors
- 🧩 Designed a modular Express.js backend for easy feature expansion
- 🎯 Implemented quick-select buttons for categories, qualities, and keywords, streamlining the admin workflow
- 🖼️ Enabled dynamic poster and backdrop image handling for richer movie listings
- 🛠️ Established a scalable project structure, making future enhancements and integrations straightforward

## 🗂️ Project Structure

- **app.js**: Main application entry point and server setup
- **controllers/**: Route handlers for admin and error management
- **models/**: Movie model (expandable for database integration)
- **routes/**: Express route definitions for admin operations
- **views/**: EJS templates for admin dashboard and error pages
- **public/**: Static assets (CSS, JS, images)
- **assets/**: Project images and logos

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mashfiq-rayhan/CinePlex.live.git
   cd CinePlex.live-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Visit [http://localhost:3000/admin/add-movie](http://localhost:3000/admin/add-movie) to access the admin dashboard.

---

Whether you're an aspiring developer or a movie enthusiast looking to build your own streaming platform, CinePlex.live provides a solid foundation and practical patterns for modern web development.
