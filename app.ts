import express from 'express';
import path from 'path';
import productRoutes from './src/routes/productRoutes.js';
import cartRoutes from './src/routes/cartRouter.js';
import authRoutes from './src/routes/authRoutes.js';

import { baseDeDatosCategorias, baseDeDatosProductos } from './src/models/productModel';


const app = express();

const port = 3000;
app.use(express.static('public'));
app.use('/img', express.static('img'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')))


app.use("/product", productRoutes);

app.use("/cart", cartRoutes);

app.use("/", authRoutes)


app.get("/", (req, res) =>
{
    res.render("pages/index", 
        {mostrarBuscador: true, categorias: baseDeDatosCategorias, products: baseDeDatosProductos});

});



app.use((req, res) =>
{
    res.status(404).render("pages/404", {mensaje: "Página no encontrada"});
});   

app.listen(port, ()=>
{
    console.log("Server is ready!");

});