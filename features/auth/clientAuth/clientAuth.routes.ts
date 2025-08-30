// Basic auth route
import { Router } from "express";
import { controller } from "./container";
import { setTokenCookie } from "../../../infra/config/cookies";

const router = Router();

// Register
router.post(
    "/login",
    controller.LoginController.bind(controller),
);

export default router;