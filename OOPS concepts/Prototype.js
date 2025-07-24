//let myName="Priyanshu "
//let myChannel="chai    "

//console.log(myName.trim().length);

let myHeroes=["thor","hulk"]

let heroPower={
    thor:"hammer",
    hulk:"gamma",

    getHulkPower:function(){
        console.log(`hulk Power is ${this.hulk}`);
    }
}
Object.prototype.Priyanshu=function(){
    console.log(`Priyanshu is present in all objects`);
    
}
heroPower.Priyanshu()
