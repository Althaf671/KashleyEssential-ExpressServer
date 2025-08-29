// Server
import express from 'express';

// routes
import authRoutes from "./features/auth/index";

const app = express();
const PORT = 3001;

// public route
app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});