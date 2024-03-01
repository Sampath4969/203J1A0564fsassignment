function identity<T>(a:T[]):T[]
{
    return a.reverse()
    
}
let op1=identity<string>(["hi","hello"])
let op2=identity<number>([1,2])
console.log(op1)
console.log(op2)