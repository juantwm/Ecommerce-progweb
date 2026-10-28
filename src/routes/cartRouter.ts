import { Router } from "express";
import { mostrarCarrito } from "../controllers/cartController";

const router = Router();

router.get("/", mostrarCarrito);
router.get("/cart", mostrarCarrito);


export default router;