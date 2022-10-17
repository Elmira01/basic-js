function getMatrixElementsSum(matrix) {
    let h = matrix.length;
    let l = matrix[0].length;
    for(let i = 0; i<h; i++){
        for(let j=0; j<l; j++){
            if(matrix[i][j]==0 && typeof matrix[i+1] !== 'undefined') 
            matrix[i+1][j]=0;
        }
    }
    return Sum(matrix);
