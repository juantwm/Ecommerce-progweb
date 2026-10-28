import { Request, Response } from "express";


export const mostrarLogin = (req: Request, res: Response) =>
{
    
    res.render("pages/login", {error: null});
}


export const mostrarRegister = (req: Request, res: Response) =>
{
    
    res.render("pages/register", {errores: null})
}
