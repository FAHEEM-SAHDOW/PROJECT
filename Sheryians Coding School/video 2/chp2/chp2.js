//////////////////////EVENT && EVENT LISTINERS
/*
EVENT refers to an action like click , double click , hover ,etc
EVENT LISTINERS is the result of an EVENT
EVENT LISTINERS are written in a function
/////////////////////////////////how to write them

element.add/removeEventlistener(" EVENT " , FunctionName )

let p =document.querySelector("p")
function dblclick(al){

p.style.color = " BLUE "

};

p.addEventListener("click" , dblclick);


p.removeEventListener("click" , dblclick);


EXP:

let p = document.querySelector("p");

p.addEventListener("click" , function(){

p.style.color = " BLUE ";

} );

let btn = document.querySelector(".btn");
btn.addEventListener("dblclick" , function(){

btn.style.color = " RED ";
btn.style.backgroundColor = " BLUE ";

} );
////////////////////////////////////INPUTS tags AND EVENT LISTENERS

inputs refers to te values we give it.

the way to write them is:

EXP1:

let inp = document.querySelector("input");

inp.addEventListener("input" , function(detl){     ////////(Function can be written outside and its name can also be used 
 
as the 2nd parameter of the EventListeners )

1)console.log(detl); ////////////////here detl means details which will be given in the form of objects

2)console.log(detl.data );//////////////////here detl.data means in the details what is the data of the input


///SAME AS :
let inp = document.querySelector("input");

function detls(detl){

if (detl.data !== null) { (/////this condition will allow only those inputs to be ignored which will be null) 

console.log(detl , "you typed :" , detl.data )

};

inp.addEventListener("input" , detls);    
    
///////////////////////////////////////////////CHANGES:
it is used when inputs are selected or when there is a change in textarea.

EXP:

let selection = document.querySelector(".selection") 
let h3 = document.querySelector("h3")

function selectables(device){

    console.log(device,`${device.target.value } is your Selected device`)

    h3.textContent = `${device.target.value} Selected`

};

 selection.addEventListener("change" , selectables );

 ////////////////////////////////////////////////////PRACTISE:

 let typing = document.querySelector(".typing"); //h3

 function typed(letters) {
    if (letters.key === " ") {
        return typing.textContent = 'SPC';
    }

    else {
        typing.textContent = `${letters.key}`;

        console.log(`${letters.key}`)

        console.log(letters,)
    }
};

window.addEventListener("keydown", typed);




 */

let btn = document.querySelector(".custom-btn");
let btn1 = document.querySelector(".original-btn");

btn.addEventListener("click", function () {
    
    btn1.click();
});

btn1.addEventListener("change" , function (detl) {

    let file = detl.target.value[0];
    if(file){
        btn.textContent = file.name
    }
    

console.log(detl)

});


