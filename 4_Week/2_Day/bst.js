
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
    contains(val, node = this.root) {
        if(!node) {
            return false;
        }
        // see if node has val
        if(node.value === val) {
            console.log(node.value, val)
            return true;
        }
        // find out which way to go
        if(val >= node.value) {
            return this.contains(val, node.right);
        } else {
            return this.contains(val, node.left);
        }
    }


    // Size: return the number of nodes
    size(node = this.root) {
        if(!node) {
            return 0;
        }
        return 1 + (this.size(node.left) + this.size(node.right));
    }

    // Display: show contents of tree
    displayContentsDF(node = this.root) {
        if(node) {
            if(node.left){
                this.displayContentsDF(node.left);
            }
            if(node.right) {
                this.displayContentsDF(node.right);
            }
            console.log(node.value);
        }
    }
    displayContentsBF() {
        if(this.isEmpty()){
            return "Tree is empty!"
        }

        let nodes = [this.root];
        while(nodes.length > 0) {
            let node = nodes.shift();
            console.log(node.value);
            if(node.left !== null)
                nodes.push(node.left);
            if(node.right !== null)
                nodes.push(node.right);
        }
    }




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
tree.add(5).add(3).add(15).add(1).add(4);
console.log(tree.contains(4))
console.log(tree.contains(20))