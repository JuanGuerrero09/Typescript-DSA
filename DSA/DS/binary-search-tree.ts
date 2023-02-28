class NodeBST {
  data: number ;
  left: NodeBST | null;
  right: NodeBST | null;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root: NodeBST | null;
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
    this.root = null;
  }

  buildTree() {
    const sortedArray = [...new Set(this.arr.sort((a, b) => a - b))];
    this.root = this.createTree(sortedArray);
    return this.root
  }

  createTree(sortedArr: number[]) {
    let mid = Math.floor(sortedArr.length / 2);
    if (mid - 1 < 0) {
      return new NodeBST(sortedArr[mid]);
    }
    const root = new NodeBST(sortedArr[mid]);
    root.left = this.createTree(sortedArr.slice(0, mid));
    root.right = this.createTree(sortedArr.slice(mid + 1, sortedArr.length));
    return root;
  }

  search(value:number, root = this.root){
    let findNode
    console.log(root!.data, value)
    if (root!.data === value){
        console.log('acá')
        findNode = root
        return findNode
    }
    if (root!.data > value){
        this.search(value, root?.left)
    }
    if (root!.data < value){
        this.search(value, root?.right)
    }
    return 'Value not find'
  }
}

const prettyPrint = (node: NodeBST, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const newTree = new Tree([2, 1, 4, 9, 2, 5, 6, 3, 4, 5, 6, 7, 7, 8, 9, 10]);
prettyPrint(newTree.buildTree())
console.log(newTree.root)
console.log(newTree.search(5))
