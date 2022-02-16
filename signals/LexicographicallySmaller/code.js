function solution(s, t) {
    let result = processString([s, t, 0]) + processString([s, t, 1]);
            
    
    return result;
}

function processString(param) {
    let index =param[2];
    let s = param[index];
    let t = param[1-index];
    
    let result = 0;
    
    for (let i=0; i<s.length; i++) {
        let newS = s.substring(0,i)+s.substr(i+1,s.length-i+1);
        result += (!isNaN(s[i]) && (index===0?newS<t:newS>t))?1:0;
    }
    
    return result;
}

log(`Input:
s: "ab12c"
t: "1zz456"

Expected Output:
1`)
solution ("ab12c", "1zz456");