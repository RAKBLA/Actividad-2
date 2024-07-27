function fac(nu){
    let factor = 1;
    for (let i = 1; i <= nu; i++){
        factor *= i;
    }
    return factor;
}

const n = 0;
console.log(fac(n));
