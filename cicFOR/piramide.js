function ast(n) {
    for(let i = 1; i < n; i++){
        let ass = '';
        for (let j = 1; j <= i; j++){
            ass += '*';
        }
            console.log(ass);
    }
}
ast(8);