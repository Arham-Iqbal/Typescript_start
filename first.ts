//types in typscript

let x:number;


let y:string;

let z:boolean;


//dont use this

let xy:any;


//safer than any

let yz:unknown;

//null is used for no value and undefined for uninitialized value

let xz:null;
let zy:undefined;


//array types

let numbers:number[];

let nme:string[];

let a:number[]=[1,2,3]

//tuples

let t:[number,number]
t=[1,2]

let t2:[string,string]
t2=["h","o"]


//enum baad mein


//functions


function print():number
{
    return 0
      
}

function sum (x:number,y:number):number
{
    return x+y
}


//interfaces and objects

let user={
    name:"Ar",
    age:15,

}

//but better to use interfaces


interface student{
    name:string,
    class:number,
    rollno:number,
    phoneno?:number
}

let Student:student={name:"ar",class:10,rollno:15}

let student2:student={name:"dvd",class:10,rollno:99}

