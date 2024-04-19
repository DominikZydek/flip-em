const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// authenticate and return: id, iat, exp
function authenticateToken(req, res, next) {
    const header = req.headers.authorization;
    const token = header && header.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized request' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

// get user data
async function getUserData(userId) {
    try {
        const userInfo = await pool.query('select user_id, username, created_at from users where user_id = $1',
        [userId]);

        const userSets = await pool.query('select * from sets where user_id = $1', 
        [userId]);

        const userFavoriteSets = await pool.query('select * from favorite_sets where user_id = $1',
        [userId]);

        const result = {
            userInfo: userInfo.rows[0],
            userSets: userSets.rows,
            userFavoriteSets: userFavoriteSets.rows
        };

        return result;
    } catch (err) {
        throw new Error('Error while fetching data');
    }
}

// add a new user
app.post('/api/v1/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query('insert into users (username, email, password) values ($1, $2, $3) returning *',
        [username, email, hashedPassword]);
        const user = result.rows[0];
        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token: token });
    } catch (err) {
        if (err.code === '23505') {
            res.json({ error: 23505 });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

// log in
app.post('/api/v1/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query('select * from users where username = $1 or email = $1',
        [username]);
        if (result.rows.length === 0) {
            res.json({ error: "User doesn't exist" });
        } else {
            const user = result.rows[0];
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (isPasswordCorrect) {
                const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.json({ token: token });
            } else {
                res.json({ error: 'Password is incorrect' });
            }
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// search for a user
app.post('/api/v1/search', authenticateToken, async (req, res) => {
    const { query } = req.body;

    try {
        const result = await pool.query('select * from users where username = $1 or email = $1',
        [query]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            const userId = result.rows[0].user_id;
            const userData = await getUserData(userId);
            res.json(userData);
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// get userInfo, userSers and userFavoriteSets
app.get('/api/v1/users/:userId', authenticateToken, async (req, res) => {
    const { userId } = req.params;

    try {
        const userData = await getUserData(userId);
        res.json(userData);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }

});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});