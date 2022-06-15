function mostrarGestor(gestor) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario ${gestor.usuario}`);
    console.log(`clave ${gestor.clave}`);
    console.log(`correo ${gestor.correo}`);
    console.log(`--------`);
}

function mostrarGestores(gestores) {

    for (const gestor of gestores) {
        mostrarGestor(gestor);
    }
}

function mostrarClientes(cliente) {
    console.log(`id: ${cliente.id}`);
    console.log(`usuario ${cliente.usuario}`);
    console.log(`clave ${cliente.clave}`);
    console.log(`correo ${cliente.correo}`);
    console.log(`saldo ${cliente.saldo}`);
    console.log(`--------`);
}

function mostrarClientes(clientes) {
    for (const cliente of clientes) {
        mostrarClientes(cliente);
    }
}