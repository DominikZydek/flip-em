const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// add a new user
app.post('/api/v1/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query('insert into users (username, email, password) values ($1, $2, $3) returning *',
        [username, email, hashedPassword]);
        const user = result.rows[0];
        const token = jwt.sign({ id: user.user_id }, 'secret', { expiresIn: '1h' });
        res.json({ token: token, username: user.username });
    } catch (err) {
        if (err.code === '23505') {
            res.json({ error: 23505 });
        } else {
            res.status(500);
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});