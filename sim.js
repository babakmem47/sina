var sarmayeh = 1048;
var mablagh = 10;
var zarib = 1.3;
var bet = false;

$(document).ready(function () {
    $("#BetButton").click(function () {
        $("#BetButton").toggleClass("btn-dark btn-warning");
    });

    $("button.toggler").click(function () {
        $me = $(this);
        $me.toggleClass('off');
        if ($me.is(".off")) {
            alert('hi');
        } else {
            alert('bye');
        }
    });

    $("#btn1").click(function () {
        var listDiv = document.getElementsByClassName("divRow");
        var firstDiv = listDiv[0];
        var x = "<div class='divRow'>\
                    <div class='divCell'>x</div>\
                    <div class='divCell'>y</div>\
                    <div class='divCell'>z</div>\
                    <div class='divCell'>vv</div>\
                </div>";
        $(x).insertBefore(firstDiv);

    });

    function startCounter(value) {
        var $div = $('.counter');
        $div.prop('Counter', 0).animate({
            Counter: value
        }, {
                duration: 2000,
                //easing: 'linear',
                step: function (now) {
                    $div.text(parseFloat(now).toFixed(2));
                },
                complete: function () {
                    $div.removeProp('Counter');
                    
                    // Calculate variables(result) before show in table
                    var sud = "-";
                    zarib = "-";
                    mablagh = "-";
                    var btn = document.getElementsByClassName("place-bet")[0];

                    // Send result for showing to user 
                    AddToHistoryTable($div.text(), zarib, mablagh, sud);
                    
                    
                }
            });
    }

    // Only show result to user:
    function AddToHistoryTable(burst, zarib, mablagh, sud) {
        var colorOfBurst;
        if (burst < 1.8)
            colorOfBurst = "red";
        else
            colorOfBurst = "green";

        var listDiv = document.getElementsByClassName("divRow");
        var firstDiv = listDiv[0];
        var x = "<div class='divRow'>\
                    <div class='divCell' style= 'color: " + colorOfBurst + "'>" + burst + "</div>\
                    <div class='divCell'> " + zarib + "</div>\
                    <div class='divCell'> " + mablagh + "</div>\
                    <div class='divCell'> " + sud + "</div>\
                </div>";
        $(x).insertBefore(firstDiv);
    }

    function ClickBet() {
        bet = !bet;
    }

    // JavaScript After Document is Ready:
    document.getElementsByClassName("top-link chips-amount")[0].innerHTML = sarmayeh + " تومان ";
    document.getElementsByClassName("game-amount")[0].value = mablagh;
    document.getElementsByClassName("cashout-amount")[0].value = zarib;
    // startCounter();


    var array = [3.92, 1.31, 6.20, 1.32, 1.10, 1.48, 0.00, 1.10, 6.12, 11.14];
    var burst = 0;

    for (var i = 0; i < array.length; i++) {
        burst = array[i];
        startCounter(burst);
        var div = $("div");
        div.animate({ right: '100px' }, "slow");
        div.animate({ left: '100px' }, "slow");

    }
});  // end of document.Ready

