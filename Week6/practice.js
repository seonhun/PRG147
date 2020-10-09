// Regular function, called explicitly by name:
function multiply3() {
    var number1 = Math.round(Math.random()*100);
    var number2 = Math.round(Math.random()*100);
    var number3 = Math.round(Math.random()*100);
    console.log(number1 + " * " + number2 + " * " + number3 + " = " + number1*number2*number3);
 }
//  multiply3();
 
 
 
 
 function findBiggestFraction(a,b) {
     console.log("The bigger fraction between the two fractions " + a + " and " + b + " are:");
     a>b ? console.log("a: ", a) : console.log("b: ", b);
 }
 
 function biggerFraction() {
    var firstFraction = Math.random(); //3/4
    var secondFraction = Math.random(); //5/7
    
    findBiggestFraction(firstFraction,secondFraction);
 
}
 
 
 
 
 function findsmallerFraction(a,b) {
     var result;
     a<b ? result = ["firstFraction", a] : result = ["secondFraction", b];
     return result;
 }
 
 function smallerExecute() {
    var firstFraction = Math.random(); //3/4
    var secondFraction = Math.random(); //5/7
    
    var fractionResult = findsmallerFraction(firstFraction,secondFraction);
    
    console.log("First fraction result: ", firstFraction);
    console.log("Second fraction result: ", secondFraction);
    console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is smaller!");
}
 
 
// function theDivisible(a) {
 
//     for (i = 1; i < (a + 1); i++) {

//         if (a % i == 0) {

//            console.log(i);

//        }
//    }
//    return;
// }
 
// function dividingNum() {
//     var divisibleNum = Math.round(Math.random()*10);
    
//     console.log("The root integers for " + divisibleNum + " are: ");
    
//     theDivisble(divisibleNum);
//  }
 
 
 
 
 function theFactorial(a) {
 
     var multiplierNum = 1;
 
     for (i = a; i > 0; i--) {
 
        multiplierNum = multiplierNum * i;
 
 } 
 
 return multiplierNum
 }
 
 function factorialExe() {
    var FactorialNum= Math.round(Math.random()*10)
    
    console.log("The factorial for " + FactorialNum + " is " + theFactorial(FactorialNum));
 }