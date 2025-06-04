import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fetch from 'node-fetch';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import sqlite3 from 'sqlite3';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/assist';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  credits: { type: Number, default: 0 },
});
const User = mongoose.model('User', userSchema);

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Missing token' });
  const token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

async function deductCredit(req, res, next) {
  const user = await User.findById(req.user.id);
  if (!user || user.credits <= 0) {
    return res.status(402).json({ message: 'Insufficient credits' });
  }
  user.credits -= 1;
  await user.save();
  next();
}

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'User exists' });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash, credits: 0 });
  res.json({ id: user._id });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
});

app.post('/api/extract', authMiddleware, async (req, res) => {
  const { type, source } = req.body;
  try {
    let text = '';
    if (type === 'url') {
      const response = await fetch(source);
      text = await response.text();
    } else if (type === 'pdf') {
      const data = fs.readFileSync(source);
      const parsed = await pdfParse(data);
      text = parsed.text;
    } else if (type === 'doc' || type === 'docx') {
      const result = await mammoth.extractRawText({ path: source });
      text = result.value;
    } else if (type === 'database') {
      const db = new sqlite3.Database(source);
      db.all('SELECT content FROM knowledge', (err, rows) => {
        if (err) return res.status(500).json({ message: 'DB error' });
        const allText = rows.map(r => r.content).join('\n');
        return res.json({ text: allText });
      });
      return; // early return because response sent in callback
    }
    res.json({ text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Extraction error' });
  }
});

// Example protected route
app.post('/api/chat', authMiddleware, deductCredit, async (req, res) => {
  // Placeholder for AI call
  const userMessage = req.body.message;
  // TODO: integrate Gemini API here
  const botReply = `Echo: ${userMessage}`;
  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
