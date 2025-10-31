# Chaintech Network - React User Management Assignment

This is a **frontend-only user management project** built using **React + Vite** and **pnpm** as the package manager.  
It allows users to **sign up, log in, view their profile, and edit their profile information**, all handled through the browser’s **localStorage**.

---

##  Features

-  **Signup Page** – Users can register with a unique email address.
-  **Login Page** – Authenticates users by matching stored credentials.
-  **Profile Page** – Displays user details (username, email, password).
-  **Edit Profile Page** – Allows users to update their information.
-  **Show/Hide Password** – Secure and user-friendly password toggle.
-  **LocalStorage-based persistence** – Data remains after page reload.
-  **Navigation with React Router DOM** – Smooth page transitions.

---

##  Tech Stack

| Tool / Library        | Purpose                                  |
|------------------------|------------------------------------------|
|  **Vite**             | Fast React development environment       |
|  **React.js**         | Frontend library for UI development      |
|  **pnpm**             | Efficient package manager                |
|  **React Router DOM** | Client-side routing                      |
|  **React Hook Form**  | Form handling and validation             |
|  **Tailwind CSS**     | Utility-first CSS framework for styling  |


## 🧑 Installation & Setup

Follow these steps to run the project locally:

# 2 Clone the repository
git clone <your-repo-url>

# 2 Move into the project directory
cd chaintech-assignment

# 3 Install dependencies
pnpm install

# 4 Start the development server
pnpm run dev
After that, open your browser and visit:

# http://localhost:5173/

# Folder Structure
src/
 ├── components/
 │   ├── Signup.jsx
 │   ├── Login.jsx
 │   ├── Profile.jsx
 │   └── EditProfile.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

# How It Works
Signup:
User enters username, email, and password → data is stored in localStorage under "users" key.
Duplicate emails are not allowed.

Login:
Checks credentials against stored users.
If valid, redirects to /profile and passes user email using React Router state.

Profile:
Displays user info by fetching it from localStorage.
Provides a link to edit profile details.

Edit Profile:
Allows the user to update their data and saves changes back to localStorage.

 Notes
All data is stored locally in the browser (no backend).

Refreshing the page does not log out the user as data is persistent in localStorage.

This project was created as part of a Chaintech Network Assignment.

 Author
 Abhishek Kumar Kaushal
  BCA Student at Shoolini University
 MERN Stack Developer in Progress

 License
This project is for educational and assessment purposes only.
© 2025 Chaintech Network Assignment – All rights reserved.