// Basic auth route
import { Router } from "express";
import { controller } from "./container";
import { setTokenCookie } from "../../../infra/config/cookies";

const router = Router();

// Register
router.post(
    "/register",
    controller.RegisterController.bind(controller),
);

export default router;