let numeripc= 5
let arraynumeripc =[]
let numeritotali= 100;

for(let i=0;i < numeripc;i++){
    let randomnumber = GetRandomnumber(1,numeritotali)
    arraynumeripc.push(randomnumber)
    console.log(arraynumeripc)
}

function GetRandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }