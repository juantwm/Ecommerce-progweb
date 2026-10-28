const baseDeDatosUsuarios = [
    {id: 1, nombre: 'Juan Perez', email: 'juan@example.com'}
];


export const obtenerUsuarios = (): typeof baseDeDatosUsuarios => {
    return baseDeDatosUsuarios;
}