

# **SimpliAuth - Secure Authentication System**  

### 🚀 **Project Demo:**  
[🔗 Click here to view the demo](https://drive.google.com/file/d/1wy8wjwiS1YlnOXEQQfYS3ha9cmRsxmG-/view?usp=sharing)  

## 📌 **Overview**  
SimpliAuth is a secure and user-friendly authentication system built with **React.js**, **Styled Components**, and **React Router**. It provides seamless **signup, login, and logout functionality** with local storage to manage user authentication.  

## ⚡ **Features**  
✅ **Landing Page** - Welcomes users and directs them to login/signup.  
✅ **User Registration (Signup Page)** - New users can register; existing users are prevented from signing up again.  
✅ **User Login** - Authenticates users and redirects them to the Home Page.  
✅ **Home Page** - Displays a message after successful login.  
✅ **Logout Feature** - Allows users to log out and return to the login page.  
✅ **Validation & Alerts** - Shows error messages for invalid credentials or duplicate emails.  

## 🛠 **Tech Stack**  
- **Frontend:** React.js, Styled Components  
- **Routing:** React Router  
- **State Management:** useState, useEffect  
- **Form Handling:** Formik, Yup (for validation)  

## 🏗 **Project Structure**  
```
/src  
 ├── components  
 │   ├── LandingPage.js  
 │   ├── Signup.js  
 │   ├── Login.js  
 │   ├── Home.js  
 │   ├── Navbar.js  
 ├── App.js  
 ├── index.js  
 ├── styles  
```

## 🚀 **How to Run the Project**  

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/yourusername/simpliauth.git
cd simpliauth
```

2️⃣ **Install Dependencies**  
```bash
npm install
```

3️⃣ **Start the Development Server**  
```bash
npm start
```
Then open **http://localhost:3000** in your browser.  

## 🎯 **Usage Flow**  
- Users start at the **Landing Page** → Click **Get Started** → Go to **Login Page**.  
- If they don’t have an account, they go to **Signup Page**, register, and are redirected to **Login Page**.  
- On **successful login**, they are redirected to the **Home Page**.  
- They can **log out**, which redirects them back to **Login Page**.  

## 📜 **License**  
This project is open-source and free to use.  

