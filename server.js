const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 👉 "public" folder එකේ තියෙන frontend files serve කරන්න
app.use(express.static(path.join(__dirname, 'public')));

// 👉 Default page එක load කරන්න
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});