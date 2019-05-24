// s5 = 5 + 4 + 3 + 2 + 1 + 0 + -1 + -2
function rSigma(num) {
    if(num <= 1){
        return 1;
    }
    return num + rSigma(num - 1);
}


function floodFill(canvas2D,startXY,newColor) {
    let x = startXY[0],
        y = startXY[1],
        oldColor = canvas2D[y][x];
    
    // paint the square
    canvas2D[y][x] = newColor;

    // Paint up?
    if(y-1 >= 0 && canvas2D[y-1][x] === oldColor) {
        floodFill(canvas2D, [x, y-1], newColor);
    }

    // Paint down?

    // Paint left?

    // Paint right?
}

let canvas = [
//   0 1 2 3 
    [1,1,2,2], // 0
    [1,1,2,3], // 1
    [1,1,3,2]  // 2
]

let start = [2,1]

floodFill(canvas, start, 5);



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    add(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    displayValues() {
        let current = this.head;
        while(current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    rDisplayValues(current = this.head) {
        if(current !== null) {
            console.log(current.value);
            this.rDisplayValues(current.next);
        }
    }
}

let l = new SLL();
l.add(1);
l.add(2);
l.add(3);
