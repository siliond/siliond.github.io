function solution(matrix, a, b) {
    let maxSum = 0;

    console.log(`[matrix.length - a, matrix[0].length - b] = [${matrix.length - a}, ${matrix[0].length - b}]`);
    //TODO Address a||b==1
    for (let iA = 0; iA < matrix.length - a - 1; iA++) {
        for (let iB = 0; iB < matrix[0].length - b; iB++) {
            console.log(`[iA, iB] = [${iA}, ${iB}]`);

            let corners = [
                //upper left
                [iA + a - 1, iB],
                //upper right
                [iA, iB + a - 1],
                //bottom left
                [iA + a - 1 + b - 1, iB + b - 1],
                //bottom right
                [iA + b - 1, iB + a - 1 + b - 1]
            ];
            console.log(corners);

            maxSum = getInnerElements(corners, matrix, maxSum);

        }
    }

    return maxSum;
}

function getInnerElements(corners, matrix, maxSum) {
    let dY = 0;
    let s = 0,
        sT = 0;

    for (let i = 0; i < corners.length; i++) {
        let [x, y] = corners[i];

        let [n, nT] = getElement(matrix, x, y);
        s += n;
        sT += nT;
    }

    for (let x = corners[0][0]; x < corners[2][0]; x++) {
        for (let y = corners[0][1]; y < corners[3][1]; y++) {
            if ((x > corners[0][0] || y > corners[0][1]) && (x < corners[2][0] - 1 || y < corners[3][1] - 1)) {
                let [n, nT] = getElement(matrix, x, y + dY);

                s += n;
                sT += nT;
            }
        }
        dY++;
    }

    console.log(`s = ${s}`);
    // console.log(`sT = ${sT}`);

    if (s > maxSum)
        maxSum = s;

    if (sT > maxSum)
        maxSum = sT;

    return maxSum;
}

function getElement(matrix, x, y) {
    const yT = matrix[0].length - y - 1;
    const [n, nT] = [matrix[x][y], matrix[x][yT]];

    console.log(`[${x}, ${y}] = ${n}`);
    // console.log(`T [${x}, ${yT}] = ${nT}`);

    return [n, nT];
}