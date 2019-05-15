function invertHash(obj) {
    // {"name": "Zaphod", "charm": "high", "morals": "dicey"}, 
    //  return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}

    // {"name": "Zaphod"}
    // {"Zaphod": "name"}
    // make a temp variable (newObj)
    // assign the value of obj to a key in newObj
    let newObj = {};
    // check for valid inputs
    // loop obj, get key value pairs
    for(let key of Object.keys(obj)) { // ["name", "charm", "morals"]
        // key => "name", etc
        // obj[key] => "Zaphod"
        // {Zaphod: "name", dicey: "morals"}
        if(newObj[obj[key]]) {
            console.log("key exists!  overwriting previous value...")
        }
        newObj[obj[key]] = key;
    }
    // assign new values in newObj from key in obj
    return newObj;

}

let testObj = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
let testObj2 = {"name": "Zaphod", "charm": "dicey", "morals": "dicey"}; // 
let result = invertHash(testObj2);

console.log(result);