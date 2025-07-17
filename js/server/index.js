const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

app.use(cors());

app.get('/api/user/:id', (req, res) => {
  res.status(200).json({
    id: Number(req.params.id),
    name: 'Alice',
    email: 'alice@example.com'
  });
});

app.get('/api/users', async (req, res) => {
  try {
    const resp = await fetch(BASE_URL);
    if (!resp.ok) throw new Error('Failed to fetch users');
    const users = await resp.json();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
