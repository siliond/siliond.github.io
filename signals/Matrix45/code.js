function solution(matrix, a, b) {
    let sum, maxSum = 0;
    
    for(let i=0;i<matrix.length-a;i++) {
        for(let j=0;j<matrix[i].length-b;j++) {
            sum=0;
            for(let iA=i;iA<i+a;iA++) {
                for(let jB=j;jB<j+b;jB++) {
                    sum+=matrix[iA][jB];          
                }    
            }    
            
            if (sum>maxSum)
            maxSum = sum;
        }
    }
    
    return maxSum;
}
