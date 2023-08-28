const cards=document.querySelectorAll(".card")
console.log(cards);

let isFlipped = false
let firstCard;
let secondCard;
let count=0
// document.getElementsByClassName('card')=
// cards.forEach(card=>card.addEventListener("click", flip))
function flip(){
    // console.log("card flipped"); 
    // console.log(this);
    this.classList.add('flip')
    if(!isFlipped){
        isFlipped=true
        firstCard=this
    }
    else {
        secondCard=this
        check()
    }
    // else{
    //     // alert(`You won. Now restart the game agaain`)
    //     // count++
    //     alert(`Your number of trials: ${count}`)
    // }
}

function check(){
    firstCard.dataset.image === secondCard.dataset.image?success():fail()
}
function success(){
    firstCard.removeEventListener('click',flip)
    secondCard.removeEventListener('click',flip)
    successReset()
}

function fail(){
    setTimeout(()=>{
        // firstCard.removeEventListener('click',flip)
        // secondCard.removeEventListener('click',flip)
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        rest();
        alert(`Try again`)
    },500)
}
function successReset(){    
    isFlipped=false
    firstCard=null
    secondCard=null
    count=count+1
    console.log(count);
    // count===8?alert(`Congratualations!! You have won. Now Restart the game to play again`):false
    if(count=== 8){
        alert(`Congratualations!! You have won. Now Restart the game to play again`)
        cards.forEach(card=>card.addEventListener("click", flip))
        count=0
    }
    else
        false
}

function rest(){
    isFlipped=false
    firstCard=null
    secondCard=null
    // if (count===8 ){alert(`you lost`);location.reload()}
}

function start(){
    cards.forEach(card=>card.addEventListener("click", flip))
    flip()
}


function reset(){
    cards.forEach(card=>card.classList.remove('flip'))
    shuffle()
    count=0
}

const resetButton = document.getElementById('restart')
resetButton.addEventListener('click', reset)

function shuffle() {
    cards.forEach(card=>{
        let randomIndex=Math.floor((Math.random()*16));
        card.style.order = randomIndex;
    })
}
