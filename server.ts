// Server
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// routes
import authRoutes from "./features/auth/index";
import { Logger } from './shared/helper/logger';
import helmet from 'helmet';
import { corsOptions } from './infra/config/cors';

dotenv.config();

const app = express();
const PORT = 3001;


app.use(helmet());
app.use(cors(corsOptions));
app.set("trust proxy", true);

// Rate limiting 


// Middlewares
app.use(express.json());
app.use(cookieParser());

// public route
app.use("/api", authRoutes);

app.listen(PORT, () => {
    Logger.info(`Server running at PORT: ${PORT}`);
});


