var computerArray = [];
var userArray = [];
var selectionsAreAllowed = false;
var level = 0;


//---------------------------function to add a random number

function addToSequence() {
    var newRandomNumber = Math.floor((Math.random() * 4) + 1);
    computerArray.push(newRandomNumber);
    level += 1;
    console.log("level:" + level);
    console.log("Generating new random number " + newRandomNumber);
    console.log("new sequence: " + computerArray);
    playArrayThenAllowResponse();
}

//-----------------------------function to play the computer array

function playComputerArray(j, delay) {
    setTimeout(function () {
        lightUpSquare(computerArray[j]);
    }, delay);
}

//--------------------------function plays computer array and then allows user to respond

function playArrayThenAllowResponse() {
    userArray = [];
    selectionsAreAllowed = false;
    for (var i = 0; i < computerArray.length; i++) {
        playComputerArray(i, (1500 + (i * 1500)));
        if (i === computerArray.length - 1) {       //user can press buttons once computer array finishes playing
            setTimeout(function () {
                selectionsAreAllowed = true;
            }, 1700 + (i * 1700))
        }
    }
}


//------------------------------------------------------------checks if correct or incorrect

function playerInput(squareColor) {
    if (selectionsAreAllowed) {
        userArray.push(squareColor);
        if (userArray.length == computerArray.length) {
            selectionsAreAllowed = false;
            var correct = true;
            for (var k = 0; k < userArray.length; k++) {
                if (userArray[k] !== computerArray[k]) {
                    correct = false;
                }
            }
            if (correct) {
                console.log("great job picking those colors");
                weHaveAWinner();
            } else {
                console.log('you are wrong');
                incorrect();
            }
        }
    }
}


//---------------------------------------------------click functions for each square


$('#red1').click(function () {
    if (selectionsAreAllowed) {
        lightUpSquare(1);
        playerInput(1);
    }
});
$('#blue2').click(function () {
    if (selectionsAreAllowed) {
        lightUpSquare(2);
        playerInput(2);
    }
});
$('#green3').click(function () {
    if (selectionsAreAllowed) {
        lightUpSquare(3);
        playerInput(3);
    }
});
$('#yellow4').click(function () {
    if (selectionsAreAllowed) {
        lightUpSquare(4);
        playerInput(4);
    }
});

//-----------------------------------------------animations for each square


function lightUpSquare(squareColor) {
    switch (squareColor) {
        case 1:
            $('#red1').fadeTo('', 0.9).fadeTo('', 0.3);
            var sound = new Audio('audio/cow-1.m4a');
            sound.play();
            break;
        case 2:
            $('#blue2').fadeTo('', 0.9).fadeTo('', 0.3);
            var sound = new Audio('audio/cow-2.m4a');
            sound.play();
            break;
        case 3:
            $('#green3').fadeTo('', 0.9).fadeTo('', 0.3);
            var sound = new Audio('audio/cow-3.m4a');
            sound.play();
            break;
        case 4:
            $('#yellow4').fadeTo('', 0.9).fadeTo('', 0.3);
            var sound = new Audio('audio/cow-4.m4a');
            sound.play();
            break;
    }
}



//---------------------------------------function for player winning game

function winner() {
    var sound = new Audio('audio/applause.mp3');
    sound.play();
    $('#red1').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#red1').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#red1').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#red1').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#red1').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#blue2').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#blue2').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#blue2').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#blue2').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#blue2').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#green3').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#green3').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#green3').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#green3').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#green3').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#yellow4').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#yellow4').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#yellow4').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#yellow4').fadeTo('', 0.9).fadeTo('', 0.3);
    $('#yellow4').fadeTo('', 0.9).fadeTo('', 0.3);
}

//---------------------starts oregon trail music one page loads

$('document').ready(function () {
    var sound = new Audio('audio/the-oregon-trail.mp3');
    sound.play();
    sound.loop = true;
    $('#container').addClass('applause');
});

//----------------------to reset the array and level...resets the game

function playOrReset() {
    setTimeout(function () {
        level = 0;
        computerArray = [];
        console.log("reset sequence");
        addToSequence();
    },2000)
}

//------------------------ click function for play/reset button

$('#play-reset').click(function () {
    playOrReset();
    $('#container').removeClass('applause');
    $("#container").removeClass('boo');
    $('body').removeClass('red');
    $('#red1').addClass('cow1');
    $('#blue2').addClass('cow2');
    $('#green3').addClass('cow3');
    $('#yellow4').addClass('cow4');
});

//-------------------------------------------for incorrect

function incorrect() {
    var sound = new Audio('audio/booing.mp3');
    sound.play();
    $('body').addClass('red');
    $('#red1').removeClass('cow1');
    $('#blue2').removeClass('cow2');
    $('#green3').removeClass('cow3');
    $('#yellow4').removeClass('cow4');
    $('#container').addClass('boo');
}

//-----------------------------------------for a winner

function weHaveAWinner() {
    setTimeout(function () {
        if (level === 5) {
            winner();
        } else {
            addToSequence();
        }
    });
}