class Node {
  constructor(data) {
    this.data = data;
    this.childs = [];
    this.parent = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else if (data < this.root.data) {
    }
  }
}

let bst = new BST();
bst.add(10);
bst.add(5);
console.log(bst);
