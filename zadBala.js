
$(document).ready(function () {

    

});

function Calculate() {
    try {
        var bet = document.getElementById("InitialBet").value;
        var index = document.getElementById("Index").value;
            
    } catch (error) {
        console.log("Cannot read. Error is: ", error)
    }
    
}

function AddToCalculateTable(level, bet, index, profit, loose, loosesSum, remainInterest) {
    var colorOfBet;
    var colorOfInterest;
    if (burst < 1.8)
        colorOfBet = "red";
    else
        colorOfBet = "green";

    var listDiv = document.getElementsByClassName("divRow");
    var firstDiv = listDiv[0];
    var x = "<div class='divRow'>\
                <div class='divCell'> " + level + "</div>\
                <div class='divCell' style= 'color: " + colorOfBet + "'>" + bet + "</div>\
                <div class='divCell'> " + index + "</div>\
                <div class='divCell'> " + loose + "</div>\
                <div class='divCell'> " + loosesSum + "</div>\
                <div class='divCell' style= 'color: " + colorOfInterest + "'>" + remainInterest + "</div>\
            </div>";
    $(x).insertBefore(firstDiv);
}