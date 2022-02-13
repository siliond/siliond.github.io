function solution(arr) {
    let result = "", done=false;

    for (let i = 0; !done&&i <= 100; i++) {
        done = true;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length > i) {
                result+=arr[j][i];
                done = false;
            }
        }
    }

    log(result);

    return result;
}