/*         DATA TYPES

PRIMITIVES DATA TYPES:

Symbols , String , Null , Undefined , Boolean , BigInt , Number

They give an original copy if they are copyed  


REFERENE DATA TYPES:

Arrays , Objects , functions  

They will not an orginal copy but they will only provide the reference of the 
parent

STRINGS:

'' = single quotes
"" = double quotes
`` = backite quotes

Number:

12 = number
14.5 = number
1400.1 = number

Boolean:

means: true and false

Null:

means u declare a variable (or let ) but u left it empty intenionly

like let a = null;

undefined:

means the default value of a variable when it is not given a value

like let b;

 Symbol:

they are used as additional ids or ids for your code or
a part of a codewith you got from somewhere else without
overiding the the existing ids or
libraries in the code 

like let obt1 ={
uid: 47,
name: ALI,
age: 30,
};

(if we did obt1.uid = 047;
then the original uid 47 will be overidden and become 047 in 
the output)

let uid = Symbol("uid");

obt[uid] = 0047;

output:obt1 ={
uid: 47,
name: ALI,
age: 30,
uid: 0047;
};

bigint:

it is used to convert large values of number into a
bigint which  ensures precision

EXAMPLE:
let a = Number.MAX_SAFE_INTEGER

(this tells the maximum value after which precision error can
occur which is 9007199254740991)

a = a + 1 ==>9007199254740992
a = a + 2 ==>9007199254740992   instead of 93
a = a + 3 ==>9007199254740994     
a = a + 4 ==>9007199254740996   instead of 95

to avoid this we write maximum safe integer number after which precision error
can occur and write n at the end of that number so it becomes bigint

like 

let a = 9007199254740991n;

a + 2 = 9007199254740993
a + 4 = 9007199254740995

DYNAMIC Typing:
it means that a type of a data can be changed into another data 
type js supports dynamic typing this does not gives error in the code
but it will give an error somewhere


EXP 

let a = 12; typrof a is number
a = "abc"; typrof a is string
a = true; typrof a is boolean

TYPE OF QURIKS (typeof sometimes gives wrong typeofs
which is of null(object x),array(object x),NaN(number x))

like typeof null ==='object' (it is incorrect will discuss later)

truthy and falsy values 

0 false "" null undefined document.all NaN  --> false
rest all --> true


*/



