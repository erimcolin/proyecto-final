# Cifrado Cesar

## Descripción:
Crea una web que pida, por medio de un *prompt()* una frase al usuario y devuelva el mismo mensaje encriptado según el __*algoritmo de Cifrado de César*__ con el parámetro de desplazamiento de 33 espacios hacia la derecha.

## Pseudocódigo:

```
1. Crear función *cipher* que recibirá como parámetro un string
2. Devolver "Ingrese un texto" si el usuario ingresa un campo vacío o con números
3. Declaramos un newArray vacío dentro de la función
4. Accedemos a cada elemento del newArray con un ciclo for
  4.1 Aplicamos la formula de Cifrado de Cesar para desplazar 33 espacios hacia la derecha el caracter por cada elemento del índice
  4.2 Cambiamos los caracteres a través del código ASCII
  4.3 Agregamos los elementos a newArray
5. Retornamos newArray
6. Mostrar newArray  


7. Crear función "decipher" que recibirá como parámetro el newArray de la función "cipher"
8. Declarar un newArrayDecipher dentro de la función
9. Accedemos a cada elemento del newArrayDecipher con un ciclo for
  9.1 Aplicamos la fórmula de Cifrado de Cesar para desplazar 33 espacios pero ahora en lugar de recorrer a la derecha, recorreremos a la izquierda el caracter por cada elemento del índice.
  9.2 Cambiamos los caracteres a través del código ASCII
  9.3 Agregamos los elementos a newArrayDecipher
10. Retornamos newArrayDecipher
11. Mostramos newArrayDecipher

```

## Diagrama de Flujo

A continuación se incluye el diagrama de flujo

![Diagrama de Flujo con Cifrado César] (URL)
