// document.querySelector(".set").addEventListener("click", function(){
//     alert("I got clicked");
// });

function playSound(buttonName){
    switch (buttonName)
    {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "a":
            var crash = new Audio('sounds/kick-bass.mp3');
            crash.play();
            break;
        
        case "s":
            var crash = new Audio('sounds/snare.mp3');
            crash.play();
            break;    
            
        case "d":
            var crash = new Audio('sounds/tom-1.mp3');
            crash.play();
            break;

        case "j":
            var crash = new Audio('sounds/tom-2.mp3');
            crash.play();
            break;
        
        case "k":
            var crash = new Audio('sounds/tom-3.mp3');
            crash.play();
            break;

        case "l":
            var crash = new Audio('sounds/tom-4.mp3');
            crash.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
}

var arr = document.querySelectorAll(".drum");
var noOfDrums = arr.length;
for(var i=0; i<noOfDrums; i++)
{
    arr[i].addEventListener("click", function(){
        var buttonName = this.innerHTML;
        
        playSound(buttonName);
        buttonAnimation(buttonName);
    });
}

document.addEventListener("keydown", function(event){
    var k = event.key;
    //console.log("playSound is called now...");
    playSound(k);
    buttonAnimation(k);
});

function buttonAnimation(key){
    console.log("animation is called now...");
    var cN = "." + key;
    document.querySelector(cN).classList.add("pressed");

    setTimeout(function(){
        document.querySelector(cN).classList.remove("pressed");
    },100);
}