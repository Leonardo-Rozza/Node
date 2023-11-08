const fs = require("fs");

const data = fs.readFileSync("README.md", "utf-8"); //Lee el archivo

const newData = data.replace(/React/gi, "Angular"); //Modifica el mismo, donde cambiamos la palabra React por Angular

fs.writeFileSync("README-Angular.md", newData); //Creamos un nuevo archivo con la nueva informacion.
