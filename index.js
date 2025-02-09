import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;
const MAX_CACHE_SIZE = 10;

app.use(express.json());

// ⚡ Efficient LRU Cache using Map & Doubly Linked List
class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Move to most recently used
    return value;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Remove to update position
    } else if (this.cache.size >= this.limit) {
      // Remove least recently used (first inserted)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }

  delete(key) {
    return this.cache.delete(key);
  }

  has(key) {
    return this.cache.has(key);
  }
}

const cache = new LRUCache(MAX_CACHE_SIZE);

// 🎯 POST /cache → Stores key-value pair
app.post("/cache", (req, res) => {
  const { key, value } = req.body;

  if (!key || value === undefined) {
    return res.status(400).json({ error: "Key and value are required" });
  }

  if (!cache.has(key) && cache.cache.size >= MAX_CACHE_SIZE) {
    return res.status(400).json({ error: "Cache is full" });
  }

  cache.set(key, value);
  res.json({ message: "Stored successfully", key, value });
});

// 🎯 GET /cache/:key → Retrieves value
app.get("/cache/:key", (req, res) => {
  const { key } = req.params;
  const value = cache.get(key);

  if (value === null) {
    return res.status(404).json({ error: "Key not found in cache" });
  }

  res.json({ key, value });
});

// 🎯 DELETE /cache/:key → Remove from cache
app.delete("/cache/:key", (req, res) => {
  const { key } = req.params;

  if (!cache.has(key)) {
    return res.status(404).json({ error: "Key not found in cache" });
  }

  cache.delete(key);
  res.json({ message: "Deleted successfully", key });
});

// 🚀 Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

server.keepAliveTimeout = 120000; // 2 minutes
server.headersTimeout = 120000;
