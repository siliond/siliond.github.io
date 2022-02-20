function solution(field, x, y) {
    let noMines = 0;
    let neighbors = [];

    let state = Array.from(field, (a, iX) => Array.from(a, (v, iY) => 
        {
            if (iX>=x-1&&iX<=x+1&&iY>=y-1&&iY<=y+1) {
                if (v&&(x!==iX||y!==iY))
                    noMines++;
            }

            return -1;
        }
        ));

    state[x][y] = noMines;

    return state;
}