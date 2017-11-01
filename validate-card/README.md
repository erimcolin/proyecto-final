# Validación de Tarjetas

## Descripción:
Crea una web que pida, por medio de un *prompt()*, el número de la tarjeta de crédito y confirme su validez según el __*algoritmo de Luhn*__

## Pseudocódigo

```
1. Crear una función "isValidCard" que recibirá como parámetro numeros
2. Devolver "Ingrese un número" si el usuario ingresa un campo vacío
3. Convertir numeros a un array
4. Recorrer el array a la inversa con un ciclo for
  4.1 Extraer del array los números en posición pares
    4.1.1 Multiplicamos cada índice por 2
    4.1.2 Si un indice >= 10 sumar ambos dígitos
5. Sumar las posiciones impares con las posiciones pares
6. Dividir el total entre 10,
7. Si el resultado = 0 la tarjeta es Valida, si es diferente de 0 la tarjeta no es valida
```

## Diagrama de Flujo

A continuación se incluye el diagrama de flujo
![Diagrama de Flujo para validar tarjeta](https://www.lucidchart.com/publicSegments/view/17463a15-194f-42b0-97d5-1c4ccf31c7cf/image.png)
