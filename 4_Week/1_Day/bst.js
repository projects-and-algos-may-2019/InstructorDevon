
class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Contains(value) return if tree posseses a node with that value

    // Size: return the number of nodes

    isEmpty() {
        return this.root === null;
    }

    // min, returns the smallest number
    min() {
        if(this.isEmpty()) {
            return "List is empty";
        }
        // keep going left
        let currentNode = this.root;
        // loop until currentNode is null
        while(currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    max(node = this.root) {
        // go right, till we cant

        // breakcase: node.right is null
        if(!node.right){
            return node.value;
        }
        else {
            return this.max(node.right);
        }
    }

    add(value, node=this.root) {

        // is this an empty tree?
        if(this.isEmpty()) {
            this.root = new BSTNode(value);
            // if so, add new node to root and leave!
            return this;
        }

        // if not..
        // determine where to put new node (left or right)

        let goRight = node.value < value;
        if(goRight) {
            // check if there is a node to the right
            if(!node.right) {
                node.right = new BSTNode(value);
                return this;
            } else {
                return this.add(value, node.right);
            }
        } else {
            // check if there is a node to the left
            if(!node.left) {
                node.left = new BSTNode(value);
                return this;
            } else {
                return this.add(value, node.left);
            }
        }
    }
}

let tree = new BST();
tree.add(1).add(5).add(15);