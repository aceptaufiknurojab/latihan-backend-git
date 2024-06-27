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