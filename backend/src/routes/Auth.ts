import express from "express";
import { Auth } from "../controllers/Auth";

 const router = express.Router();

export const registerRoute = router.post("/register", Auth.register);
