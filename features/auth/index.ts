// Auth route
import { Router } from "express";
import clientAuthRoute from "./clientAuth/clientAuth.routes";

const router = Router();
const path = "/auth";

router.use(path, clientAuthRoute);

export default router;
