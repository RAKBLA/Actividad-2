let n = 85;
if (n >= 90 && n <= 100) {
    console.log("a");
} else if (n >= 80 && n <= 89) {
    console.log("b");
} else if (n >= 70 && n <= 79) {                                  //ejercicio utilizando if-else
    console.log("c");
} else if (n >= 60 && n <= 69) {
    console.log("d");
} else {
    console.log("f");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let n1 = 75;
switch (true) {
    case (n1 >= 90 && n1 <= 100):
        console.log("a");
        break;
    case (n1 >= 80 && n1 <= 89):
        console.log("b");
        break;                                      //mismo ejercicio pero con switch
    case (n1 >= 70 && n1 <= 79):
        console.log("c");
        break;
    case (n1 >= 60 && n1 <= 69):
        console.log("d");
        break;
    default:
        console.log("f");
}
