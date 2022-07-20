var randomClick = document.querySelector('.randomChange')
randomClick.addEventListener('click', randomChange)
let array = ['A','K','R','S','C']


function randomChange(){
    var currentIndex = array.length-1;
    var randomIndex =Math.floor(Math.random() * currentIndex);
    [array[currentIndex], array[randomIndex]] = [ array[randomIndex], array[currentIndex]] ;

    var text1 = document.querySelector('.text1');
    var text2 = document.querySelector('.text2');
    var text3 = document.querySelector('.text3');
    var text4 = document.querySelector('.text4');
    var text5 = document.querySelector('.text5');
    text1.innerText = array[0]
    text2.innerText = array[1]
    text3.innerText = array[2]
    text4.innerText = array[3]
    text5.innerText = array[4]
