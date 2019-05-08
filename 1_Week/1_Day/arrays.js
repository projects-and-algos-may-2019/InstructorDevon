// var scope:function
// let scope:block
// const scope:block



function sayHi(arr) {
    var message = "hi";
    for(let i = 0; i < arr.length; i++) {

        console.log(arr[i]);
    }
}

function addToFront(arr, val) {
    // shift everythinng over by 1
    // loop array shift each value by arr[i] = arr[i+1]
    for(let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = val;
    // then assign to index 0
    return arr;
}

Array.prototype.addToFront = function( val) {
    for(let i = this.length - 1; i >= 0; i--) {
        this[i + 1] = this[i];
    }
    this[0] = val;
    // then assign to index 0
    return this;
}
// arrays (and objects) are passed by "reference"
let testArr = ["hey", "hi", "hey there"];
testArr.addToFront("yoooo").addToFront("weeeee");
console.log(testArr);