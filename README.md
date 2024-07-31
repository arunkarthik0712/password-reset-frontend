# Password Reset Flow Application

This password reset flow application is built using the MERN stack (MongoDB, Express.js, React, Node.js) and utilizes Bootstrap for responsive design. It includes registration, login, forgot password, and password reset functionalities. Nodemailer is used to send password reset emails with secure links to registered users.

## Features

- User registration
- User login
- Forgot password
- Reset password
- Email notifications for password reset

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer

---

## Deployed URL:

- **Frontend**: `https://arunkarthik0710-password-reset.netlify.app/`
- **Backend**: `https://password-reset-0z3h.onrender.com`

---

## Usage

1. Register with a valid email.
2. Log in with your registered credentials.
3. If you forget your password, click on "Forgot Password" and provide the registered email to receive a password reset link.
4. Check your email for the reset link, click on it, and reset your password.

---

## API Endpoints

- **Register**: `POST /api/register`

  - **Request Body**:
    ```json
    {
      "username": "yourUsername",
      "email": "yourEmail",
      "password": "yourPassword"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **Login**: `POST /api/login`

  - **Request Body**:
    ```json
    {
      "email": "yourEmail",
      "password": "yourPassword"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Login successful",
      "token": "yourJWTToken"
    }
    ```

- **Forgot Password**: `POST /api/forgot-password`

  - **Request Body**:
    ```json
    {
      "email": "yourEmail"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Password reset link sent to email"
    }
    ```

- **Reset Password**: `PUT /api/reset-password/:token`
  - **Request Body**:
    ```json
    {
      "password": "yourNewPassword"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Password has been reset successfully"
    }
    ```

---
