import express from "express";

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.post("/api/echo", (req, res) => {
  res.json(req.body);
});

export default app;
