//let and const are two relatively ways to declare variable.
//let is similiar to var is some respects, but allows users to avoid some of the common "gochas"
//that users run into in JS.
//const is an argumentation of let in that it prevents re-assignment to a variable.
//var can be updated or redefined.
//var variable are function scoped and remember, if there is no function here, it's going to
//be globally scoped.but using let and const. Instead of being scoped to the function,it's 
//block scoped


//scoping rules.
//var declarations have some odd scoping rules. following example:
function f(shouldInitial: boolean) {
    if (shouldInitial) {
        var x = 10;
    }

    return x;
}
//var are function scoped and remember, there's no function here, 
//it's going to be gloablly scoped.
//the variable x declared withing the if block,
//but we were able to access it from outside that block.
f (true); //return '10'
f (false); //return 'undefined'

//a bad pratice for var
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) { //i defined
        var currentRow = matrix[i];
        //i redefined that override the external loop i value.
        //because i refers to the same function-scoped variables.
        for (var i = 0; i < currentRow.length; i++) { 
            sum += currentRow[i];
        }
    }

    return sum;
}

//variable capturing quirks
for (var i = 0; i < 10; ++i) {
    setTimeout(function() {console.log(i);}, 100*i);
}
//the output is ten of 10. why?
//because every function expression we pass to setTimeout 
//actually refers to the same i from the scope.
//setTimeout will run a function after some number of milliseconds,
//but only after the for loop has stoped. after the loop stopped. the value of i is ten.
//so each time the given functions get called, it will print out 10!.

//A common work for this is to use IIFE - an Immediately Invoked Function Expression.like following:
for (var i = 0; i < 10; ++i) {
    (function(i){
        setTimeout(function() {console.log(i);}, 100 * 10);
    })(i);
}

//when a variable is declared using let. it using what called lexical-scoping or blocking-scoping.
//var's block scopes leak out to their containing function, let would not.
function fk(input: boolean) {
    let a= 100;
    if (input) {
        let b = a + 1;
        return b;
    }
    //Error: 'b' doesn't exist here.
    //return b;
}

//variables declared in a catch clause also have similar scoping rule.
try {
    throw "oh no!";
} catch (e) { 
    console.log("Oh well.");
}
//Error: 'e' doesn't exist here. 
//Q: e didn't declared by let. how would be identified. or this is a default rule?
//console.log(e)
