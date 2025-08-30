// Employee auth routes

import { Router } from "express";
import { controller } from "./container";
;

const router = Router();

router.post(
    "/employee/login",
    controller.LoginController.bind(controller)
);