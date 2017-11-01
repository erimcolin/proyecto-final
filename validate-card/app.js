var numbersOfCard = parseInt(prompt("Ingrese su número de tarjeta")); //Ingreso de numeros por parte del usuario y convertidos en Mayuscula

var isValidCard = function(num){ //función para validar numeros de tarjeta, recibe como parámetro los numeros del usuario
    if (typeof numbersOfCard !== Number){//condición para que no ingrese un campo vacío
    return prompt("Ingrese su número de tarjeta");
  } else {
      var arrayOfNumbers = Array.from(numbersOfCard);//convierto a arreglo el string de numeros
      var number = 0; //la variable donde se va a guardar el resultado de multiplicar por dos los numeros impares
      var numTarjet = []; //arreglo final, donde se van a guardar todos los números y las posiciones impares ya se habrán multiplicado y sumado en caso de que sean dos cifras
      var arrayReverse = arrayOfNumbers.reverse(); //aquí se guardó el arreglo a la inversa
      for (var i= 0; i<arrayReverse.length; i++);{ //se recorre el arreglo en sentido contrario de acuerdo al algoritmo de Luhn
        console.log("for")
        if (i%2 !==0){ //se toman las posiciones impares del arreglo
          number = arrayReverse[i] * 2; // y se agregan al nuevo arreglo y ahí mismo se multiplican por 2
            if (number >=10){ //se compara si el elemento es mayor o igual a 10 se suman ambos dígitos
              console.log(number);
              numTarjet.push(number-9); //se le resta nueve al número mayor a dos cifras porque el algoritmo de Luhn explica que para sumar dos cifras es igual que sí se resta 9 al número entero. P.e. 11 = 1+1 = 2; 11-9 =2; y así llegamos al mismo resultado
            }else {
              numTarjet.push(arrayReverse[i]); //sino, se regresarán los números de una cifra
            }
        }else {
              numTarjet.push(arrayReverse[i]); //se agregarán al arreglo las pocisiones pares para juntarlas a las pocisiones impares a las que ya se les multiplicó por dos y se sumaron las cifras de dos números
            }
      }
      var result = [];
      for (var i=0; i<numTarjet.length;i++){
        result= result + numTarjet[i];

      }
      if (result %10 ===0){
        return "Tarjeta Valida";
      } else {
        return "Tarjeta Inválida";
      }
    }
    console.log(number);
    return numTarjet;
}

isValidCard(numbersOfCard);
