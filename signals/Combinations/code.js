function solution(a, b) {
    let lenMax = 0;
    
    for (let iB=b.length-1; iB>0; iB++) {
        let combinations = getCombinations(b, iB, 0, [[]]);
    }
    
    return lenMax;
}

function getCombinations(b, noElements, start, combinations) {
    for (let i=start; i<b.length-noElements; i++) {
        for (let j=0; j<combinations.length; j++) {
            combinations[j].push(b[i]);
        }
    }    
}
