
let n = 1;
let n1 = 5;
let n2= 1;
if (n === n1 && n1 === n2) {
    console.log("triangulo equilatero");
} else if (n === n1 || n === n2 || n1 === n2) {                     //ejercico if-else
    console.log("Triangulo isosceles");
} else {
    console.log("Triangulo escaleno");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let n3 = 5;
let n4 = 5;
let n5 = 5;
let triangulo;
if (n3 === n4 && n4 === n5) {
    triangulo = "equilatero";
} else if (n3 === n4 || n3 === n5 || n4 === n5) {
    triangulo = "isosceles";
} else {
    triangulo = "escaleno";
}

switch (triangulo) {
    case "equilatero":                                         //mismo ejercicio pero con switch
        console.log("Triangulo equilatero");
        break;
    case "isosceles":
        console.log("Triangulo isosceles");
        break;
    case "escaleno":
        console.log("Triangulo escaleno");
        break;
}
