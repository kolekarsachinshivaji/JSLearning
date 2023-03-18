let globalVariable = 100;
function outer() {
    console.log("This is Outer Function");
    let outerFunVariable = 300;
    console.log(outerFunVariable);
    let inner= function() {
        console.log("this is inner function");
        let innerFunVariable = 500;
        console.log(innerFunVariable);
        console.log(globalVariable);
    }
    return inner;
}
const innerfun = outer();
innerfun();
