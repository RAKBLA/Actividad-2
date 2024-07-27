let i = 1;
let f = 10;

for (let n = i; n <= f; n++) {
    let eP = true;

    switch (true) {
        case (n <= 1):
            eP = false;
            break;
        case (n === 2):
            eP = true;
            break;
        default:
            for (let i = 2; i <= n / 2; i++) {
                if (n % i === 0) {
                    eP = false;
                    break;
                }
            }
            break;
    }

    if (eP) {
        console.log(n);
    }
}

