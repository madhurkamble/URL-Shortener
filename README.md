# 🔗 URL Shortener

> A simple and efficient URL Shortener built using **Node.js, Express.js, MongoDB, Mongoose and EJS**, with URL redirection and visit analytics.

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
| **Nodemon** | Development server |

---

## 📂 Project Structure

```text
URL Shortener/
│
├── controllers/
│   └── urlController.js
│
├── models/
│   └── urlModel.js
│
├── routes/
│   └── urlRoute.js
│
├── views/
│   └── index.ejs
│
├── ScreenShots/
│   ├── HomePage.png
│   ├── MongoDB_Records.png
│   └── URL_Details.png
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
User enters long URL
        ↓
Frontend sends request
        ↓
POST /api/shorten
        ↓
Express Controller
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
```

---

## 🔌 API Endpoints

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| `GET`  | `/`                        | Display homepage         |
| `POST` | `/api/shorten`             | Create a short URL       |
| `GET`  | `/api/:shortUrl`           | Redirect to original URL |
| `GET`  | `/api/analytics/:shortUrl` | Get URL analytics        |

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

For production, the MongoDB connection string can be stored in an environment variable.

Example `.env`:

```env
MONGO_URI=mongodb://localhost:27017/url_shortner
PORT=3000
```

> Make sure `.env` is included in `.gitignore`.

---

## 🔮 Future Enhancements

* 🔐 User authentication
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
