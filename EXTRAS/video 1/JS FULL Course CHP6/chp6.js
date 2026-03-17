/*      FUNCTIONS

WAYS TO WRITE FUNCATIONS

Normal way (aka function statment):
function func1(){ 
(here we write the name of the function after function which is func1  )
// our code                 

}

FUNCTION STORED IN VARIABLE (aka function expression):
let func1 = function(){ 
(here we do not write the name of the function after function which is func1 )

//our code         

}

ARROW FUNCTION (technically its called fat () arrow => function)

1st way

const fun1 = () => {
    
// OUR CODE 
    
}

2nd way 

let fun1 = () => {
    
//our code
    
};

EXP with backtiks ``

function fun1(value){

console.log(`${value} was the thing you told me about `)

}

fun1(horse);
fun1(house);
fun1(mouse);
fun1(route);
fun1(boots);
fun1(night);

PARAMETERS:
The values we give it in the () while building it is/are called parameters

Arguments:
The values we give it in the () while calling it is/are called arguments

DEFAULT VALUES IN FUNCTIONS:
they can be assigned to the function while building them

EXP
function fun1(val1 = 1,val2 = 2 ){ 
(here 1 and 2 are the default values of the val1 & val2)

return val1 , val2 ;

}

REST PARAMETER( ... ):
they are used in functions and array but in array they are called spread

USE CASE:
they are used when we want to give large number of arguments so that we don,t have to write the same number of parameters in a function

EXP:

function add (a, b, c, d, ...val){
(here what will happen is that except for a - d all others will be stored in
REST parameter)

console.log(a, b, c, d, e, f, g, h, i, j)

}

RETURN VALUE in function:
the return value take backs the value to the place from where its called.

FIRST CLASS FUNCTIONS:
its states that function can be treated/stored as values.

EXP:

let funt1 = function()
{

//OUR CODE

}

AND IT CAN ALSO BE USED AS SHOWN BELOW TOO:

function funt2 (val){

val();

}

funt2(function(){
    
console.log("function val was called")

}
);

HIGHER ORDER FUNCTIONS:

function will have higher orders if they contain/accept a function in a parameter
or return a function in the return value or both.

EXP1:

function funt2 (val){

val();

}

funt2(function(){
    
console.log("function val was called")

}
);

EXP2:

function funt2 (){

return function(){
    
console.log("function val was called");

};

}

funt2()(); 
(here the first brackets are of funt2 and the second ones are of the function which is in return value)

PURE AND IMPURE FUNCIONS:

PURE FUNCTION:
function who do not change the value/values outside them are pure functions

IMPURE FUNCTIONS:
function who can change the value/values of something outside them are impure functions

let a = 45;

function funt4(){

console.log("hhahaahahah")

}

function funt5(){

a++;

}

CLOSURES FUNCTIONS AND LEXICAL SCOPING:

CLOSURE FUNCTIONS:

Functions that returns a function and that returned functions can use the some variables of the parent function. 

EXP:

function fun6(){

let a =45;

return function(){

console.log(a)

};
}

LEXICAL SCOPING:
Means that when a function is created to have a function but that function also 
contains another function then what will be the scope of these functions or the data given to them indiviually will have how much scope. 

EXP:

function funt7(){ 
(here the variable a will exist in the whole block meaning 
from funt7 to funt9 )

let a =67;

function funt8(){
(here the variable b will exist in its own block and the block
 that it contains meaning from funt8 to funt9 )

let b = 76;

function funt9(){
(here the variable c will exist only in the funt9 )

let c = 23;

}

}

}

IIFE (immediately invoked function expressions):
functions which are invoked by themselves at the same place/time they were created

EXP:

(function () {

console.log("hehehehehe");

}
)();

HOISTING diff btw declaration,expression: (statment is aka declaration)
Hoisting meaning can something be used before created?


IN STATEMENT:
function can be called before it was created

funt10();

function funt10(){



}


IN EXPRESSION/DECLARATION:
function can not be called before it was created initilation error

funt10();

let funt10 = function (){



}

*/