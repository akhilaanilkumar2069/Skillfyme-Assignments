const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// In-memory account storage
let accounts = [];

// Root health-check route
app.get('/', (req, res) => {
    res.send("Account Service is running");
});

// Create a new account
app.post('/account', (req, res) => {
    const { name, balance } = req.body;
    if (!name || balance === undefined) {
        return res.status(400).json({ error: "Name and balance are required" });
    }
    const account = { id: accounts.length + 1, name, balance };
    accounts.push(account);
    res.json(account);
});

// Get all accounts
app.get('/account', (req, res) => {
    res.json(accounts);
});

// Transfer funds via Transaction Service
app.post('/transfer', async (req, res) => {
    try {
        const response = await axios.post(
            'http://transaction-service:8080/transaction',
            req.body
        );
        res.json(response.data);
    } catch (err) {
        console.error("Transaction error:", err.message);
        res.status(500).send("Transaction failed");
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Account Service running on port ${PORT}`));
