import express from "express";
import { TokenController } from "../controllers/token.controller";
import { checkToken } from "../middlewares/checktoken";
export const router = express.Router();

router.post('/',checkToken,TokenController.token)