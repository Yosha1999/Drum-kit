
var drumLength = document.querySelectorAll(".drum").length;

for(var i = 0; i<drumLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){        
        var letter = this.innerHTML;
        playAudio(letter);
        buttonAnimation(letter);
    });
}

document.addEventListener('keydown', function(e){
    playAudio(e.key);
    buttonAnimation(e.key);
});

function playAudio(letter){
    switch(letter){
        case 'w' || 'W':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a' || 'A':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's' || 'S':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd' || 'D':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j' || 'J':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k' || 'K':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l' || 'L':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(letter);
    }
}


function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}
