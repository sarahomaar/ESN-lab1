let handler={
    set(obj,prop,value){
        if(prop=="name"){
            if(value.length==7){
                obj[prop]=value;
            }else{
                throw"Name must be 7 char";
            }
        }
        if(prop=="address"){
            if(value=="string"){
                obj[prop]=value;
            }else{
                throw"address must be string";
            }
        }
        if(prop=="age"){
            if(value=="number"&& value>25 && value<60){
                obj[prop]=value;
            }else{
                throw"age must be num and betn 25&60";
            }
        }
    },
    get(obj,prop){
        if(prop in obj){
            throw "this prop not exit${prop} ";
         
        }else{
            return obj[prop];
        }
    },
};
let obj = {
    name: "sarah omar", address:"nasr city cairo",age:23
}
let objProxy= new Proxy( obj, handler);
console.log(objProxy);
console.log(objProxy.n);

//2/////////////
class shapes {

    constructor( height ){
this.height=height;
    }
    area(){}
 perimeter(){}
 tostring(){
    console.log(`${this.constructor.name} Area=${this.area()} \n${this.constructor.name} permieter=${this.perimeter()}`)
 }
}

class square extends shapes{
    constructor(height){
        super(height);
    }
    area(){
        return this.height*this.height;
    }
    perimeter(){
        return 4 * this.height;
    }
  
}
class rectangle extends shapes{
    constructor(height,weight){

        super(height);
        this.weight=weight;

    }
    area(){
        return this.height*this.weight;
    }
    perimeter(){
        return 2 *(this.height + this.weight);
    }
}
class circle extends shapes{
    constructor(height){
        super(height)
    }
  area(){
    return Math.PI* this.height* this.height;
  }
  perimeter(){
    return 2* Math.PI*this.height;
  }
}
let s= new square(10);
let r = new rectangle(5,10);
let c=new circle(5);
 console.log( s.area());
 console.log( s.perimeter());
 console.log( r.area());
 console.log( r.perimeter());
 console.log( c.area());
 console.log(c.perimeter());

//  console.log(`${this.constructor.name}area=${this.area()}\n${this.constructor.name}perimeter=${this.perimeter()}`);
/////3
function* fib1(e){
    let m=1;
    let n=1;
     if (e>=1)
         yield m;
    if (e>=2)
        yield n;
    for (let i=2; i<e; i++){
        let sum =m+n 
        m=n;
        n=sum;
        yieldsum;
    }
    
}
let it1 =fib1(8);
 console.log(it1.next());
 console.log(it1.next());
 console.log(it1.next());
 console.log(it1.next());
 console.log(it1.next());
 console.log(it1.next());
 console.log(it1.next());
 console.log(it1.next());
    
    console.log(it1.next());

//////4
userNameGroupByLocation[Symbol.iterator]=function(){
    const citykeys=object.keys(this);
    let cityIndex=0;
    let userIndex=0;
    return{
        next: () =>{
            if( cityIndex> citykeys.length-1){
                return{
                    value:undefined,
                    done:true,
                };
            }
            const users =this[citykeys[cityIndex]];
            const user=users[userIndex];
            const isLastUser=userIndex>=users.length-1;
            userIndex++;
if (isLastUser){
    userIndex=0;
    cityIndex++
}
return{
    done:false,
    value:user,
};
        },
    };
};

////////5
var fruits=["apple", "strawberry", "banana", "orange", "mango"] ;
console.log(fruits.every(function(val,idx,arr){
    return val[0]=== "string";
 }));


console.log(fruits.every(function(val,idx,arr){
   return val[0]==="a"
}));

var Ab =fruits.filter((val,idx,arr)=>{
    return val[0]==="a"||val[0]==="b";
    
});
console.log ( Ab);