// Clock created with hands. To make them Move around:-

setInterval(setDate,1000)

const secondHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    // console.log(sec + '----')
    const secondsToDegree = ((sec / 60) * 360) + 90
    // console.log(secondsToDegree)
    
    secondHand.style.transform = `rotate(${secondsToDegree}deg)`


    const mins = now.getMinutes()
    const minsToDegree = ((mins / 60) * 360) + 90
    minHand.style.transform = `rotate(${minsToDegree}deg)`

    const hours = now.getHours()
    const hoursToDegree = ((mins / 60) * 12) + 90
    hourHand.style.transform = `rotate(${hoursToDegree}deg)`
}



// let clock = document.querySelector('.clock')
// function clockHTML(){    
    
//     return `<div class="hand hour-hand"></div>
//     <div class="hand min-hand"></div>
//     <div class="hand sec-hand"></div>
//     <div class="number number1">1</div>
//     <div class="number number2">2</div>
//     <div class="number number3">3</div>
//     <div class="number number4">4</div>
//     <div class="number number5">5</div>
//     <div class="number number6">6</div>
//     <div class="number number7">7</div>
//     <div class="number number8">8</div>
//     <div class="number number9">9</div>
//     <div class="number number10">10</div>
//     <div class="number number11">11</div>
//     <div class="number number12">12</div>`
// }
// clock.innerHTML = clockHTML.join("")