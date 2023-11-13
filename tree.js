class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// let testNewNode = new Node(100);
// console.log("testNewNode: ", testNewNode);


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        // console.log("this = ", this);
                        return this;
                    } else {
                        current = current.left;
                        // console.log("currentShifting == ", current);
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        var current = this.root, found = false;
        while (current && !found) {
            // console.log("conf: ", !found);
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return 'not found !'
        return current;
    }

    bfs() {
        var data = [], queue = [], node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    dfsPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    dfsPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    dfsInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}


var tree = new BinarySearchTree();

tree.insert(45);
tree.insert(43);
tree.insert(55);
tree.insert(37);
tree.insert(48);
tree.insert(59);
tree.insert(57);
tree.insert(68);
tree.insert(8);
tree.insert(39);
tree.insert(5);
tree.insert(9);
tree.insert(38);
tree.insert(41);

console.log("tree: ", tree.root);
// console.log(tree.find(15));

// console.log(tree.bdf());
let val = tree.bfs().map(k => {
    return k.value
})

console.log(val);

console.log("pre: ", tree.dfsPreOrder())
console.log("post: ", tree.dfsPostOrder())
console.log("in: ", tree.dfsInOrder())