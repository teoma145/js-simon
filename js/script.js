let numeripc= 5
let arraynumeripc =[]
let numeritotali= 100;
let numeriel = document.getElementById('numeridelpc')
let timeout = setInterval(addnone,5000)
let elutente = document.getElementById('numeriutente')
let timeout2 = setInterval(removenone,5500)
let btnel = document.getElementById('btnsend')

function addnone(){
    numeriel.classList.add("d-none")
}
function removenone(){
    elutente.classList.remove("d-none")
}

for(let i=0;i < numeripc;i++){
    let randomnumber = GetRandomnumber(1,numeritotali)
    arraynumeripc.push(randomnumber)
    numeriel.innerHTML =`ricorda questi numeri ${arraynumeripc}`
}

btnel.addEventListener('click',function(){
    let inpututente = elutente.querySelectorAll('input');
    let valoriInput = [];
    for (let i = 0; i < inpututente.length; i++) {
    valoriInput.push(parseInt(inpututente[i].value));
    console.log(valoriInput)
}
 arraynumeriuguali=[]
 
 for (let x=0; x<valoriInput.length;x++){
    if(arraynumeripc.includes(valoriInput[x])){
        arraynumeriuguali.push(valoriInput[x])
    }
    
}
 if(arraynumeriuguali.length>0){
 alert(`Hai indovinato questi numeri:${arraynumeriuguali}`)
 location.reload();
 }
 else{
    alert(`NON HAI INDOVINATO NESSUN NUMERO!!!`)
    location.reload();
}
})


function GetRandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }