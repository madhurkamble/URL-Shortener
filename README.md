Yes, understood. You want **the exact same README structure and style you pasted**, with **only today's authentication work added/updated** — not a completely redesigned README.

Here is your README in the same format, updated for today's work:

````markdown
# 🔗 URL Shortener

> A simple and efficient URL Shortener built using **Node.js, Express.js, MongoDB, Mongoose and EJS**, with URL redirection, visit analytics and user authentication.

---

## 🚀 Overview

**URL Shortener** is a web application that converts long URLs into short, easy-to-share links.

The application allows users to:

- 🔗 Create short URLs
- ⚡ Redirect users to the original URL
- 📊 Track total clicks
- 🕒 Maintain visit history
- 🗄️ Store URL data in MongoDB
- 📋 Copy generated short URLs
- 🌐 Access analytics through REST APIs
- 👤 Register a new account
- 🔐 Login securely
- 🚪 Logout from the application

---

## ✨ Features

- **URL Shortening** — Generate a unique short URL from any valid long URL.
- **Instant Redirection** — Automatically redirect from the short URL to the original URL.
- **Click Tracking** — Record every visit to a shortened URL.
- **Visit History** — Store visit count and timestamps.
- **MongoDB Integration** — Persist URL and analytics data.
- **REST API** — Backend APIs for URL creation, redirection and analytics.
- **EJS Interface** — Simple and user-friendly web interface.
- **Responsive Design** — Works across different screen sizes.
- **User Registration** — Create a new account using username, email and password.
- **User Login** — Authenticate users using email and password.
- **User Logout** — Logout from the application and clear the authentication cookie.
- **JWT Authentication** — Secure authenticated routes using JSON Web Tokens.
- **Password Hashing** — Hash user passwords securely using bcryptjs.
- **HTTP-only Cookie** — Store the authentication token securely in a cookie.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | Backend runtime |
| **Express.js** | Web framework and REST APIs |
| **MongoDB** | Database |
| **Mongoose** | MongoDB object modeling |
| **EJS** | Dynamic frontend rendering |
| **HTML/CSS** | User interface |
| **JavaScript** | Frontend interactions |
| **ShortID** | Short URL generation |
| **JWT** | User authentication |
| **bcryptjs** | Password hashing |
| **cookie-parser** | Authentication cookie handling |
| **dotenv** | Environment variable management |
| **Nodemon** | Development server |

---

## 📂 Project Structure

```text
URL Shortener/
│
├── controllers/
│   ├── authController.js
│   └── urlController.js
│
├── models/
│   ├── userModel.js
│   └── urlModel.js
│
├── routes/
│   ├── authRoute.js
│   └── urlRoute.js
│
├── Middleware/
│   └── authMiddleWare.js
│
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   └── register.ejs
│
├── ScreenShots/
│   ├── HomePage.png
│   ├── MongoDB_Records.png
│   ├── URL_Details.png
│   ├── Login.png
│   ├── Register.png
│   └── Logout_Functionality.png
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
````

---

## ⚙️ Application Workflow

```text
User registers an account
        ↓
POST /auth/register
        ↓
Password is hashed using bcryptjs
        ↓
User data saved in MongoDB
        ↓
User logs in
        ↓
POST /auth/login
        ↓
JWT token generated
        ↓
Token stored in HTTP-only cookie
        ↓
User accesses URL Shortener
        ↓
User enters long URL
        ↓
POST /api/shorten
        ↓
Generate Short ID
        ↓
Save URL in MongoDB
        ↓
Return Short URL
        ↓
User opens Short URL
        ↓
Find URL in MongoDB
        ↓
Record Visit
        ↓
Redirect to Original URL
        ↓
User can Logout
        ↓
Authentication cookie is cleared
```

---

## 🔌 API Endpoints

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| `GET`  | `/`                        | Display homepage         |
| `POST` | `/auth/register`           | Register a new user      |
| `POST` | `/auth/login`              | Login user               |
| `GET`  | `/auth/logout`             | Logout user              |
| `POST` | `/api/shorten`             | Create a short URL       |
| `GET`  | `/api/:shortUrl`           | Redirect to original URL |
| `GET`  | `/api/analytics/:shortUrl` | Get URL analytics        |

### User Registration

**Request:**

```http
POST /auth/register
```

**Body:**

```json
{
    "username": "Madhur",
    "email": "madhur@example.com",
    "password": "********"
}
```

After successful registration, the user is redirected to the application.

---

### User Login

**Request:**

```http
POST /auth/login
```

**Body:**

```json
{
    "email": "madhur@example.com",
    "password": "********"
}
```

After successful login, a JWT token is generated and stored in an HTTP-only cookie.

---

### User Logout

```http
GET /auth/logout
```

The authentication cookie is cleared and the user is redirected to the login page.

---

### Create Short URL

**Request:**

```http
POST /api/shorten
```

**Body:**

```json
{
    "originalUrl": "https://www.example.com"
}
```

**Response:**

```json
{
    "shortUrl": "AaQCQczQp"
}
```

---

### Get Analytics

```http
GET /api/analytics/AaQCQczQp
```

Example response:

```json
{
    "totalClicks": 3,
    "analytics": [
        {
            "visitedCount": 1,
            "visitedAt": "2026-09-30T13:07:17.529Z"
        }
    ]
}
```

---

## 🗄️ Database

### Database Name

```text
url_shortner
```

### User Document

```text
username
email
password
```

Example:

```json
{
    "username": "Madhur",
    "email": "madhur@example.com",
    "password": "hashed_password"
}
```

### URL Document

```text
originalUrl
shortUrl
visitedHistory
createdAt
updatedAt
```

Example:

```json
{
    "originalUrl": "https://www.google.com",
    "shortUrl": "AaQCQczQp",
    "visitedHistory": [
        {
            "visitedCount": 1,
            "visitedAt": "2026-09-30T13:07:17.529Z"
        }
    ]
}
```

---

# 📸 Screenshots

## 🏠 Home Page

**Image Path:**

```text
ScreenShots/HomePage.png
```

![Home Page](./ScreenShots/HomePage.png)

---

## 🔐 Login Page

**Image Path:**

```text
ScreenShots/Login.png
```

![Login Page](./ScreenShots/Login.png)

---

## 📝 Register Page

**Image Path:**

```text
ScreenShots/Register.png
```

![Register Page](./ScreenShots/Register.png)

---

## 🚪 Logout Functionality

**Image Path:**

```text
ScreenShots/Logout_Functionality.png
```

![Logout Functionality](./ScreenShots/Logout_Functionality.png)

---

## 🗄️ MongoDB Records

**Image Path:**

```text
ScreenShots/MongoDB_Records.png
```

![MongoDB Records](./ScreenShots/MongoDB_Records.png)

---

## 📊 URL Details & Analytics

**Image Path:**

```text
ScreenShots/URL_Details.png
```

![URL Details](./ScreenShots/URL_Details.png)

---

## 💻 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/madhurkamble/URL-Shortener.git
```

### 2. Open the Project

```bash
cd URL-Shortener
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

The application uses:

```text
mongodb://localhost:27017/url_shortner
```

### 5. Start the Server

```bash
node index.js
```

Or, if Nodemon is configured:

```bash
npm run dev
```

### 6. Open the Application

```text
http://localhost:3000
```

---

## 🔐 Environment Configuration

The application uses environment variables for JWT authentication.

Create a `.env` file:

```env
JWT_SECRET=my_super_secret_key_123456
```

> Make sure `.env` is included in `.gitignore`.

---

## 🔮 Future Enhancements

* 👤 Personal URL dashboard
* 🎯 Custom short URLs
* 📊 Graph-based analytics
* 📱 QR code generation
* ⏳ URL expiration
* 🌍 MongoDB Atlas integration
* ☁️ Cloud deployment
* 🔒 Rate limiting and API security
* 📈 Advanced click analytics

---

## 🎯 Learning Outcomes

Through this project, I practiced:

* Building REST APIs with Express.js
* Working with MongoDB and Mongoose
* Designing Mongoose schemas
* Implementing MVC-style project structure
* Handling HTTP requests and responses
* Implementing URL redirection
* Connecting frontend and backend using JavaScript
* Server-side rendering with EJS
* Tracking and storing analytics data
* Implementing user registration and login
* Using JWT for authentication
* Hashing passwords using bcryptjs
* Working with HTTP-only cookies
* Protecting routes using authentication middleware
* Using Git and GitHub for version control

---

## 👨‍💻 Author

### Madhur Kamble

🔗 **GitHub:**
[https://github.com/madhurkamble](https://github.com/madhurkamble)

🔗 **LinkedIn:**
[https://www.linkedin.com/in/madhur-kamble-55911b290](https://www.linkedin.com/in/madhur-kamble-55911b290)

---

## ⭐ Support

If you found this project useful, consider giving the repository a **⭐ Star** on GitHub.

```

This keeps **your original README organization, wording style, tables, sections, API format, screenshot format, and installation format**, while adding only the work you completed today.
```
