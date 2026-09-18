import express from 'express';
import path from 'path';
import productRoutes from './src/routes/productRoutes.js';

import { baseDeDatosCategorias, baseDeDatosProductos } from './src/models/productModel';


const app = express();

const port = 3000;
app.use(express.static('public'));
app.use('/img', express.static('img'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')))


app.use("/product", productRoutes);


app.get("/", (req, res) =>
{
    res.render("pages/index", 
        {mostrarBuscador: true, categorias: baseDeDatosCategorias, products: baseDeDatosProductos});

});


app.get("/cart", (req, res) =>
{
    const miCarrito = [
        {id: 1, nombre: 'Whiskey Jack Daniels Honey 750ml', precio: '19.900', cantidad: 1, imagen: '/img/img1-jack.jpg'},
        {id: 2, nombre: 'Coca Cola Lata 220mL', precio: '760', cantidad: 2, imagen: '/img/img2-jack.jpg'}
    ];
    res.render("pages/cart",{carrito: miCarrito, mostrarBuscador: true});
});

app.get("/login", (req,res) =>
{
    res.render("pages/login");
});
app.get("/register", (req,res) =>
{
    res.render("pages/register");
});
app.get("/checkout", (req,res) =>
{
    res.render("pages/checkout");
});

app.listen(port, ()=>
{
    console.log("Server is ready!");

});