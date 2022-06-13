const gestor = {
    id: 1,
    usuario: `gestor1`,
    clave: `gestor1`,
    correo: `gestor1@gmail.com`
};

const gestor2 = {
    id: 2,
    usuario: `gestor2`,
    clave: `gestor2`,
    correo: `gestor2@gmail.com`
};

const cliente1 = {
    id: 1,
    idGestor: 1,
    usuario: `cliente1`,
    clave: `cliente1`,
    correo: `cliente1@gmail.com`,
    saldo: 150
};

const cliente2 = {
    id: 2,
    idGestor: 2,
    usuario: `cliente2`,
    clave: `cliente2`,
    correo: `cliente2@gmail.com`,
    saldo: 350
};

const cliente3 = {
    id: 3,
    idGestor: 1,
    usuario: `cliente3`,
    clave: `cliente3`,
    correo: `cliente3@gmail.com`,
    saldo: 1500
};

const cliente4 = {
    id: 4,
    idGestor: 2,
    usuario: `cliente4`,
    clave: `cliente4`,
    correo: `cliente4@gmail.com`,
    saldo: 780
};

// const mensaje1 = {
//     id: 1,
//     idGestor: 1,
//     idCliente: 1,
//     Text: `Hola cliente 1`
//     Date:   
// }


/*
Escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades..
*/

const gestores = [gestor, gestor2]
const clientes = [cliente1, cliente2, cliente3, cliente4]

console.log(gestores);
console.log(clientes);

for (const datosGestores of gestores) {
    console.log(`id: ${datosGestores.id}`);
    console.log(`usuario ${datosGestores.usuario}`);
    console.log(`clave ${datosGestores.clave}`);
    console.log(`correo ${datosGestores.correo}`);
    console.log(`--------`);
}

for (const datosClientes of clientes) {
    console.log(`id: ${datosClientes.id}`);
    console.log(`usuario ${datosClientes.usuario}`);
    console.log(`clave ${datosClientes.clave}`);
    console.log(`correo ${datosClientes.correo}`);
    console.log(`saldo ${datosClientes.saldo}`);
    console.log(`--------`);
}