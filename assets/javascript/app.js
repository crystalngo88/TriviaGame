var answers = ["tallahassee", "atlanta", "lansing", "madison", "jeffersonCity", "boise", "montpelier", "lincoln", "olympia", "santaFe"]

window.onload = function(){
    $("#start").on("click", function(){
        startTimer();
    })
    // timer--; // TODO: Is there a reason why this timer is still here? Doesn't seem to have been declared anywhere nor is used anywhere else
};

var timeLeft = 120;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;

function startTimer() {
    intervalID = setInterval(count, 1000);
    $("#timeLeft").text(timeLeft);
    $("#buttons").hide()
    $("#questions").show()
}

function count(){
    timeLeft--;
    $("#timeLeft").text(timeLeft);
    if(timeLeft === 0){
        clearInterval(intervalID);
        $("#timer").hide()
        $("#questions").hide()
        $("#end").show()
        $("#correct").text(correct)
        $("#wrong").text(wrong)
        $("#unanswered").text(unanswered)
    }
}

function gameOver(){
    clearInterval(intervalID);
        $("#timer").hide()
        $("#questions").hide()
        $("#end").show()
        $("#correct").text(correct)
        $("#wrong").text(wrong)
        $("#unanswered").text(unanswered)
}

$(document).on('click', '#submit', function(event){
    event.preventDefault();

    for (let i = 0; i < answers.length; i++) {

        // debugger;
        if($(`input[name=q${i}]:checked`).attr("ans") == answers[i]){
            correct++;
            // unanswered--;
        } 
        else if($(`input[name=q${i}]:checked`).length == 0){
            unanswered++;
        }
        else {    // TODO: Incorrect syntax- look at syntax for line 40 and compare it to this. 
            wrong++;
            // unanswered--;
        }
    }
     gameOver();
})
