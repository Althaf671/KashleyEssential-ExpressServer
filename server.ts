// Server
import express from 'express';

// routes
import authRoutes from "./features/auth/index";
import { Logger } from './shared/helper/logger';

const app = express();
const PORT = 3001;

// public route
app.use("/api", authRoutes);

app.listen(PORT, () => {
    Logger.info(`Server running at PORT: ${PORT}`);
});