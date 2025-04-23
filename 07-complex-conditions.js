const bike ={
    price : 100000,
    color : "black",
    odoMeter : 10000

};

//And operator

// if (bike.price <10000 && bike.color == "black" && bike.odoMeter <10000){
//     console.log("I will consider buying that MotorBike!!!")
// }else{
//     console.log("Nah,I look somewhere else...")
// }

// OR operator

if (bike.price <10000 || bike.color == "black" || bike.odoMeter <10000){
    console.log("I will consider buying that MotorBike!!!")
}else{
    console.log("Nah,I look somewhere else...")
}
