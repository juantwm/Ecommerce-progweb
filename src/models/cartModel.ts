const miCarrito = [
        {id: 1, nombre: 'Whiskey Jack Daniels Honey 750ml', precio: '19.900', cantidad: 1, imagen: '/img/img1-jack.jpg'},
        {id: 2, nombre: 'Coca Cola Lata 220mL', precio: '760', cantidad: 2, imagen: '/img/img2-jack.jpg'}
];


export const obtenerCarrito = (): typeof miCarrito => {
    return miCarrito;
}