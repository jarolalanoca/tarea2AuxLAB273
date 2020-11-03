
var net = require('net');

port = process.argv[2];
var server = net.createServer(function(connection) {

	connection.on('data', function(data){
        var primero = ['Elio Jarol','Alanoca Calcinas','ejalanoca','123456'];
        var second = ['Jorge Andres','Alanoca Quino','jalanocaquino','1q2w3e4'];
        var tres = ['Ana','Condori Quispe','acondoriquispe','54321'];
        cad = data.toString();
        var div = cad.split("/");

        if((primero[2]==div[0] && primero[3]==div[1]) || (second[2]==div[0] && second[3]==div[1]) || 
            (tres[2]==div[0] && tres[3]==div[1])){
        	if(primero[2]==div[0]){
        		console.log('cliente connectado : ' + data);
        		connection.write('Bienvenido '+primero[0]+' '+primero[1]);
        	}
        	else{
        		if(second[2]==div[0]){
        			console.log('cliente connectado : ' + data);
        			connection.write('Bienvenido '+second[0]+' '+second[1]);
        		}
        		else{
        			console.log('cliente connectado : ' + data);
        			connection.write('Bienvenido '+tres[0]+' '+tres[1]);
        		}
        	}
        }
        else{
        	if((primero[2]!=div[0]) && (second[2]!=div[0]) && (tres[2]!=div[0])){
        		connection.write('El usuario '+div[0]+' es incorrecto o no existe');
        	}
        	else{
        		connection.write('La contraseña para '+div[0]+' es incorrecta');
        	}
        }
    });
});

server.listen(port, function() {
	console.log('servidor esta escuchando '+port);
});