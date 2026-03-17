/*
     OBJECTS:

     objects are key , value pairs enclosed in {}
    
     EXP:
     let obj = {
     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com"

       }
      HERE name , age , email are keys and the data adject to them are values


        DOT AND BRACKET NOTATION
        these are two ways to acess the objects keys

     DOT:

     it writen like obj.name  what this does is it goes in to the object and searches for key named name and gives its value

     BRACKET NOTATION:

      it writen like obj[key] however in this part we can store the key which we will use alot of the time in a variable which gives us felixibility in writing this is how its written:

     EXP:
        let obj = {
     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com"

       }

       let a =["name"]
       let b =["age"]
       let c =["email"]
     obj[a];
     obj[b];
     obj[c];

     NESTING AND DEEP COPY:
     NESTING:

     let obj = {
     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com",

     location : {
     long:76.5,
     lati:54,

     address : {
     street:47,
     sector:21,
     
     },

     },
    

    };

    HERE NESTING means an object is containing an other object forming a nest

    DEEP ACCESS:
    meaning how can we accessing the object being contained in an object
     EXP:
     how can we accessing street and sector in the obj

  let obj = {
     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com",

     location : {
     long:76.5,
     lati:54,

     address : {
     street:47,
     sector:21,
     
     },

     },
    

    };
    obj.location.address.sector
    obj.location.address.street
    
    these following lines represent deep access meaning
    
    obj. inside obj ,loction. inside location ,address. inside address , and .street find address
    
    IN SHORT : first go in obj then location and  then address to find street 
    
    obj. inside obj ,loction. inside location ,address. inside address , and .street find sector
   
    IN SHORT : first go in obj then location and  then address to find sector


    OBJECT DESTRUCTING:
    meaning to store keys of an object into indiviual variables to create felixibility while writing

    EXP:

      let obj = {
     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com",
    }
    let {name,age}  = obj;

     LOOPING IN OBJECTS FORIN, OBJECT.KEYS , OBJECT.ENTRIES

     FOR IN LOOP:
     loops can also be used in objects.

     EXP:

         let obj = {
     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com",
    }
     
    for(let keys in obj){
      
    console.log(keys , obj[keys]);   
};
    obj.key will sreach for the word key in object literally which is why it is incorrect to write obj.key 
  
    
     
     OBJECT.KEYS:
     converts the object keys into an array
     way to write it is Object.keys(obj)
     
    
    Object.keys(obj)
   // out:
    //['name', 'age', 'email']

       
     OBJECT.ENTRIES:
     it creates one array in which keys , values are stored in an array indiviually.    

       Object.entries(obj)  
      (3) [Array(2), Array(2), Array(2)]
      0
      : 
      (2) ['name', 'Employee']
      1
      : 
      (2) ['age', 27]
      2
      : 
      (2) ['email', 'tiezzz@gmail.com']
      length
      : 
      3
      [[Prototype]]
      : 
      Array(0)
       
       COPYING OBJECTS: OBJECT.ASSIGN && SPREAD OPERATOR:

     both are used to copy objects but their way of writting is :
     
     
     let obj1 = {
     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com",
    }
     
    for(let keys in obj){
      
    console.log(keys , obj[keys]);   
};

     spread operator:

     let new-Obj = {...obj1};

     Object.assign:

     let newObjs = Object.assign( { } , obj1) ;

     here {} represents empty obj (which is created)and obj1 which is copied. 
     empty obj can be given some data in it if we want so that it can have some other properties along with properties of obj1   

        DEEP COPY:
        it is the method in which object is converted into a string and then converted back into its original state.THIS IS DONE because it may be nested and when we copy it through spread optertor it will pass the object contained in the object as reference which will change when we change its copy.

        HOW IT DONE:
 
        let obj1 = {

     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com",

     location:{

     city: "lahore"
      house : "xyz"

     },
    
     };
   
     let newobject = JSON.parse(JSON.stringify(obj1))
     
     first we do JSON.stringify(obj1) to convert it to string then JSON.parse( ) to convert it back and lastly store it in a variable or newobj.THIS IS USEFUL because string eleminates the concept of referneces which is why it becomes a deep clone.
     

     OPTIONAL CHAINING && COMPUTED PROFERTITIES:

     OPTIONAL CHAINING:
     means to check if it exist or not. if it exists then print it or give it else don,t give an error .FROM which undefined will come.

     HOW ITS WRITTEN:

     let obj1 = {
     
     bio:{
        name: "Employee",
        age:27,
        emails:"tiezzz@gmail.com",
        
        },
     
     };

     obj?.bio?.name

     out:
     "Employee"


     let obj1 = {
     
     bio:{
        names: "Employee",
        age:27,
        emails:"tiezzz@gmail.com",
        
        },
     
     };

     obj1?.bio?.name
     
     out:
     undefined


     COMPUTED PROFERTITIES:
     means you have an object and a variable and you want the obj to make something from that variable.
     
     EXP:
     let role = "admin" 
     
     (this is what u want to be made something in obj then you add
     [] in place where u want it and write the variable and give 
     its own value in the obj doing this will replace role with "admin" and be made 
     a propertity of obj )

     let obj1 = {

     name: "Employee",
     age:27,
     email:"tiezzz@gmail.com",
     [role] : "Employee"

     location:{

     city: "lahore"
      house : "xyz"

     },
    
     };






*/

    

