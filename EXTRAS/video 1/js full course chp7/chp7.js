/*
     ARRAYS:
     it is a list of similar items (in oter languages but in JS it can contain different objects)

     METHODS OF ARRAY:
     EXP:

     let arr = [1,2,3,4,5,6,7,8,9,10]

     1)TO PUSH:

     arr.push(14); will add 14 at the last of the arr and pus means to add at end of an array.
     out:
     [1,2,3,4,5,6,7,8,9,10,14]

     2)TO POP:

     arr.pop(); will remove an element from the end of the array.

     out:
     [1,2,3,4,5,6,7,8,9]

     3)TO SHIFT:

     arr.shift(15); will add an element in the start of the array.

      out:
     [15,1,2,3,4,5,6,7,8,9,10]

     4)TO UNSHIFT:

     arr.unshift(); will remove an element from the start of the array.

     out:
     [2,3,4,5,6,7,8,9,10]

     5)TO SPLICE:

     it changes the original array and its written as arr.splice(3,6) HERE 3 means from which index and 6 means how many elements need to be removed

     out:
     [1,2,3,10]

     6)TO SLICE:

     it does not change the original array but its the change in the new array which we give the  name. arr.slice(3,9); here 3 , 9 both are positions 3 is star and 9 is end
     out:
     newarr = [4,5,6,7,8,9]

     7)TO REVERSE:

     it prints the array in reverse sequence arr.reverse();
     out:
     [10,9,8,7,6,5,4,3,2,1]

     8)TO SORT:

     it sorts the array in ascending and descending order.
     here it should contain a function to work
     EXP:
      FOR ASCENDING: 

     let arr1 = [11,88,91,22,55]
     arr1.sort(function(val1 , val2){

     return val1 - val2

     });
     out:
       [11,22,55,88,91]

     FOR DESCENDING:
       let arr1 = [11,88,91,22,55]
     arr1.sort(function(val1 , val2){

     return val2 - val1

     });

     out:
       [91,88,55,22,11]

     9)TO MAP:

     it is created and structured based on the data of another array.it also need a function to work

     EXP:
     let newarr = arr.map(function(){
     return 12;
     });
     out:
     [12,12,12,12,12,12,12,12,12,12]
     its the same size as arr which is 10 or 9 index.

     10)TO FILTER:

     it is used to search and filter out values based on the condition in a new array.it also need a function to work

     EXP:
      let arr = [1,2,3,4,5,6,7,8,9,10]

     let arr1 = arr.filter(function(val){
     
     if(val < 5 ) return true;
     
     });

     out:
     [ 1 , 2 , 3 , 4 ]

     11)TO REDUCE:

     it is used to reduce the size of the array to a single value.

     EXP:
     let arr = [1,2,3,4,5,6,7,8,9,10]
     let newarr1 = arr.reduce(function(accumalator,nextval){
     
     return accumalator + nextval;

     },0);

     out:
      newarr1 = 55

     HERE accumalator can be replaced with any name we wana give however the accumalator stores 
     and remembers its value when function is performed the value is stored again in the accumalator and it repeats until end and the 0 here means that the default value of accumalator is set to 0.


     12)TO FIND:

     this method is used to find and returns the first value which statifes the condition we have given it.it also need a function to work.
     
     EXP:
     let arr11 =[{
     id : 1 , key : 1
     id : 2 , key : 2
     id : 3 , key : 1
     
     }];
     arr1.find(function(val){
     
     return val.key === 1;
     
     });

     out:
     (only the first out of 3 will be printed even if the there is one more that statifies the condition).
     { id : 1 , key : 1}

     13) SOME:

     this method is used to search the whole array and return true  if there is at least one 
     value that satifies the condition.it also need a function to work.
     
     EXP:
     
     let arr3 = [54 , 67 , 81 , 90 , 95 , 98];
      
     let arr4 = arr3.some(function(val){
     
     return val > 95; (if it was this < then false)
     
     });

     out: 
     true

     14)EVERY:

     this method is used to search the whole array and return true only if every 
     value satifies the condition. it also need a function to work.

     EXP:

     let arr5 = [54 , 67 , 81 , 90 , 95 , 98];
      
     let arr6 = arr5.every(function(val){
     
     return val > 50; (if it was this < then false)
     
     });

     out:
     true

     DESTRUCTING && SPREAD OPERATOR:
  
     DESTRUCTING:
     meaning to stores the values of an array in indiviual variables

     EXP:
     let arr = [1,2,3,4,5,6,7,8,9,10]

     let [a , b , c] = arr;
     HERE a b c refers to  1 , 2 , 3  of arr( = arr ) 

     if we dont want a value in btw like 4 then we do this 

     let arr = [1,2,3,4,5,6,7,8,9,10]

     let [a , b , c ,  , d  ] = arr;

     HERE a b c refers to  1 , 2 , 3  of arr( = arr ) 
     AND , , refers to 4 which is to be left empty and d represents 5


     SPREAD OPERATOR IN ARRAY:
     it is used to say store all the values of the this to that

     EXP:
      let arr = [1,2,3,4,5,6,7,8,9,10];

      let arr2 = arr;


      HOWEVER creates array likes these is not usefull buz arr2 reference to arr means it has the same values as arr any changes in arr2 will result in changes in arr
      INSTEAD WE SHOULD DO THIS:

     let arr = [1,2,3,4,5,6,7,8,9,10];
     
     let arr2 = [...arr] <--  here its spread operator       ( here its rest operator) --> arr...

     here [...arr] will create a copy of arr and store it in arr2 and changes in arr2 will not result in the changes in arr.


        

*/
