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
    // returns the value of the last node
    removeLast() {
        // is this empty?
        if(!this.head) {
            throw Error("Cant remove from an empty list!");
        }
        // this this a one item list?
        else if(!this.head.next) {
            // we want to delete the head
            let returnVal = this.head.value;
            this.head = null;
            return returnVal;
        }

        // go to ONE BEFORE the end of the list
        let current = this.head;
        while(current.next.next !== null) {
            current = current.next;
        }
        // grab the value from the last node
        let returnVal = current.next.value;
        // end of loop: current.next is the last one
        // detach the pointer (node.next = null)
        current.next = null;
        
        return returnVal;

        // PROFIT??
    }
}

let myList = new SLL();
myList.addToFront(1);
myList.addToFront(2);
myList.addToFront(3);
