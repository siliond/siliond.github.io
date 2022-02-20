function solution(field, x, y) {
    let noMines = 0;

    let state = Array.from(field, (a, iX) => Array.from(a, (v, iY) => 
        {
            if (iX>=x-1&&iX<=x+1&&iY>=y-1&&iY<=y+1) {
                if (x==iX&&y==iY)
                    return noMines;
                else if (v)
                    noMines++;
            }

            return -1;
        }
        ));

    return state;
}