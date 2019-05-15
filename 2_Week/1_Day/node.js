class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    // listObj.addToFront("pizza");
    addToFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    // [3,2,1]
    displayAsArray() {
        let currentNode = this.head;
        let output = "[";
        while(currentNode !== null) {
            output += currentNode.value;
            if(currentNode.next !== null) {
                output += ","
            }
            currentNode = currentNode.next;
        }
        output += "]";
        console.log(output);
    }
    displayValues() {
        // Step 1: Loop through the list
        // Step 1a: create a variable for currentNode
        let currentNode = this.head;
        while(currentNode !== null) {

            // Step 2: Console.log each node's value
            console.log(currentNode.value);
            
            // Step 1b: "increment" currentNode
            currentNode = currentNode.next;
        }
    }
}

let myList = new SLL();
myList.addToFront(1);
myList.addToFront(2);
myList.addToFront(3);
