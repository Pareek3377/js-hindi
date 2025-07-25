const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descriptor);

//console.log(Math.PI);
//Math.PI=3
//console.log(Math.PI);

const chai= {
    name: " ginger chai",
    price: 230,
    isAvailable:true,

    orderChai: function(){
        console.log("chai nhi bani");
        
    }

}
//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

 Object.defineProperty(chai,'name',{
    //writable: false,
    enumerable: false
}) 
//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!= 'function'){

        console.log(`${key} : ${value}`);
    }
}
