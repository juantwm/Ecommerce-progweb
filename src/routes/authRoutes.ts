import { Router } from "express";
import { mostrarLogin, mostrarRegister } from "../controllers/authController";

const router = Router();

router.get("/login", mostrarLogin);

router.get("/register", mostrarRegister);


export default router;