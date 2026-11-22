"use strict";

// Estas pruebas sirven para que el alumnado revise los resultados.
// El código que se entrega se escribe en el bloque <script> de cada ejercicio.
const ejercicios = {
  "1": [
    { descripcion: "Importe total de 3 peluches y 2 juegos", esperado: [72], salida: true }
  ],
  "2": [
    { descripcion: "Compra de 60 € sin tarjeta", esperado: ["Sin envoltorio gratuito"], salida: true }
  ],
  "3": [
    { descripcion: "Preparación de 8 pedidos", esperado: ["Preparando pedido 1", "Preparando pedido 2", "Preparando pedido 3", "Preparando pedido 4", "Preparando pedido 5", "Preparando pedido 6", "Preparando pedido 7", "Preparando pedido 8"], salida: true }
  ],
  "4": [
    { funcion: "aplicarDescuento", entrada: [100, "NAVIDAD10"], esperado: 90 },
    { funcion: "aplicarDescuento", entrada: [100, "NAVIDAD20"], esperado: 80 },
    { funcion: "aplicarDescuento", entrada: [100, "OTRO"], esperado: 100 },
    { funcion: "aplicarDescuento", entrada: [50, "NAVIDAD10"], esperado: 45 }
  ],
  "5": [
    { funcion: "calcularRecaudacion", entrada: [[25, 60, 15, 50, 40]], esperado: 190 },
    { funcion: "calcularRecaudacion", entrada: [[]], esperado: 0 },
    { funcion: "contarComprasConPremio", entrada: [[25, 60, 15, 50, 40]], esperado: 2 },
    { funcion: "contarComprasConPremio", entrada: [[50, 49, 50]], esperado: 2 },
    { funcion: "contarComprasConPremio", entrada: [[]], esperado: 0 }
  ],
  "6": [
    { funcion: "rachaVentas", entrada: [[25, 50, 60, 15, 80, 50, 50]], esperado: 3 },
    { funcion: "rachaVentas", entrada: [[10, 20, 30]], esperado: 0 },
    { funcion: "rachaVentas", entrada: [[50, 50, 50]], esperado: 3 },
    { funcion: "rachaVentas", entrada: [[60, 50, 20, 50]], esperado: 2 },
    { funcion: "rachaVentas", entrada: [[]], esperado: 0 }
  ]
};

const numero = document.body.dataset.ejercicio;
const pruebas = ejercicios[numero] || [];
const lista = document.querySelector("#resultados");
const resumen = document.querySelector("#resumen");
let aciertos = 0;

if (window.consolaOriginalDonRegalo) {
  console.log = window.consolaOriginalDonRegalo;
}

for (let i = 0; i < pruebas.length; i++) {
  const prueba = pruebas[i];
  const funcion = prueba.salida ? null : window[prueba.funcion];
  let recibido;
  let error;

  if (prueba.salida) {
    recibido = window.salidasDonRegalo || [];
  } else if (typeof funcion !== "function") {
    error = "No se encontró la función " + prueba.funcion + ".";
  } else {
    try {
      const argumentos = prueba.entrada.map(copiar);
      if (prueba.consola) {
        const mensajes = [];
        const consolaOriginal = console.log;
        try {
          console.log = function () {
            mensajes.push(Array.from(arguments).join(" "));
          };
          funcion.apply(null, argumentos);
        } finally {
          console.log = consolaOriginal;
        }
        recibido = mensajes;
      } else {
        recibido = funcion.apply(null, argumentos);
      }
    } catch (e) {
      error = e.message;
    }
  }

  const correcto = !error && iguales(recibido, prueba.esperado);
  if (correcto) aciertos++;
  const item = document.createElement("li");
  item.className = correcto ? "bien" : "mal";
  const nombre = prueba.salida ? prueba.descripcion : prueba.funcion + "(" + prueba.entrada.map(formatear).join(", ") + ")";
  if (prueba.salida) {
    item.textContent = "Prueba " + (i + 1) + " · " + nombre + ". " +
      describirSalida(prueba.esperado, numero, true) + " " +
      (error ? "Error: " + error : describirSalida(recibido, numero, false) + " " + (correcto ? "Correcta." : "Revisa este caso."));
  } else {
    item.textContent = "Prueba " + (i + 1) + " · " + nombre +
      ": se espera " + formatear(prueba.esperado) + ". " +
      (error ? "Error: " + error : "Tu resultado: " + formatear(recibido) + ". " + (correcto ? "Correcta." : "Revisa este caso."));
  }
  lista.append(item);
}

resumen.textContent = aciertos + " de " + pruebas.length + " pruebas correctas.";

function copiar(valor) {
  if (Array.isArray(valor)) return valor.slice();
  return valor;
}

function iguales(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  return a === b;
}

function formatear(valor) {
  if (valor === undefined) return "ningún valor";
  if (Array.isArray(valor)) return valor.length ? "[" + valor.map(formatear).join(", ") + "]" : "[]";
  if (typeof valor === "string") return '"' + valor + '"';
  return String(valor);
}

function describirSalida(valores, ejercicio, esperado) {
  const inicio = esperado ? "Se espera" : "Tu programa mostró";
  if (!valores.length) return inicio + (esperado ? ": ninguna salida." : ": ninguna salida.");
  if (ejercicio === "1") {
    if (valores.length !== 1) return inicio + " " + valores.length + " salidas; debe ser un solo número.";
    const valor = valores[0];
    const tipo = typeof valor === "number" ? "el número " : typeof valor === "string" ? "el texto " : "el valor ";
    return inicio + " " + tipo + formatear(valor) + ".";
  }
  if (ejercicio === "2") {
    if (valores.length !== 1) return inicio + " " + valores.length + " mensajes; debe ser uno solo.";
    return inicio + " el mensaje " + formatear(valores[0]) + ".";
  }
  return inicio + " " + valores.length + " líneas: " + valores.map(formatear).join(" · ") + ".";
}
