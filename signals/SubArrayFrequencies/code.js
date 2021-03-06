function solution(arr, m) {
    let frequencies = [];

    for (let i=0; i<arr.length-m+1; i++) {
        let sub = arr.slice(i, i+m);

        frequencies.push(getMostFrequent(sub));
    }

    return frequencies;
}

function getMostFrequent(sub) {
    let map = {};
    let maxFrequency=0, maxNumber = null;

    for (let i = 0; i < sub.length; i++) {
        const number = sub[i];
        
        if(map[number] == null)
            map[number] = 1;
        else
            map[number]++;  

        if(map[number] > maxFrequency)
        {
            maxNumber = number;
            maxFrequency = map[number];
        }
    }

    return maxFrequency;
}