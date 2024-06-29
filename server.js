const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const port = 3000; // Adjusted port to 3000

app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'internnet' // Replace with your actual database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err;
  }
  console.log('MySQL connected...');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { role, email, fullName, username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const sql = 'INSERT INTO signup (role, email, fullName, username, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [role, email, fullName, username, hashedPassword], (err, result) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    console.log('User registered:', result);
    res.status(201).json({ message: 'User registered' });
  });
});

// Login endpoint
app.post('/app', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM signup WHERE username = ?';
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ message: 'Server error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
