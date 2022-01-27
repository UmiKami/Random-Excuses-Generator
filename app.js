let excuse = document.querySelector(".main-phrase")
let newExcuseBTN = document.querySelector(".changeExcuseBTN")

let who = ['The dog','My aunt','An alien','My cat', 'A rat', ''];
let action = ['ate','peed','crushed','broke', 'ruined', 'stole'];
let what = ['my homework', 'the keys', 'the car', 'my bike', 'the pot', 'the treasure'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying', 'while I was heading home', 'at the school the school entrance'];

function randIndex(list){
    let rangeEnd = list.length-1

    return Math.floor(Math.random()*rangeEnd)
}

newExcuseBTN.addEventListener("click", e =>{
    this.excuse = who[randIndex(who)] + ' ' 
    + action[randIndex(action)] + ' ' 
    + what[randIndex(what)] + ' ' 
    + when[randIndex(when)]
    excuse.innerHTML = this.excuse
})

this.excuse = who[randIndex(who)] + ' ' + action[randIndex(action)] + ' ' + what[randIndex(what)] + ' ' + when[randIndex(when)]
excuse.innerHTML = this.excuse

// console.log(this.excuse);