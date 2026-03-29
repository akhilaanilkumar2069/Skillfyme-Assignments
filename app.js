const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

let accounts = [];

app.post('/account', (req, res) => {
    const { name, balance } = req.body;
    const account = { id: accounts.length + 1, name, balance };
    accounts.push(account);
    res.json(account);
});

app.get('/account', (req, res) => {
    res.json(accounts);
});

// Call Transaction Service
app.post('/transfer', async (req, res) => {
    try {
        const response = await axios.post('http://transaction-service:8080/transaction', req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).send("Transaction failed");
    }
});

app.listen(3000, () => console.log("Account Service running on 3000"));
