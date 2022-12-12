///1
let a = 5,
  b = 6;
[a, b] = [b, a];
console.log(a, b);
/////2
let arr =[2,20,40,13,1];
function max(Arr){
    return Math.max(...Arr);
}
function min(Arr){
    return Math.min(...Arr);
} 
var x = max(arr);
console.log(x);
var y = min(arr);
console.log(y);


// let arr=[];
// let value;
// for(let index=0 ;index < 5 ; index++){
//     value= parseInt(prompt('Enter Number:${index1}'));
//     arr[index]=value;
//     console.log(arr[index]);
// }
// function get_max_min_values(...rest){ // collect 


//     console.log(rest);
//     console.log(Math.max(...rest));
//     console.log(Math.min(...rest));

   
// }
// get_max_min_values(...arr);

///////////3

 let student = {sname: "sarah", faculty  :"Bis" , university:"helwan" , grad:"A+"}

console.log(` ${student.sname} is a student 
in faculty of ${student.faculty} in university ${student.university} And his final grad is ${student.grad} `);

//4 a
let arr1= ["Egypt", "Spain", "France","Egypt"];
let arr2= ["South Africa", "Turkey", "France","Koria"];
let myset1= new Set( arr1);
let myset2 =new Set ( arr2);
let myset3= new Set();
console.log(myset1);
//b
let myset4=new Set([...myset1]);
console.log(myset4);
//
for( let i of myset1)
 {
     console.log(i)
 }
//c
let lenghtofArr=arr1.length;
let sizeofArr= myset1.size;
repeatedvalue= lenghtofArr - sizeofArr;
console.log(`  Repeated values ${repeatedvalue}`);
//d 
//e 
var A = [...myset1, ...myset2];
console.log(A);



//5
let m =new Map();
m.set("Sarah",[{
    coursename:"js",
    grade:"Excellent"
},
{
    coursename:"jquery",
    grade:"good"
},
{
    coursename:"react",
    grade:"v.good"
},
{
    coursename:"Esnext",
    grade:"good"
},
{
    coursename:"nodejs",
    grade:"v.good"
}

]);
for (let [key,val] of m){
    for(let i of val)
    console.log(`name:${key}, courses:${i.coursename} ,grade:${i.grade}`)
}


// let GradArr=[
//     ["Sarah",{
//         js:"Excellent",
//         Jquery:"Good",
//         React:"V.Good",
//         ESNext:"Good",
//         NodeJS:"V.Good"
//     }
//     ]
// ];
// var GradMap=new Map(GradArr);
// for (let[key,val] of GradMap){
//     console.log(`key':${key}, value:${val.js}`);
// }

let stdArr=[
    ["Ahmed",{ js:"Excellent",
            Jquery:"Good",
            React:"V.Good",
            ESNext:"Good",
            NodeJS:"V.Good" }],
            ["sarah" ,{ js:"Excellent",
            Jquery:"Good",
            React:"V.Good",
            ESNext:"Good",
            NodeJS:"V.Good"}],
            ["sarah" ,{ js:"Excellent",
            Jquery:"Good",
            React:"V.Good",
            ESNext:"Good",
            NodeJS:"V.Good"}]

];
