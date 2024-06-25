import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk register user
app.post('/register', (req: Request, res: Response) => {
    const { username, password } = req.body;
    // Logika untuk register user
    res.send('User registered');
});

// Endpoint untuk login user
app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    // Logika untuk login user
    res.send('User logged in');
});
// Endpoint untuk membuat order
app.post('/orders', (req: Request, res: Response) => {
    const { productId, quantity } = req.body;
    // Logika untuk membuat order
    res.send('Order created');
});

// Endpoint untuk mendapatkan semua order
app.get('/orders', (req: Request, res: Response) => {
    // Logika untuk mendapatkan semua order
    res.send('List of orders');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});