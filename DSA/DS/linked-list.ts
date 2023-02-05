type NodeValue = string | number | null


class Node {
    value: NodeValue 
    nextNode: Node | null
    
    constructor(value:NodeValue = null){
        this.value = value
        this.nextNode = null
    }
}

class LinkedList {
    headNode: Node | null
    tailNode: Node | null
    sizeList: number

    constructor(){
        this.headNode = null
        this.tailNode = null
        this.sizeList = 0
    }

    append(value:Node){
        let currentHeadNode = this.headNode
        let currentTailNode = this.tailNode
        if(currentHeadNode === null){
            this.headNode = value
        }
        if(currentTailNode !== null){
            currentTailNode.nextNode = value
        }
        this.tailNode = value
        this.sizeList++
    }
    
    prepend(value:Node){
        let nextNode = this.headNode
        this.headNode = value
        value.nextNode = nextNode
        if(nextNode === null){
            this.tailNode = value
        }
        this.sizeList++
    }
    
    size(){
            return this.size
    }

    head(){
        return this.headNode ?? 'Head not found'
    }

    tail(){
        return this.tailNode ?? 'Head not found'
    }

    at(index:number){
        let currentNode = this.headNode
        let currentIndex = 0
        while (currentNode !== null && currentIndex !== index){
            currentNode = currentNode.nextNode
            currentIndex++
        }
        if(currentNode === null){
            return 'Busqueda inválida'
        }
        return currentNode
    }

    pop(){
        let currentNode = this.headNode
        if(currentNode !== null){
            while (currentNode?.nextNode !== this.tailNode && currentNode?.nextNode != undefined){
                currentNode = currentNode?.nextNode
            }
            let poppedNode = currentNode.nextNode
            currentNode.nextNode = null
            this.tailNode = currentNode
            return poppedNode
        }
        return 'There are not elements'
    }

    contains(value:NodeValue){
        let currentNode = this.headNode
        if (currentNode !== null){
            while (currentNode !== null){
                if (currentNode.value === value){
                    return true
                }
                currentNode = currentNode?.nextNode
            }
        }
        return false
    }

    find(value:NodeValue){
        let currentNode = this.headNode
        let currentIndex = 0
        if (currentNode !== null){
            while (currentNode !== null){
                if (currentNode.value === value){
                    return currentIndex
                }
                currentNode = currentNode?.nextNode
                currentIndex++
            }
        }
        return null
    }

    toString(){
        let currentNode = this.headNode
        let returnStr = ''
        if (currentNode !== null){
            while (currentNode !== null){
                returnStr += `( ${currentNode.value} ) => `
                currentNode = currentNode?.nextNode
            }
        }
        returnStr += 'null'
        return returnStr
    }

    insertAt(value:NodeValue, index:number){
        let newNode = new Node(value)
        let currentNode = this.headNode
        let currentIndex = 0
        if (currentNode !== null){
            while (currentNode !== null && currentIndex !== index){
                if (currentIndex === index - 1){
                    let prevNode = currentNode
                    let nextNode = currentNode.nextNode
                    if(nextNode === null){
                        this.tailNode = newNode
                    }
                    prevNode.nextNode = newNode
                    newNode.nextNode = nextNode
                    return newNode
                }
                currentNode = currentNode?.nextNode
                currentIndex++
            }
        }
        if (currentNode === null ){
            if (index > 0){
                return 'Cannot insert at that value'
            }
            this.headNode = newNode
            this.tailNode = newNode
        }
        return newNode
    }

    //TODO FINISH REMOVE AT

    removeAt(index:number){
        let currentNode = this.headNode
        let currentIndex = 0
        if (currentNode !== null){
            while (currentNode !== null && currentIndex !== index){
                if (currentIndex === index - 1 && currentNode.nextNode !== null){
                    let prevNode = currentNode
                    let deletedNode = currentNode.nextNode
                    let nextNode = deletedNode.nextNode
                    prevNode.nextNode = nextNode
                    return deletedNode
                }
                if (currentNode.nextNode === null){
                    this.tailNode = currentNode
                }
                currentNode = currentNode?.nextNode
                currentIndex++
            }
        }
    }
}

export {}

let myNode = new Node(5)
let myNode1 = new Node(3)
let myNode2 = new Node('bye')
let myNode4 = new Node('hi')
let myNode3 = new Node(2)
let myLinked = new LinkedList()
myLinked.append(myNode)
myLinked.append(myNode1)
myLinked.append(myNode2)
myLinked.append(myNode4)
myLinked.append(myNode3)

console.log(myLinked.toString())

myLinked.insertAt('new', 2)

console.log(myLinked.toString())
