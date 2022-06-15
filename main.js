

// const gestoresJSON = JSON.stringify(gestores);
// console.log(gestoresJSON);
// console.log(gestoresJSON.length);

// const clientes = generarClientes();
// const cliente1 = clientes[0];
// const cliente1JSON = JSON.stringify(cliente1);
// console.log(cliente1JSON);


// las propiedades del objeto opciones son: url, metodo, body, cabeceras
const opciones = {
    url: 'http://localhost:8085/ok',
    metodo: 'get'
}

ajax(opciones, (data) => {
    console.log(data);
})

const login = {
    url: 'http://localhost:8085//login/gestor/',
    metodo: 'post',
    body: 'usuario=gestor1&password=gestor1',
    cabeceras: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

ajax(login, (data) => {
    console.log(data);
})

const respuesta = JSON.parse(data)

//guardamos el token

const token = respuesta.data.token;

//realizamos la solicitud para obtener los gestores
ajax({
    url:'http://localhost:8085/gestores/',
    metodo: 'post',
    cabeceras: {
        Authorization: `Basic ${token}`
    }
})

//por terminar