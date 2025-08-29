// Auth route
import { Router } from "express";
import basicAuthRoute from "./basicAuth/basicAuth.routes";

const router = Router();
const path = "/auth";

router.use(path, basicAuthRoute);

export default router;
