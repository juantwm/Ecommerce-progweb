import { Router } from "express";
import { mostrarCatalogo, mostrarDetalleProducto } from "../controllers/productController";


const router = Router();

router.get("/", mostrarCatalogo);

router.get("/:id", mostrarDetalleProducto);

export default router;