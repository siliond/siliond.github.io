function solution(arr) {
    let result = "", done=false;

    for (let i = 0; !done&&i <= 100; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length <= i)
                done = true;
            else {
                result+=arr[j][i];
                done = false;
            }
        }
    }

    log(result);

    return result;
}
 
log(`Input:
arr:
["Daisy", 
 "Rose", 
 "Hyacinth", 
 "Poppy"]
Expected Output:
"DRHPaoyoisapsecpyiynth"`)
solution (["Daisy", 
"Rose", 
"Hyacinth", 
"Poppy"]);