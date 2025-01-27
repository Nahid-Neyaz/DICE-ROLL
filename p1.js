//const buttonE1= document.querySelector('button');
const buttonE1=document.getElementById("roll button")
const diceE1 = document.getElementById("dice")
const rollhistoryE1= document.getElementById("roll history")

let historylist=[]

function rolldice(){
    const rollresult= Math.floor(Math.random()*6)+1

    const diceface = getdiceface(rollresult)
    // console.log(diceface)
    diceE1.innerHTML=diceface
    historylist.push(rollresult)
    updateRollhistory()
}

function updateRollhistory(){
    rollhistoryE1.innerHTML=""
    for(let i=0;i<historylist.length;i++)
    {
        const listitem = document.createElement("li")
        listitem.innerHTML=`Roll ${i+1}: <span> ${getdiceface(historylist[i])} </span>`
        rollhistoryE1.appendChild(listitem)
    }


}
function getdiceface(rollresult){
    switch(rollresult){
        case 1:
            return "&#9856"
        case 2:
            return "&#9857"
        case 3:
            return "&#9858"
        case 4:
            return "&#9859"
        case 5:
            return "&#9860"
        case 6:
            return "&#9861"
        default:
            return ""
    }
}

buttonE1.addEventListener("click",()=>{
    rolldice()
    diceE1.classList.add("roll-animation");
    setTimeout(()=>{
        diceE1.classList.remove("roll-animation")
    },1000)

})
