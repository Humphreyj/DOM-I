const secondOnes = document.querySelector('#secondOnes');

let displayTime = 0;
let seconds = 0;

function timer() {
    let date = new Date();
    seconds = date.getSeconds();
    displayTime = setInterval(timer, 1000);
    secondOnes.innerHTML = displayTime;

    if(displayTime === 10) {
        clearInterval(displayTime);
        console.log(displayTime);
    }
 
}


console.log('butts');
timer();