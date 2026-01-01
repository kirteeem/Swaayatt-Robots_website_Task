import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 👇 Use Render port OR fallback to 1000
const PORT = process.env.PORT || 1000;

// Serve built React files
app.use(express.static(path.join(__dirname, "dist")));

// React Router support
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
