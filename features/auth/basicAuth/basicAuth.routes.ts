// Basic auth route
import { Router } from "express";
import { controller } from "./container";

const router = Router();

// Register
router.post(
    "/register",
    controller.RegisterController.bind(controller),
);


export { router as authRouter };
export default router;