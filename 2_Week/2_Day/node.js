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

    removeFirst() {
        // grab the value from the head node
        if(!this.head) {
            throw Error("Cant remove from an empty list!");
        }
        let returnVal = this.head.value;
        // advance head forward by one
        this.head = this.head.next;
        return returnVal;
    }
    // 0 => remove this.head
    // 1 => remove this.head.next
    // ...
    removeAt(position) {

        // EDGE CASE #1: empty list
        // EDGE CASE #2: removing the last one
        // EDGE CASE #3: position > size of list

        // use a counter to track position
        let count = 1;
        let current = this.head;

        // move through the list until we get to count >= postition
        while(count < position && current.next !== null) {
            count++;
            current = current.next;
        }

        // remove node at next of current
        let returnVal = current.next.value;
        // removes ONLY the node after current
        current.next = current.next.next;
        return returnVal;




    }
}

let myList = new SLL();
myList.addToFront(3); // 0
myList.addToFront(2); // 1
myList.addToFront(1); // 2
