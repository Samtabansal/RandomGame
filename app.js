const btn = document.getElementById('input-btn');
const user = document.getElementById('input-text');
const tryagain = document.getElementById('try-again');
const correct = document.getElementById('correct');
const guess = document.getElementById('guess');
let counter = 4;
    
btn.addEventListener('click', showNum);

function showNum(){
    if(counter > 0)
    {
        calcNum();
        guess.innerHTML = `You have ${counter} guess left!`;
    
    }
    else{
        btn.disabled = true;
        guess.innerHTML = `You have no guess left!`;
        tryagain.innerHTML = "Game Over";
        showWrong();
    }
    counter--;
}

function calcNum(){
    const random = Math.floor(Math.random()*10 + 1);
    console.log(random);
    if(random == user.value){
        setTimeout(showCorrect(),3000);
        btn.disabled = true;
    }
    else{                
        setTimeout(showWrong(),3000);
    }
}

function showCorrect(){
    tryagain.style.display = 'none';
    correct.style.display = 'block';
    guess.style.display = 'none';
}

function showWrong(){
    correct.style.display = 'none';
    tryagain.style.display = 'block';
}