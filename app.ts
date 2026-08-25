import express from 'express';


const app = express();

const port = 3000;

app.set("view engine", "ejs");


app.get("/", (req, res) =>
{
    res.render("pages/index");

});

app.get("/products", (req, res)=>
{
    res.render("pages/product");
});

app.get("/cart", (req, res) =>
{
    res.render("pages/cart");

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