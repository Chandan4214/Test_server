import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './src/db/db.js';

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Server gandu is running successfully 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});