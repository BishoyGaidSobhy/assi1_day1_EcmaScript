//////////let and const  hosting ///////////
// console.log(x) //und
//console.log(w)//error 
// var age=30;
// var x=77;
// function scope()
// {
 
//      z=25; //global 
// }
// scope()
// console.log(z)
// k="sjhhkhkkh"
// for(var i=0;i<5;i++)
// {
//     console.log("iti");
// }
// console.log(i);/// 5
// if(true){
//     var username="ali"
// }
// console.log(username)
// for(let j=0;j<5;j++)
// {
//     console.log("aswan")
// }
//console.log(j)
// let w=33
// console.log(w);
// function sum()
// {
//     let num=20;
// }
// sum()
// console.log(num)
// console.log(user)
// const user="ahmed";
//IIFE
// (function()
// {
//     var names="sayed"
//     console.log(names)
// })();
// console.log(names);
// var x=30;
// var x=85;
// let z=30;
// let z=30;
/*
1=>JavaScript has global scope and function scope.
2=>Variables declared and initialized outside any function become global variables.
3=>Variables declared and initialized inside function becomes function variables scope to that function.
5=>Variables declared without var keyword inside any function becomes global  variables automatically.
7=>Global variables can be accessed and modified anywhere in the program.
8=>function variables cannot be accessed outside the function declaration.
9=>Global variable and function variable can have same name without affecting each other.
 */

/////////////////Destruct///////////////////////
// let obj={
//     user:"ali",
//     age:30,
//     address:"aswan",
    
// }
// let add;
// console.log(add)//
// let username=obj.user;
// let{user,age,address,jobTitle="not exits"}=obj;

// let{user:titleName}=obj;///destruct
// let arr=[10,20,30,40];
// let[a,b]=arr;

// console.log(titleName)

/////////////rest prams and spreed ope//////////////
// let arr=[10,20,30,40,50];
// let arr2=[70,80,90,100];
// let arr3=[...arr,"ali","nada","moh","boshy",...arr2]

// let copy=[...arr];
// copy.push(55555)
/////arr3=[10,20,30,40,50,ali,nda,moh,boshy,70,80,90,100]

// function sum(x,y,...rest)
// {
//     console.log(x)
//     console.log(rest)
//     let sum=0;
//     let x= [].slice.call(arguments)
//
//    for( let tot of x)
//    {    
//        sum+=tot;
//    }

//    for(let index in arr)
//    {
//        sum+=arr[index]
//    }
//    for(let i=0;i<x.length;i++)
//    {
//        sum+=x[i];
//    }

//     console.log(sum)
// }

// sum(10,20,30,50,44554,[554,88],"lalsl")

// console.log(Math.max(...arr))

/////////////////////////////////
let user="negm";
let age="25";
let addres="aswan"

// console.log("name is"+user+"")
/////////////back tic//////////////
// console.log(`name is ${user} my age is => ${age}`)
//////////////defulat prams//////////////


// function sum(x,y=8000)
// {
//    // y=y||10
 
//     return x+y;
// }


// console.log(sum(10))
// let add=(x,y)=>
// {
//     return x+y;
// }
// let add2=function(x,y)
// {
//     return x+y;
// }
// let sub=(x,y)=>x-y;



// console.log(add(10,20))
// console.log(sub(10,20))

// let obj={
//     pname:"ali",
    //arrow
    // print:function()
    // {   
    //     window.setTimeout(()=>
    //     {
    //         console.log(this)
    //     },1000)
    // }
//     print:function()
//     {
//         let self=this
//         setTimeout(function()
//         {
//             console.log(self.pname)
//         },1000)
//     }


// }


// obj.print()

// let mp=new Map();
// mp.set("name","ali")
// mp.set("age",30)
// mp.set("obj",{addres:"aswan",title:"eng"})
// mp.set("list",[10,20,3,0,5])

// console.log(mp.clear())
// {1,2,3,1,5}
// let s1=new Set([7,1,2,3,4,5,1,1,2,354])
// s1.add(5444888)
// console.log(s1.has(88888888))
// console.log(s1.delete(2))
// s1.clear()

Set.prototype.union=function(set2)
{
    let newSet=new Set();
    for(let val of set2)
    {
        newSet.add(val);
    }
    for(let val of this)
    {
        newSet.add(val)
    }

    return newSet;

    // for(let val of set2)
    // {
    //     this.add(val);
    // }
    // return this
}

Set.prototype.intersection=function(set2)
{
    let newSet=new Set();
    for(let val of set2)
    {
        if(this.has(val))
        {
            newSet.add(val)
        }
    }
    return newSet;
}


let s1=new Set([10,20,30,40]);
let s2=new Set([10,20,7,80,90,555]);

console.log(s1.intersection(s2))


