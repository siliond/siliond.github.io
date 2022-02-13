function solution(numbers, left, right) {
    let result = [];
    
    for (let i=0; i<numbers.length; i++) {
        x = numbers[i] / (i + 1);
        
        result.push(Number.isInteger(x) && left <= x && x <= right);
    }
    
    return result;
}

log(`Input:
numbers: [8, 5, 6, 16, 5]
left: 1
right: 3

Expected Output:
[false, false, true, false, true]`)
solution ([8, 5, 6, 16, 5], 1, 3);