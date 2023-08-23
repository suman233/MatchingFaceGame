const cards=document.querySelectorAll(".card")
console.log(cards);

let isFlipped = false
let firstCard;
let secondCard;

cards.forEach(card=>card.addEventListener("click", flip))
function flip(){
    // console.log("card flipped"); 
    // console.log(this);
    this.classList.add('flip')
    if(!isFlipped){
        isFlipped=true
        firstCard=this
    }
    else{
        secondCard=this
        check()
    }
}

function check(){
    firstCard.dataset.image === secondCard.dataset.image?success():fail()
}
function success(){
    firstCard.removeEventListener('click',flip)
    secondCard.removeEventListener('click',flip)
    rest()
}

function fail(){
    setTimeout(()=>{
        // firstCard.removeEventListener('click',flip)
        // secondCard.removeEventListener('click',flip)
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        rest();
    },1000)
}

function rest(){
    isFlipped=false
    firstCard=null
    secondCard=null
}
// function restart(){
//     // document.getElementById(".card").reset();
//     document.getElementsByClassName('card').addEventListener('click', flip).reset()
// }
function start(){
    cards.forEach(card=>card.addEventListener("click", flip))
    flip()
    // const resetBtns=document.querySelector('.restart-btn');
    // for (var i = 0, len = cards.length; i < len; ++i
    //     ) {
    //         let cardImg=Math.floor((i+2)* Math.random()) + 1
    //         while (!Array.from(new Set([...firstCards,...secondCards])).includes(`img
    //         ${cardImg}`)){
    //             cardImg=Math.floor((len* Math.random())) + 1
    //             };
    //             cards[i].innerHTML=`<div class="front"><span>${cardImg}</span></
    //             div><div class="back"></div>`
    //             cards[i].setAttribute('data-image',`${cardImg}`)
    //             setTimeout(() => {
    //                 cards[i].style['backgroundImage']='url("./assets/images/'+ `${cardImg
    //                     }`+'".jpg)'},50*(i));
    //                     });
}


// function reset(){
//     for (let i in cards) {
//         const element = document.getElementsByClassName(`card${i}`)
//         element.addEventListener("click", flip, false);
//         console.log(`${element}: ${cards[i]}`)
//         // element.setAttribute("data-image", `${cards[i]}`);
//         };
// }
function reset(){
    cards.forEach(card=>card.classList.remove('flip'))
    shuffle()
}

const resetButton = document.getElementById('restart')
resetButton.addEventListener('click', reset)

function shuffle() {
    cards.forEach(card=>{
        let randomIndex=Math.floor((Math.random()*16));
        // card.style['order']=randomIndex+25%4*(-3)+75
        card.style.order = randomIndex;
    })
}
// (function shuffle() {
//     cards.forEach(card=>{
//         let randomIndex=Math.floor((Math.random()*16));
//         // card.style['order']=randomIndex+25%4*(-3)+75
//         card.style.order = randomIndex;
//     })
// })();