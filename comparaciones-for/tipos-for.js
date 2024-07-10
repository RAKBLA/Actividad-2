//tipos de for (Bucle)
/**
 * for(inicializacion; condicion; actualizacion){
 *      Bucle
 * }
 * 
 * i = i + 1;
 * i += 1;
 * i++
 * i--
 * 
 */

//for
for (let i = 0; i < 10; i++){
    console.log(i)
}

let lista = [1, 2, 3, 4, 5];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

//forEach
lista.forEach(valor => {
    console.log(valor);
});

//for...of
for (let valor of lista) {
    console.log(valor);
}

//for...in
let persona = {
    nombre = "brian",
    edad = 21,
    isDeveloper = true
}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(propiedad[propiedad]);
    
}