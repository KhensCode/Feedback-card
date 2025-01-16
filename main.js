function rate(value) {
    var notSatisfied = document.getElementById("not-satisfied");
    var verySatisfied = document.getElementById("very-satisfied");
    var nextBtn = document.getElementById("nextBtn");

    if (value >= 1 && value <= 3) {
        notSatisfied.classList.add("active");
        verySatisfied.classList.remove("active");
        nextBtn.style.display = "block";

    } else if (value >= 4 && value <= 5) {
        notSatisfied.classList.remove("active");
        verySatisfied.classList.add("active");
        nextBtn.style.display = "block";
    }
}
var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');


function nextCard() {
    card1.style.display = 'none';
    card2.style.display = 'block';
   
    
}
function prevBtn() {
    card1.style.display = 'block';
    card2.style.display = 'none';

}
function nextCard2(){
    card3.style.display = 'none';
}
function prevBtn1(){
    card3.style.display ='none';
    card2.style.display = 'block';
}
function nextCard1() {
    card2.style.display = 'none';
    card3.style.display = 'block';
}
