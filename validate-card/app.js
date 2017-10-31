alert("Probando Validación de tarjeta");

var numbersOfCard = prompt("Ingrese su número de tarjeta"); //Ingreso de numeros por parte del usuario

var isValidCard = function(num){
  var numTarjet = []; //donde se van a guardar los numeros en posición par
  var size = num.length;
  var lastPosition = size-1

  for (var i>lastPosition; i>=0; i--);{ //se recorre el arreglo en sentido contrario de acuerdo al algoritmo de Luhn
    if (num[i]%2 !==0){
      num.splice(i, 1);
    }
  } return num;
}
