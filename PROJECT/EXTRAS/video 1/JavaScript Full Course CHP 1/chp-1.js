/*
TMPORTANTS IN CHP 1

//Temporal Dead Zone
//it is the area from where the varable,let,const
//  is called or to be printed to area where it was later 
// assigned
//Example:

//IN CASE OF VAR
console.log(a)


var a = 21;

//Here the area from 7 -9 is the temporal dead zone
//HOWEVER the output of the code would be undefined NO ERROR

//REASON: HOISTING

//when we write var a = 21; then actually the
//code is broken into 2 parts first one is declaraction
//second one is assignment

//DECLARATION PART: var a = undefined;
//ASSIGNMENT PART : a = 21;

//AFTER this the DECLARATION PART is moved to the top of the 
//code AS SHOWN
var a = undefined
console.log(a)


var a = 21;
//SAME FOR LET too

//IN CASE OF LET 

//WRITTEN CODE

console.log(b)


let b =27;

//ACTUAL CODE

let b = undefined;

console.log(b)

 b =27;

//Here the area from 38 - 42 is the temporal dead zone
//HOWEVER IN THE WRITTEN CODE the output of the code wouldn,t be undefined BUT AN ERROR 
//HOWEVER IN THE ACTUAL CODE the output of the code wouldn,t be undefined BUT 27
//saying b can not be accessed before it is  initialized

//IN CASE OF

console.log(b)

// the error would only be b is not defined

*/

/*
IN SHORT HOISTING

var will give undefined

let will give error

const will also give error


*/

//  SCOPE of var let const (scopes are global, block & functional)

//VAR (functional, no respect to block, GLOBAL)

/*

scope of var is functional HOWEVER if it is not defined in function
then its scope becomes global THIS happens because it does not respects
block level if used in a block then it can be accessed outside however
outside function it does not exist, if written outside its scope is global 

*/

//LET (BLOCK, GLOBAL, FUNCTIONAL )

/*

scope of let is for All MEANING if written in block it will respect the block
and will exist only in the block, if written outside then it can be updated later
but if updated in the block then it will still show its original value but in block
it will keep the updated value
 

EXP 

let c1 = 10 
console.log(c1)

{
    let c2 = 90 + c1
    console.log(c2)
}

console.log(c1)

*/


//CONST (BLOCK, GLOBAL, FUNCTIONAL)

/*
HOWEVER it can not be updated or redeclared however its propertites can be modified

EXP

CONST  author = ali; (CAN NOT BE UPDATED)

author ={} (not acceptable);

CONST author2 = {NAME: "AHMED"};

author.NAME = "HAMMAD"; (this is acceptable)

*/











































