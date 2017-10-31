# Validación de Tarjetas

## Descripción:
Crea una web que pida, por medio de un *prompt()*, el número de la tarjeta de crédito y confirme su validez según el __*algoritmo de Luhn*__

## Pseudocódigo

```
1. Crear una función "isValidCard" que recibirá como parámetro un array
2. Devolver "Ingrese un número" si el usuario ingresa un campo vacío
3. Declarar una variable numTarjet vacío dentro de la función
4. Recorrer el array a la inversa con un ciclo for
  4.1 Extraer del array los números en posición pares y agregarlos a la variable numTarjet
    4.1.1 En el nuevo arreglo numTarjet multiplicamos cada índice por 2
    4.1.2 Si un indice dentro de numTarjet >= 10 sumar ambos dígitos
    4.1.3 Regresar numTarjet,
5. Sumar las posiciones impares con los numeros contenidos en numTarjet
6. Dividir el total entre 10,
7. Si el resultado = 0 la tarjeta es Valida, si es diferente de 0 la tarjeta no es valida
```

## Diagrama de Flujo

A continuación se incluye el diagrama de flujo
![Diagrama de Flujo para validar tarjeta] (diagrama-flujo.jpeg)
