function solution(matrix, a, b) {
    let sum, maxSum = 0;

    let iA = 0,
        iB = 0;

    let corners = [
        //upper left
        [a - 1, iA],
        //upper right
        [iB, a - 1],
        //bottom left
        [a - 1 + b - 1, iA + b - 1],
        //bottom right
        [iB + b - 1, a - 1 + b - 1]
    ];
    console.log(corners);

    getInnerElements(corners, matrix);
    getInnerElements(corners, matrix, true);

    // for(let i=0;i<matrix.length-a;i++) {
    //     for(let j=0;j<matrix[i].length-b;j++) {
    //         sum=0;
    //         for(let iA=i;iA<i+a;iA++) {
    //             for(let jB=j;jB<j+b;jB++) {
    //                 sum+=matrix[iA][jB];          
    //             }    
    //         }    

    //         if (sum>maxSum)
    //         maxSum = sum;
    //     }
    // }

    return maxSum;
}

function getInnerElements(corners, matrix, transposed) {
    let dY = 0;
    console.log(`transposed = ${transposed}`);
    for (let x = corners[0][0]; x < corners[2][0]; x++) {
        for (let y = corners[0][1]; y < corners[3][1]; y++) {
            getElement(matrix, x, y + dY, transposed);
        }
        dY++;
    }
}

function getElement(matrix, x, y, transposed) {
    if (transposed) {
        // x = matrix.length - x - 1;
        y = matrix[0].length - y - 1;
    }

    const n = matrix[x][y];

    console.log(`[${x}, ${y}] = ${n}`);
}