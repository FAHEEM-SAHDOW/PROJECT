/*
NODE:
every part of a code is a node.
and tags and text contained in those node are elements.


///////////////////////////////////////////////////////////

document.GetElementById("para")
HOW TO SELECT tags or nodes:

///////.GetElementById

selects tag with a unique id

let abcd = document.GetElementById("para")

EXP:

 <div id ="para"> HI I AM A PARARAPH </div>


//////////.GetElementsByClassName

selects a tag with same class names or more tags with same name

let abcd = document.GetElementsByClassName("para1")

EXP:

 <div class ="para1"> HI I AM A PARARAPH </div> only this is selected
 <div class ="para"> HI I AM A PARARAPH </div>

//////////.querySelector

selects the only the first element or tag with the particular 
name even if there are more than one

let abcd = document.querySelector("para")

EXP:

 <div class ="para1"> HI I AM A PARARAPH </div> only this is selected
 <div class ="para2"> HI I AM A PARARAPH </div>
 <div class ="para3> HI I AM A PARARAPH </div>

//////////.querySelectorAll

selects all the elements or tags with the particular name 

let abcd = document.querySelectorAll("para")

EXP:
<div class ="para2"> HI I AM A PARARAPH </div> all will be selected
 <div class ="para3> HI I AM A PARARAPH </div>


////////////// CONSOLE.DIR

SHOW THE PROPERTITES OF AN ELEMENTS TAG WHEN USED

EXP:
<div class ="para1"> HI I AM A PARARAPH </div>
console.dir("para1")

/////////////////////////////////////Text/content access

////////////////////////.innerHTML

it can add html inside the tag of the element or pure text 
EXP:

let abcd = document.querySelector("div")

<div class ="para1"> HI I AM A PARARAPH </div>

abcd.innerHTML = "<i>Hi how are you?</i>"

out:
 <i>Hi how are you?</i> (in italic)

////////////////////////.innerText

it can add pure textin the tag of the element only however works same as innerHTML
EXP:
let abcd = document.querySelector("div")

<div class ="para1"> HI I AM A PARARAPH </div>

abcd.innerText = "Hey how was your day"

out:
<div class ="para1"> Hey how was your day</div>

////////////////////////.textContent


it also changes the text contained in the tag

EXP:
let abcd = document.querySelector("div")

<div class ="para1"> HI I AM A PARARAPH </div>

abcd.innerText = "Hey how was your day"

out:
<div class ="para1"> Hey how was your day</div>


/////////////////////////////////ATTRIBUTES IN HTML

/////////////////////.GETATTRIBUTE

it is written as

EXP:
<a href="https://www.google.com">google</a> in html

let a = document.querySelector("a")

a.getattribute("href")    

console.log(a.getattribute("href"));    --->   https://www.google.com (output)



///////////////////////SETATTRIBUTE:

USED to set attribute of a tag.

EXP:

<a href = > google </a> in html

let a = document.querySelector("a")

a.setattribute("href","https://www.google.com")    

console.log(a.setattribute("href")); --->  <a href =https://www.google.com > google </a> in html (output) 

///////////////////////////////REMOVEATTRIBUTE:
USED to remove attribute of a tag.

EXP:

<a href = https://www.google.com > google </a> in html

let a = document.querySelector("a")

a.setattribute("href")    

console.log(a.setattribute("href")); --->  <a href = > google </a> in html (output) 

//////////////////////////CREATING ELEMENTS:

///////////////.create element
it is written as 
EXP:

let h1 = document.createElement("h1");

h1.innerText = "this Element was created manually in js"

let body = document.querySelector("body");

body.prepend(h1);

///////////////////////////////PREPEND ELEMENT:
it is used to attach an element before another element.
EXP:

let h1 = document.createElement("h1");

h1.innerText = "this Element was created manually in js"

let body = document.querySelector("body");

body.prepend(h1);

///////////////////////////////////APPPEND ELEMENT:
it is used to attach an element after an element.
EXP:

let h1 = document.createElement("h1");

h1.innerText = "this Element was created manually in js"

let body = document.querySelector("body");

body.append(h1);

////////////////////////////////////////REMOVE AND APPEND CHILD:
it is used to attach an elements after the elements(children) of that element(like div) as a child.

EXP:

let h1 = document.createElement("h1");

h1.innerText = "this Element was created manually in js DIV"

let div = document.querySelector("div");

div.appendchild(h1);
let h1 = document.createElement("h2");

h1.innerText = "this Element was created manually in js DIV"

let div2 = document.querySelector("div2");

div2.appendchild(h2);

let h3 = document.createElement("h3");

h1.innerText = "this Element was created manually in js DIV"

// [document.querySelector("div3").appendchild(h3);

// ] SAME AS let div3 = document.querySelector("div3").appendchild(h3);

div3.appendchild(h3);

//div3.removechild(h3);    removes div3 completely

////////////////////////////////CLASSLISTS:

classlist.add adds a class to the variable 

let div1 = document.querySelector("div1");
div1.classList.add("propertites");


classlist.remove removes a class from the variable. 


let div1 = document.querySelector("div1");
div1.classList.add("propertites");
//div1.classList.remove("propertites");

/////////////////////////////////TOGGOLE class
adds a class if it does not have it and removes when it has that class.

let div1 = document.querySelector("div1");
div1.classList.toggle("propertites");

//////////////////////////////////////LOOPS WITH html printing

EXP:
let containers = document.querySelectorAll("containers");
containers.forEach(function(val){

console.log(val.TextContent = " I WAS CHANGED ")

});

EXP2:

let containers = document.querySelectorAll(".containers");
containers.forEach(function(val){

console.log(val.textContent = " I WAS CHANGED BY JS ");

});

EXP2 can also be written as:

let containers = document.querySelectorAll(".containers");
for(i=0; i<containers.length; i++){

console.log(containers.textContent = " I WAS CHANGED BY JS ");

}

EXP3:

let containers = document.querySelectorAll(".containers");
for(i=0; i<containers.length; i++){

console.log(containers.textContent = " I WAS CHANGED BY JS ");

}
console.log(containers.length)

EXP4:

let li = document.querySelectorAll("li");
for(i=0; i<li.length; i++){

console.log(li.textContent = " I WAS CHANGED BY JS ");

}
console.log(li.length)


console.dir(document.querySelectorAll("li"))

EXP5:
let containers = document.querySelectorAll(".containers");
for(i=0; i<containers.length; i++){

console.log(containers[i].textContent );

}

/////////////////////DIFFERENCE OF innertext & textContent

textContent can return or print evey text in the tag disobeying their hidden property

innerText can return only the text which is in the tag and not hidden


*/





