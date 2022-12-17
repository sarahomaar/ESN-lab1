
let products = document.querySelector(".username");
 fetch ("https://jsonplaceholder.typicode.com/users ").then ((data) =>{
    data.json().then ((realdata)=>{
        for ( let i=0; i< realdata.length; i++){
            let user = realdata[i].username;
            products.innerHTML+= `
            <button onclick="display(${data[i].id})">${
                realdata[i].username }</button>
            }
            
            `;
        }
    })
 })
 user();
let inf = document.querySelector(".userinf");


async function display(id){
    let info = await fetch('https://jsonplaceholder.typicode.com/posts?userId=userId  ' +id);
    let response = await info.json();
    inf.innerHTML="";
    for( let i=0 ;i<response.length;i++){
        let userinfo=response[i].tittle;
        inf.innerHTML+= ` <p>${userinfo} </p>`
    }

}
/////2

async function getProducts(){
    let data = await fetch('https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products ');
    data = await data.json();
    console.log(data);

    displayProducts(data)
    }
getProducts()
function displayProducts(data) {
    let x ; //carry object of arr

    
    for(let i=0;i<data.length;i++){

        x+= // index0+index1+index2 
        `
        <div >
            <img src="${data[i].image}" alt="image " ></img>
            <h3> ${data[i].description}</h3>
            <p>${data[i].price}</p>
            </div>
    
        `
}

 let rdata = document.getElementById("row");
 rdata.innerHTML= x ;

}