const net = require('net');

const direccion = '127.0.0.1';
const puerto = 7000;


process.stdout.write('Ingrese usuario y contraseña \n');
process.stdin.on('data', (data) => {
    const respuesta = data.toString().trim();
    iniciarCliente(respuesta);
});

function iniciarCliente(datoEnviar) {
    const client = new net.Socket();

    client.connect(puerto, direccion, function() {
        const address = client.address();
        const port = address.port;
        const ipaddr = address.address;

        client.write(datoEnviar);

    });

    client.on('data', data => {
        cad = data.toString();
        var div = cad.split(" ");
        if(div[5] != 'o' && div[5] != 'incorrecta'){
            console.log('' + data);
            client.destroy();
        }
        else{
            console.log('' + data);
            console.log('Ingrese usuario y contraseña');
        }
    });

    client.on('close', () => {
        process.exit();
    });
}