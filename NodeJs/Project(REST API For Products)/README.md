## Project: Mini API (Node.js HTTP Module)

### 📌 Task

Build a small **REST API** for `/products` using **Node.js `http` module** (without Express).

### Endpoints:

- **GET /products** → Returns all products as JSON.
- **POST /products** → Adds a new product (from request body).
- **GET /products/:id** → Returns product by ID.
- **PUT /products/:id** → Updates an existing product by ID.
- **DELETE /products/:id** → Deletes a product by ID.

### 💡 Goal

This exercise simulates a **mini backend API** using only the built-in `http` module in Node.js — no external frameworks.

It helps you practice:

- Handling routes manually.
- Parsing request data (`req.on('data')`, `req.on('end')`).
- Managing CRUD operations (Create, Read, Update, Delete).
- Working with JSON data in Node.js.

---

🚀 After completing this, you’ll have a simple **products REST API** built from scratch!

### 🔗 Example Usage

#### 1️⃣ Get all products

```bash
curl http://localhost:3000/products
```
