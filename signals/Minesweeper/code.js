function solution(field, x, y) {
    let state = Array.from(field, (a, iX) => Array.from(a, (v, iY) => -1));

    return processNeighbors(field, x, y, state);
}

function processNeighbors(field, x, y, state) {
    let noMines = 0;
    let neighbors = [];

    for (let iX=(x-1>=0)?x-1:0;iX<=(x+1<field.length?x+1:field.length);iX++) {
        for (let iY=(y-1>=0)?y-1:0;iY<=(y+1<field[iX].length?y+1:field[iX].length);iY++) {
            if (x!==iX||y!==iY) {
                if (field[iX][iY])
                    noMines++;
                neighbors.push(iX, iY);
            }
        }
    }

    state[x][y] = noMines;

    if (noMines == 0) {
        for (let i=0; i<neighbors.length; i++) {
            let [nX, nY] = neighbors[i];
            
            if (state[nX][nY]===-1)
                state = processNeighbors(field, nX, nY, state);
        }
    }

    return state;
}