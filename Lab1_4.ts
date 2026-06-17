let gross: number = 50000;
let rate: number = 7;
let paid: number=3500;
console.log("Gross Income $%d",gross);
console.log("Tax Rate: %d%",rate);
console.log("Tex paid: %d",paid);
let tex: number= gross*0.07;
let Net: number= gross-tex;
console.log("Net Income after Tax: %d",Net);