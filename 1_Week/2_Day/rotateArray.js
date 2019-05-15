function rotateArr(arr, shiftBy) {
    // loop shiftBy times
    if(shiftBy % arr.length !== 0) {
        console.log(shiftBy%arr.length)
        for (var i = 1; i <= shiftBy%arr.length; i++) {
            // do one rotation
            // Assign the last item to temp variable
            let temp = arr[arr.length - 1];
            for (var j = arr.length-1; j > 0; j--) {
                // and shift each item by one
                arr[j] = arr[j - 1];
            }
            arr[0] = temp;
    
            // [1,2,3]
            // [3,1,2]
        }
    }
    return arr;
}
// Input: [1,2,3],1
// Output: [3,1,2]

// Input: [1,2,3],2
// Output: [2,3,1]

// Input: [1,2,3],5
// Output: [2,3,1]

// Input: [1,2,3],3
// Output: [1,2,3]

let testArr = [1,2,3]
rotateArr(testArr, 1000000);
console.log(testArr);
// edge cases?
// negative shiftBy?

