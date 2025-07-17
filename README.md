Absolutely! Here's the complete **README.md** content in clean **Markdown** format — you can directly copy this into your `README.md` file:

````markdown
# 🍽️ Restaurant Management API (Node.js + PostgreSQL + Docker)

This is a full-featured backend RESTful API for managing a restaurant system. It is built using **Node.js**, **Express**, and **PostgreSQL**, and is fully containerized using **Docker**.

---

## 🔧 Tech Stack

- Node.js
- Express
- PostgreSQL (via Docker)
- Docker Compose
- Bcrypt (for password hashing)
- SQL schema and seed files

---

## 🛠️ Features

- ✅ User Signup & Login (with hashed passwords)
- ✅ Dockerized PostgreSQL setup
- ✅ Database schema migration & seeding
- ✅ API routes for:
  - User Authentication
  - Restaurants (CRUD)
  - Menus (CRUD)
  - Customers (CRUD)
  - Orders (create, get by restaurant, update)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/salmanazamdev/restaurant-api-nodejs-docker.git
cd restaurant-api-nodejs-docker
````

### 2. Start PostgreSQL via Docker

```bash
docker compose up -d
```

### 3. Create Database

```bash
docker exec -i restaurant-api-container psql -U root -d postgres -c "CREATE DATABASE restaurant_db;"
```

### 4. Run Migrations

```bash
docker exec -i restaurant-api-container psql -U root -d restaurant_db < database-schema.sql
```

### 5. Seed Database (Optional)

```bash
docker exec -i restaurant-api-container psql -U root -d restaurant_db < db-seed.sql
```

### 6. Install Node Dependencies

```bash
npm install
```

### 7. Run the Server

```bash
nodemon index.js
```

---

## 📂 Project Structure

```
│
├── functions/              → Signup, login, welcome handlers
├── database/               → DB config file
├── database-schema.sql     → SQL for DB tables
├── db-seed.sql             → Dummy data (optional)
├── docker-compose.yml      → Docker PostgreSQL container
├── index.js                → Main server entry point
└── README.md
```

---

## 🔐 Status Codes

* 200 – OK
* 201 – Created
* 400 – Bad Request
* 401 – Unauthorized
* 403 – Forbidden
* 404 – Not Found
* 500 – Internal Server Error

---

## 📬 Author

Muhammad Salman Azam
[LinkedIn](https://www.linkedin.com/in/salmanazamdev/)
[GitHub](https://github.com/salmanazamdev)
---