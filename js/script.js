let numeripc= 5
let arraynumeripc =[]
let numeritotali= 100;
let numeriel = document.getElementById('numeridelpc')
let timeout = setInterval(addnone,5000)


function addnone(){
    numeriel.classList.add("d-none")
}

for(let i=0;i < numeripc;i++){
    let randomnumber = GetRandomnumber(1,numeritotali)
    arraynumeripc.push(randomnumber)
    numeriel.innerHTML =`ricorda questi numeri ${arraynumeripc}`
}

function GetRandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }