function solution(arr, m) {
    let frequencies = [];

    for (let i=0; i<arr.length-m; i++) {
        let sub = arr.slice(i, i+m-1);

        frequencies.push(getMostFrequent(sub));
    }
}

function getMostFrequent(sub) {
    let map = {};
    let maxFrequency=0, maxNumber = null;

    for (let i = 0; i < sub.length; i++) {
        const number = sub[i];
        
        if(map[number] == null)
            map[number] = 1;
        numberse
            map[number]++;  

        if(map[number] > maxFrequency)
        {
            maxNumber = number;
            maxFrequency = map[number];
        }
    }

    return maxFrequency;
}