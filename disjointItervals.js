function solve(A) {
    A = A.sort((a,b) => a[1] - b[1]);
    A
    let prevS,prevE = A[0];
    let counter = 0
    
    for ( let [a,b] of A ) {
        if ( a <= prevE) continue; 
        else [prevS, prevE] = [a,b] , counter++
    }
    return counter
}

console.log(solve([[1, 4], [2, 3], [4, 6], [8, 9]]))