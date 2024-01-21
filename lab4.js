var matrix = [[1,1,0],[1,0,1],[0,1,1],[1]];
for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length ;j++){
        process.stdout.write(matrix[i][j] + ' ');
    }
    console.log();
}