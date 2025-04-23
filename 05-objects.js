const snacks ={
    name : "Sneakers",
    isSugerFree : false,
    "+isHealthy" : false,
    eatSnacks : function () {
        console.log("I'm eating snacks " + this.name)
    }
};

console.log(snacks);

snacks.name = "KinderJoy";

snacks.eatSnacks();

// console.log(snacks.name)

// console.log(snacks["+isHealthy"]);

// Create Object using Classes 

class Snacks {
constructor(name,isSugarFree){
    this.name = name;
    this.isSugarFree= isSugarFree;
}
    eatSnack (){
        console.log("I'm eating " +this.name);
    }

}


const biscuits = new Snacks("Good Day", false);

console.log(biscuits.name);

biscuits.eatSnack();

console.log(biscuits["isSugarFree"]);