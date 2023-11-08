const fs = require("fs");

const data = fs.readFileSync("README.md", "utf-8");

// const palabras = data.split(" ").length;

let coincidencias = data.match(/react/gi).length;

// if (coincidencias) {
//   console.log("Las coincidencias encontradas es de: " + coincidencias.length);
// } else {
//   console.log("No se encontraron coincidencias");
// }

console.log("Las coincidencias encontradas es de: " + coincidencias);
