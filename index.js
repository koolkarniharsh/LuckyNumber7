function onReset(){
    let imageSrc = "images/dice6.png";
    document.querySelector(".img1").setAttribute("src",imageSrc);
    document.querySelector(".img2").setAttribute("src",imageSrc);
    document.querySelector(".container").firstElementChild.innerHTML = "Try your Luck!";

    let buttons = document.querySelectorAll(".button-hover");
    buttons[0].classList.remove("disabled");
    buttons[1].classList.remove("disabled");
    buttons[2].classList.remove("disabled");
}

function onRoll(choice){
    toggleButtons(choice);
    let value1 = onRollDie("img1");
    let value2 = onRollDie("img2");
    let total = value1 + value2;
    if(choice === -1 && total < 7){
        gameOver(1);
    }else if(choice === 0 && total === 7){
        gameOver(1);
    }else if(choice === 1 && total > 7){
        gameOver(1);
    }else{
        gameOver(0);
    }
}

function toggleButtons(choice){
    let buttons = document.querySelectorAll(".button-hover");
    switch (choice) {
        case 1: buttons[1].classList.add("disabled");
                 buttons[2].classList.add("disabled");
                 break;
        case 0:  buttons[0].classList.add("disabled");
                 buttons[2].classList.add("disabled");
                 break;
        case -1:  buttons[0].classList.add("disabled");
                 buttons[1].classList.add("disabled");
                 break;
    }
}

function onRollDie(classOfImage){
    let value = Math.ceil(Math.random() * 6);
    let imageSrc= "images/dice"+value+".png";
    document.querySelector("."+classOfImage).setAttribute("src",imageSrc);
    return value;
}

function gameOver(status){
    if(status){
        document.querySelector(".container").firstElementChild.innerHTML = ("🏳 You win! 🏳")
    }else {
        document.querySelector(".container").firstElementChild.innerHTML = ("Hard Luck")
    }
}
