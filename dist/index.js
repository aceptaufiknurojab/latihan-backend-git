"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Endpoint untuk register user
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Logika untuk register user
    res.send('User registered');
});
// Endpoint untuk login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Logika untuk login user
    res.send('User logged in');
});
// Endpoint untuk membuat order
app.post('/orders', (req, res) => {
    const { productId, quantity } = req.body;
    // Logika untuk membuat order
    res.send('Order created');
});
// Endpoint untuk mendapatkan semua order
app.get('/orders', (req, res) => {
    // Logika untuk mendapatkan semua order
    res.send('List of orders');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
