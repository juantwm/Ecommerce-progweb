import express from 'express';



const app = express();

const port = 3000;
app.use(express.static('public'));
app.use('/img', express.static('img'));

const categorias =[
    {id:1, nombre:'Electronica', icono: 'bi-laptop'},
    {id:2, nombre:'Alimentos', icono:'bi-basket'},
    {id:3, nombre:'Bebidas', icono:'bi-cup-straw'},
    {id:4, nombre:'Indumentaria', icono:'bi-bag'},
    {id:5, nombre:'Juegos', icono:'bi-controller'},
    {id:6, nombre:'Automotor', icono:'bi-car-front'},
    {id:7, nombre:'Hogar', icono:'bi-house'},
    {id:8, nombre:'Otros', icono:'bi-box'}
];

const listadoProductos = [
        { 
            id: 1, 
            nombre: 'Whiskey Jack Daniels Honey 750ml', 
            precio: '19.900', 
            categoria: 'Bebidas', 
            descripcion: 'Un verdaderamente fabuloso licor de whisky...',
            imagenes: [
                '/img/img1-jack.jpg',
                '/img/img2-jack.jpg',
                '/img/img3-jack.jpg'
            ] 
        },
        { nombre: 'Coca Cola Lata 220mL Pack x8', precio: '7.600', categorias:'Bebidas', id:2 },
        { nombre: 'Monitor 24 Pulgadas', precio: '185.000', categorias:'Electronica', id:3 },
        { nombre: 'Silla Gamer', precio: '210.000', categorias:'Hogar', id:4 }
];


app.set("view engine", "ejs");


app.get("/", (req, res) =>
{
    res.render("pages/index", 
        {mostrarBuscador: true, categorias: categorias, products: listadoProductos, productosRelacionados: listadoProductos});

});

app.get("/product/:id", (req, res)=>
{
    const idBuscado = parseInt(req.params.id);
    const productoEncontrado = listadoProductos.find(p => p.id === idBuscado);

    if(!productoEncontrado)
    {
        return res.render("pages/product", {
            error:true, 
            productosRelacionados: listadoProductos.slice(0, 4),
            categorias: categorias, 
            producto: null,
            mostrarBuscador:true
        })
    }
    let relacionados = listadoProductos.filter(p => p.categoria === productoEncontrado.categoria && p.id !== productoEncontrado.id);

    if (relacionados.length === 0) {
        relacionados = listadoProductos.filter(p => p.id !== productoEncontrado.id);
    }
    res.render("pages/product",{
        error:false, 
        producto:productoEncontrado, 
        productosRelacionados: relacionados.slice(0,4), 
        categorias: categorias, 
        mostrarBuscador:true
    });


});

app.get("/cart", (req, res) =>
{
    res.render("pages/cart",{mostrarBuscador:true, products:listadoProductos});

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