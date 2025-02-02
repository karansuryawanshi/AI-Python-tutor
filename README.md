# AI Python Tutor

This project is designed to provide an interactive AI tutor experience using Python, incorporating 3D models and animations. Built with React and Tailwind CSS, the project leverages modern web technologies to create a responsive and engaging learning environment.

## Project Structure

karansuryawanshi-ai-python-tutor/
├── README.md # Project overview
├── package.json # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── public/
│ ├── index.html # Main HTML file
│ ├── manifest.json # Web app manifest
│ └── robots.txt # Robots.txt for search engine indexing
└── src/
├── App.css # Global styling for App
├── App.js # Main component for the application
├── App.test.js # Test file for App component
├── index.css # Global styles for the app
├── index.js # Entry point for React app
├── reportWebVitals.js # Performance tracking
├── setupTests.js # Test setup for React
└── assets/
├── animated_robot_sdc.glb # 3D model for robot animation
├── need_some_space.glb # 3D model for space animation
├── robot_playground.glb # 3D model for robot playground animation
└── tom_cat_swing_dancing.glb # 3D model for dancing cat animation
s

## Features

- **Interactive 3D Models**: Incorporates 3D models like animated robots and playful characters to enhance user engagement.
- **AI Python Tutor**: Offers an AI-driven tutor experience for Python learning, providing guidance and interactive coding challenges.
- **Responsive Design**: Designed with React and styled using Tailwind CSS to ensure compatibility across various devices.
- **Performance Monitoring**: Integrated with web vitals tracking to monitor and optimize performance.

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/karansuryawanshi/karansuryawanshi-ai-python-tutor.git
   ```

### Navigate to the project directory:

```bash
cd karansuryawanshi-ai-python-tutor
```

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm start
```

Your app should now be running on http://localhost:3000.

### Technologies Used

- **React.js:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for creating responsive designs.
- **Three.js (GLB Models):** For rendering interactive 3D models in the browser.
- **Node.js:** JavaScript runtime used for the backend server (if any).

### Contributing

- Fork this repository.
- Create a new branch (`git checkout -b feature-name`).
- Make changes and commit (`git commit -am 'Add new feature'`).
- Push to the branch `(git push origin feature-name)`.
- Create a new Pull Request.
