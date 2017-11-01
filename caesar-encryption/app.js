alert("Probando Cifrado Cesar");

var dataUser = prompt("Ingrese un texto").toUpperCase(); //aquí ingresa el texto el usuario y se convierte a mayusculas
var cipher = function(string){ //esta función va a cifrar el texto y recibe como parámetro un string

    if (typeof dataUser === numbers || dataUsers === ""){ //condición para que el usuario sólo ingrese texto
      return prompt("Ingrese un texto");
  }
      var arrayAscii = Array.from(dataUser); // convertí un string a un array
      var numbers = []; //el arreglo donde se guardará el número con los espacios recorridos a la derecha
      var asciiNum = []; //creamos una variable donde se almacenará la nueva cadena con los numeros ascii
      for (var i= 0; i<arrayAscii.length; i++){ //recorremos el nuevo arreglo con un ciclo for
        asciiNum = arrayAscii[i].charCodeAt() se convierte en número ascii las letras del arreglo
        numbers.push(asciiNum+7); // y se agrega al nuevo arreglo
    }

}
