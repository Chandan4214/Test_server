import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './src/db/db.js';

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});