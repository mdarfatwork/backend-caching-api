# 🚀 Customizable Caching API

A high-performance caching API built using **Node.js & Express** with a predefined maximum cache size limit. This API allows you to **store, retrieve, and delete** key-value pairs efficiently.

## 📌 Features
- **Store key-value pairs** in the cache.
- **Retrieve stored values** using a unique key.
- **Delete specific keys** from the cache.
- **Predefined max cache size** (default: `10` items).
- **Optimized for performance**.

## 📂 API Endpoints

### ➕ Store a key-value pair
```http
POST /cache
```
**Request Body:**
```json
{
  "key": "yourKey",
  "value": "yourValue"
}
```
**Response:**
- ✅ `200 OK`: `{ "message": "Stored successfully" }`
- ❌ `400 Bad Request`: `{ "error": "Cache is full" }`

---

### 📌 Retrieve a value by key
```http
GET /cache/{key}
```
**Response:**
- ✅ `200 OK`: `{ "key": "yourKey", "value": "yourValue" }`
- ❌ `404 Not Found`: `{ "error": "Key not found in cache" }`

---

### ❌ Delete a key from cache
```http
DELETE /cache/{key}
```
**Response:**
- ✅ `200 OK`: `{ "message": "Deleted successfully", "key": "yourKey" }`
- ❌ `404 Not Found`: `{ "error": "Key not found in cache" }`

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/backend-caching-api.git
cd backend-caching-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Server
```sh
npm start
```
**Server will start at:** `http://localhost:5000`

## 🚀 Deployment on Render

1. **Push code to GitHub**
2. **Create a new Render Web Service**
3. **Set the build command:**
   ```sh
   npm install
   ```
4. **Set the start command:**
   ```sh
   npm start
   ```
5. **Deploy & access API at:** `https://your-app.onrender.com`

## 📌 Testing with cURL

### 🔹 Store 10 values
```sh
for i in {1..10}; do
  curl -X POST https://your-app.onrender.com/cache \
       -H "Content-Type: application/json" \
       -d "{\"key\": \"key$i\", \"value\": \"value$i\"}"
  echo ""
done
```

### 🔹 Try storing 11th value (should fail)
```sh
curl -X POST https://your-app.onrender.com/cache \
     -H "Content-Type: application/json" \
     -d '{"key": "key11", "value": "value11"}'
```
**Expected:** `{ "error": "Cache is full" }`

### 🔹 Get a value
```sh
curl -X GET https://your-app.onrender.com/cache/key1
```
**Expected:** `{ "key": "key1", "value": "value1" }`

### 🔹 Delete a key
```sh
curl -X DELETE https://your-app.onrender.com/cache/key1
```
**Expected:** `{ "message": "Deleted successfully", "key": "key1" }`

### 🔹 Try getting deleted key
```sh
curl -X GET https://your-app.onrender.com/cache/key1
```
**Expected:** `{ "error": "Key not found in cache" }`

## 💡 Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Fast API framework

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

### 📞 Contact
For questions or contributions, feel free to **open an issue** or **reach out**!

🔗 **GitHub:** [Mohammed Arfat](https://github.com/mdarfatwork)

