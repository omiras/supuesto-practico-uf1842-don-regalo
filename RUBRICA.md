# Rúbrica de evaluación — Don Regalo

La calificación total es de **10 puntos**. Cada criterio vale **0,50 puntos**. Se puede asignar **0,25 puntos** cuando el criterio está comenzado pero incompleto, y **0 puntos** cuando no hay evidencia suficiente. Los ejercicios son independientes.

| Ejercicio y criterio evaluable | Puntuación completa (0,50) | Puntuación parcial (0,25) |
| --- | --- | --- |
| **1.** Usa las variables de cantidades y precios facilitadas | El cálculo utiliza `peluches`, `juegos`, `precioPeluche` y `precioJuegoMesa` | Utiliza correctamente algunas de las variables, pero deja algún dato fijo en la operación o ignora una cantidad |
| **1.** Calcula el importe de ambas clases de artículos | Multiplica cada cantidad por su precio y suma los dos importes; con los datos iniciales obtiene 72 | Calcula correctamente el importe de una clase de artículos, pero falta la otra o la suma |
| **1.** Muestra el resultado como número | Muestra una única salida numérica con `console.log` | Muestra el total correcto como texto o acompañado de otras salidas que impiden la comprobación directa |
| **2.** Comprueba el importe mínimo | La condición acepta 50 € y cantidades superiores, y rechaza las inferiores | Usa una comparación de importe, pero excluye 50 € o aplica mal el umbral |
| **2.** Combina las dos condiciones con `&&` | Concede el envoltorio solo si el importe llega a 50 € **y** hay tarjeta | Comprueba las dos condiciones, pero la combinación no representa correctamente la regla |
| **2.** Usa `if...else` y muestra el mensaje correspondiente | Muestra exactamente un mensaje correcto para cada resultado posible | Existe el `if...else`, pero falta o es incorrecto uno de los mensajes |
| **3.** Usa un bucle relacionado con `cantidad` | El bucle se repite tantas veces como indica `cantidad` | Hay un bucle, pero repite una vez de más o de menos |
| **3.** Numera los pedidos correctamente | Empieza en 1, termina en `cantidad` y respeta el orden | Muestra pedidos, pero comienza en 0, omite uno o se pasa del último |
| **3.** Muestra una línea por pedido | Cada vuelta muestra `Preparando pedido N`; con `cantidad = 0` no muestra ninguna | La salida es reconocible, pero falta el número, hay líneas adicionales o falla el caso 0 |
| **4.** Reconoce `NAVIDAD10` | El código exacto aplica un 10 % | Reconoce el código, pero calcula mal el descuento |
| **4.** Reconoce `NAVIDAD20` | El código exacto aplica un 20 % | Reconoce el código, pero calcula mal el descuento |
| **4.** Trata los demás códigos | Un código distinto devuelve el precio original | Existe un caso para los demás códigos, pero altera el precio o acepta códigos incorrectos |
| **4.** Utiliza ambos parámetros | La función usa `precio` y `codigo` recibidos, sin depender de un ejemplo fijo | Usa uno de los parámetros, pero fija el otro en el código |
| **4.** Devuelve el precio final | Todas las ramas devuelven un número mediante `return` | Devuelve un resultado en algunas ramas, pero en otras solo lo muestra o no devuelve nada |
| **5.** Recorre el array para calcular la recaudación | `calcularRecaudacion` recorre `compras` con un bucle usando su longitud | Recorre parte del array o usa una cantidad fija de posiciones |
| **5.** Acumula los importes | Suma todos los elementos, incluidos importes menores de 50 € | Inicia un acumulador y suma parte de los importes, pero omite alguno |
| **5.** Devuelve la recaudación | Devuelve 190 para el ejemplo y 0 para un array vacío | Obtiene el total del ejemplo, pero no lo devuelve o falla con el array vacío |
| **5.** Recorre el array para contar compras con premio | `contarComprasConPremio` revisa todos los elementos mediante un bucle | Revisa solo parte del array o depende de posiciones fijas |
| **5.** Aplica el umbral del cheque regalo | Cuenta cada compra de 50 € o más; no cuenta las inferiores | Cuenta compras, pero excluye 50 € o incluye importes inferiores |
| **5.** Devuelve el número de compras con premio | Devuelve 2 para el ejemplo y 0 para un array vacío | Obtiene el conteo del ejemplo, pero no lo devuelve o falla con el array vacío |
| **TOTAL** | **10 puntos** | |

## Resumen por ejercicio

| Ejercicio | Máximo |
| --- | ---: |
| 1. Importe de la compra | 1,50 |
| 2. Envoltorio gratuito | 1,50 |
| 3. Preparación de pedidos | 1,50 |
| 4. Códigos de descuento | 2,50 |
| 5. Resumen de ventas | 3,00 |
| **Total** | **10,00** |

## Aplicación de la puntuación

Las comprobaciones de las páginas HTML son una ayuda para detectar errores, pero **no asignan la nota**. En los ejercicios 1, 2 y 3 solo comprueban los datos iniciales; hay que revisar el código y, si hace falta, cambiar los datos para verificar otras situaciones. Se admiten soluciones equivalentes que cumplan el enunciado, aunque estén escritas de otra manera.

El reto opcional «Racha de ventas» no forma parte de los criterios puntuables y no modifica la calificación sobre 10 puntos.
