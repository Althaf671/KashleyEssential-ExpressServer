// Basic auth route
import { Router } from "express";
import { controller } from "./container";

const router = Router();
const api = "/auth";

// Register
router.post(
    api + "/register",
    controller.RegisterController.bind(controller),
);


export { router as authRouter };
export default router;