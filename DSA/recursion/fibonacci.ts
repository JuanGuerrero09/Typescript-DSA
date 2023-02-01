const fibs = ( num:number ):number[] => {
    let a:number, b:number, sum:number, fib:number[] 
    sum = 0
    a = 0
    b = 1
    fib = []
    for (let i = 0; i < num; i++){
        sum += a
        a = b
        b = sum
        fib.push(sum)
    }
    return fib
} 

const fibsRec = (num:number):number[] => {  
    if (num < 1) return fibsRec(num * -1).map(num => num * -1)
    if (num == 0) return []
    if (num == 1){
        return [0]
    }
    if (num == 2){
        return [0, 1]
    }
    return fibsRec(num - 1).concat([fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]])
}

console.log(fibsRec(1));
console.log(fibsRec(-8));
console.log(fibsRec(8));