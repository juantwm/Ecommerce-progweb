import { Request, Response } from "express";
import { obtenerCarrito } from "../models/cartModel";


export const mostrarCarrito = (req: Request, res: Response) => {
    const miCarrito = obtenerCarrito();
    res.render("pages/cart", {carrito: miCarrito, mostrarBuscador: true});
}