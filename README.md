# 🏪 Store Inventory Management System - Backend API

A fully functional REST API for managing store inventory, built with Node.js, Express.js, MongoDB, and Mongoose.

---

## 🚀 Live Demo

**Base URL:** https://store-inventory-api-0n57.onrender.com

---

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management

---

## 📁 Folder Structure

```
Store Inventory Api/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── productController.js # API logic
├── models/
│   └── productModel.js      # Product schema
├── routes/
│   └── productRoutes.js     # API routes
├── .env                     # Environment variables (not uploaded)
├── .gitignore
├── package.json
└── server.js                # Entry point
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/prajeshmeena69/Store-Inventory-API.git
cd Store-Inventory-API
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file in root directory
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the server
```bash
node server.js
```

Server will start at: `http://localhost:5000`

---

## 📦 Product Model

| Field | Type | Validation |
|-------|------|------------|
| productName | String | Required |
| productCode | String | Required, Unique |
| category | String | Electronics, Clothing, Food, Furniture |
| supplierName | String | Required |
| quantityInStock | Number | Min: 0 |
| reorderLevel | Number | Min: 1 |
| unitPrice | Number | Min: 0.01 |
| manufactureDate | Date | - |
| productType | String | Perishable / Non-Perishable |
| status | String | Available / Out of Stock (Default: Available) |

---

## 🔗 API Endpoints

### Base URL
```
https://store-inventory-api-0n57.onrender.com
```

### Product Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Add a new product |
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| PUT | /products/:id | Update product |
| DELETE | /products/:id | Delete product |
| GET | /products/search?name=xyz | Search product by name |
| GET | /products/category?cat=xyz | Filter by category |

---

## 📋 Sample Request & Response

### ➕ Add Product (POST /products)

**Request Body:**
```json
{
    "productName": "Samsung TV",
    "productCode": "ELEC001",
    "category": "Electronics",
    "supplierName": "Samsung Corp",
    "quantityInStock": 50,
    "reorderLevel": 10,
    "unitPrice": 499.99,
    "manufactureDate": "2024-01-15",
    "productType": "Non-Perishable",
    "status": "Available"
}
```

**Response (201 Created):**
```json
{
    "message": "Product added successfully",
    "data": {
        "_id": "69b2811ee01fea8406d83218",
        "productName": "Samsung TV",
        "productCode": "ELEC001",
        "category": "Electronics",
        "supplierName": "Samsung Corp",
        "quantityInStock": 50,
        "reorderLevel": 10,
        "unitPrice": 499.99,
        "manufactureDate": "2024-01-15T00:00:00.000Z",
        "productType": "Non-Perishable",
        "status": "Available",
        "createdAt": "2026-03-12T09:29:40.755Z",
        "updatedAt": "2026-03-12T09:29:40.755Z"
    }
}
```

---

### 📋 Get All Products (GET /products)

**Response (200 OK):**
```json
{
    "message": "Products fetched successfully",
    "data": [ { ...product objects... } ]
}
```

---

### 🔍 Search by Name (GET /products/search?name=Samsung)

**Response (200 OK):**
```json
{
    "message": "Search results",
    "data": [ { ...matching products... } ]
}
```

---

### 🗂️ Filter by Category (GET /products/category?cat=Electronics)

**Response (200 OK):**
```json
{
    "message": "Filtered results",
    "data": [ { ...filtered products... } ]
}
```

---

## 📡 HTTP Status Codes Used

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Server Error |

---

## 🌐 Deployment

- **GitHub:** https://github.com/prajeshmeena69/Store-Inventory-API
- **Render:** https://store-inventory-api-0n57.onrender.com

---

## 👨‍💻 Author

**Prajesh Meena**
- GitHub: [@prajeshmeena69](https://github.com/prajeshmeena69)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
