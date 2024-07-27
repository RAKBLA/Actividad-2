//String (cadena de caracteres)

let str_1 = "hola soy un texto con comillas";
let str_2 = 'hola soy u texto con comillas simples'
let str_3 = "comillas dentro de las comillas \"elemplo\" ";
let str_4 = 'comillas dentro de comillas simples "Ejemplo"'
let str_5 = "comillas dentro de comillas simples 'Ejemplo'"


console.log(str_1)
console.log(str_2)
console.log(str_3)
console.log(str_4)
console.log(str_5)

// Comillas invertidas (backticks) AltGr + } x2 ``
let str_6 = `comillas invertidas o backticks`
console.log(str_6)

let str_7 = "BLA"
let saludar = `Hola ${str_7} bienvenido`;

console.log(saludar)

let plantilla = `
<html>
   <h3>pagina web de ${str_7}</h3>
   <p>Esto es un parrafo</p>
<html>
`
console.log(plantilla)