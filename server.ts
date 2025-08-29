// Server
import express from 'express';

// routes
import { authRouter } from './features/auth/basicAuth';

const app = express();
const PORT = 3001;

// public route
app.use("/api", authRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});