function identity(a) {
    return a.reverse();
}
var op1 = identity(["hi", "hello"]);
var op2 = identity([1, 2]);
console.log(op1);
console.log(op2);
