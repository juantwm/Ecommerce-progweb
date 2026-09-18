export interface Producto{
    id: number;
    nombre: string;
    precio: number;
    imagen: string [];
    categoria: string;
    descripcion: string;
}

export interface Categorias
{
    id:number;
    nombre: string;
    icono: string;
}

export const baseDeDatosCategorias: Categorias[] = 
[
    {id:1, nombre:'Electronica', icono: 'bi-laptop'},
    {id:2, nombre:'Alimentos', icono:'bi-basket'},
    {id:3, nombre:'Bebidas', icono:'bi-cup-straw'},
    {id:4, nombre:'Indumentaria', icono:'bi-bag'},
    {id:5, nombre:'Juegos', icono:'bi-controller'},
    {id:6, nombre:'Automotor', icono:'bi-car-front'},
    {id:7, nombre:'Hogar', icono:'bi-house'},
    {id:8, nombre:'Otros', icono:'bi-box'}
];
    


export const baseDeDatosProductos: Producto[] = [
        { 
            id: 1, 
            nombre: 'Whiskey Jack Daniels Honey 750ml', 
            precio: 19.900, 
            categoria: 'Bebidas', 
            descripcion: 'Un verdaderamente fabuloso licor de whisky...',
            imagen: [
                '/img/img1-jack.jpg',
                '/img/img2-jack.jpg',
                '/img/img3-jack.jpg'
            ] 
        },
        { nombre: 'Coca Cola Lata 220mL Pack x8', precio: 7.600, categoria:'Bebidas', id:2, imagen:[], descripcion:'' },
        { nombre: 'Monitor 24 Pulgadas', precio: 185.000, categoria:'Electronica', id:3, imagen: [], descripcion:'' },
        { nombre: 'Silla Gamer', precio: 210.000, categoria:'Hogar', id:4, imagen:[], descripcion:'' }
];



export const obtenerTodosLosProductos = (): Producto[] =>
{
    return baseDeDatosProductos;
}

export const obtenerProductoPorId = (id:number): Producto | undefined =>
{
    return baseDeDatosProductos.find(prod => prod.id === id);
}