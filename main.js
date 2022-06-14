function generarGestores() {
    
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
const gestores = [gestor, gestor2]
return(gestores);
}
function generarClientes() {
    
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
const clientes = [cliente1, cliente2, cliente3, cliente4]
return(clientes)
}

// const mensaje1 = {
//     id: 1,
//     idGestor: 1,
//     idCliente: 1,
//     Text: `Hola cliente 1`
//     Date:   
// }

// console.log(gestores);
// console.log(clientes);

function mostrarGestor(gestor) {
    console.log(`id: ${datosGestores.id}`);
    console.log(`usuario ${datosGestores.usuario}`);
    console.log(`clave ${datosGestores.clave}`);
    console.log(`correo ${datosGestores.correo}`);
    console.log(`--------`);
}

function mostrarGestores(gestores) {
    
for (const datosGestores of gestores) {
    mostrarGestor(gestor);
}
}

function mostrarClientes(cliente) {
    console.log(`id: ${datosClientes.id}`);
    console.log(`usuario ${datosClientes.usuario}`);
    console.log(`clave ${datosClientes.clave}`);
    console.log(`correo ${datosClientes.correo}`);
    console.log(`saldo ${datosClientes.saldo}`);
    console.log(`--------`);
    }


function mostrarClientes(clientes) {
    for (const cliente of clientes) {
        mostrarClientes(cliente);
    }
 }   
for (const datosClientes of clientes) {
    console.log(`id: ${datosClientes.id}`);
    console.log(`usuario ${datosClientes.usuario}`);
    console.log(`clave ${datosClientes.clave}`);
    console.log(`correo ${datosClientes.correo}`);
    console.log(`saldo ${datosClientes.saldo}`);
    console.log(`--------`);
}

const gestoresJSON = JSON.stringify(gestores);
console.log(gestoresJSON);
console.log(gestoresJSON.length);

const clientes = generarClientes();
const cliente1 = clientes[0];
const cliente1JSON = JSON.stringify(cliente1);
console.log(cliente1JSON);

