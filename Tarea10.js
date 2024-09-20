function paresMatrices(matrices) {
    let total = 0;
    for (var i = 0; i < matrices.length; i++){
        for (var j = 0; j < matrices [i].length; i++){
            if (matrices [i][j] % 2 === 0){
                total += matrices [i][j];
            }
        }
    }
    return total;
}

var matriz =[

    [0, 4, 3],
    [2, 9, 8],
    [1, 6, 7]

];

console.log(paresMatrices(matriz));
