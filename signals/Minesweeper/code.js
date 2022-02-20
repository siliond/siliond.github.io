function solution(field, x, y) {
    let noMines = 0;

    let state = Array.from(field, (a, iX) => Array.from(a, (v, iY) => 
        (x==iX&&y==iY)?-1:noMines
        ));

    return state;
}