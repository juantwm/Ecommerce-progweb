import { Request, Response } from "express";
import {obtenerTodosLosProductos, obtenerProductoPorId, baseDeDatosCategorias} from "../models/productModel";


export const mostrarCatalogo = (req:Request, res:Response) =>
{
    const ListaDeProductos = obtenerTodosLosProductos();

    res.render("pages/index", {productos: ListaDeProductos, mostrarBuscador:true, categorias:baseDeDatosCategorias});

};

export const mostrarDetalleProducto = (req:Request, res:Response) =>
{
    const idBuscado = req.params.id as string;
    const productoId = parseInt(idBuscado);
    const listaCompleta = obtenerTodosLosProductos();

    const productoEncontrado = obtenerProductoPorId(productoId);

    if(!productoEncontrado)
    {
        return res.render("pages/product", {
            error:true, 
            mostrarBuscador: true,
            productos: listaCompleta.slice(0,4),
            categorias:baseDeDatosCategorias
        });

    }

    let productosRelacionados = listaCompleta.filter(p => p.id !== productoEncontrado.id && p.categoria === productoEncontrado?.categoria);

    res.render("pages/product",{
        producto: productoEncontrado, 
        categorias: baseDeDatosCategorias, 
        mostrarBuscador: true, 
        productosRelacionados: productosRelacionados.slice(0,4)});
};