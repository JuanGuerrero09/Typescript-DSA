class NodeBST {
    data: number | null
    left: NodeBST | null
    right: NodeBST | null
    constructor(data = null){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    root: NodeBST | null
    arr: number[]
    constructor(arr:number[]){
        this.arr = arr
        this.root = null
    }

    buildTree(arr, start, end){
        const sortedArray = [...new Set(this.arr.sort((a, b) => a - b))]
        let mid = Math.floor((sortedArray.length) / 2)
        return  mid
    }
}

const newTree = new Tree([2, 1, 4, 9, 2, 5, 6,3, 4, 5, 6, 7, 7, 8, 9])
console.log(newTree.buildTree([2, 1, 4, 9, 2, 5, 6,3, 4, 5, 6, 7, 7, 8, 9], 1, 9))