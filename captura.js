// Guarda la salida del ejercicio para mostrar la comprobación al final de la página.
window.salidasDonRegalo = [];
window.consolaOriginalDonRegalo = console.log;
console.log = function () {
  window.salidasDonRegalo.push(arguments.length === 1 ? arguments[0] : Array.from(arguments));
  window.consolaOriginalDonRegalo.apply(console, arguments);
};
