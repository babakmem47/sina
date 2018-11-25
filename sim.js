var sarmayeh = 10480;
var mablagh = 2;
var zarib = 1.40;
var looseCount = 0;
var playing = false;
var donbalehZarib_1_3 = [3, 13, 56, 242, 1048, 4541, 19677];
var zarib_Avalieh = Math.floor(mablagh/3);
var zararTaInja = 0;

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

    // $("#btn1").click(function () {
    //     var listDiv = document.getElementsByClassName("divRow");
    //     var firstDiv = listDiv[0];
    //     var x = "<div class='divRow'>\
    //                 <div class='divCell'>x</div>\
    //                 <div class='divCell'>y</div>\
    //                 <div class='divCell'>z</div>\
    //                 <div class='divCell'>vv</div>\
    //             </div>";
    //     $(x).insertBefore(firstDiv);

    // });

    function startCounter(value) {
        var $div = $('.counter');
        $div.prop('Counter', 0).animate({
            Counter: value
        }, {
                duration: 200,
                //easing: 'linear',
                step: function (now) {
                    $div.text(parseFloat(now).toFixed(2));
                },
                complete: function () {
                    $div.removeProp('Counter');

                    /////////////////// [Calculate variables(result) before show in table] ////////////
                    var lastBurst = $div.text();
                    var sud = "-";
                    var zarar = "-";
                    if (playing) {
                        sud = 0;
                        zarar = 0;                       
                        if (zarib > lastBurst) {  // loose
                            sud = "-";
                            zarar = mablagh;
                            sarmayeh = sarmayeh - zarar;
                            looseCount++;
                            zararTaInja += zarar;
                        }
                        else {                  // win
                            sud = Math.ceil(mablagh * zarib - mablagh);
                            zarar = "-";
                            sarmayeh = sarmayeh + sud;
                            looseCount = 0;
                            zararTaInja = 0;
                        }
                    }
                    


                    // var btn = document.getElementsByClassName("place-bet")[0];
                    // console.log(btn);

                    ///////////////////// [Send result for showing to user] ////////////////////////// 
                    if (playing)
                        AddToHistoryTable(lastBurst, zarib, mablagh, sud, zarar, sarmayeh);
                    else 
                        AddToHistoryTable(lastBurst, "-", "-", sud, zarar, sarmayeh);

                    ///////////////////// [Decide for next match] ////////////////////////////////////
                    ////// Algorithm pesareh ///
                    playing = true;
                    if (looseCount) {   // if loose at last burst
                        var nextMablagh = Math.ceil(zararTaInja * 4.33);// (zarib_Avalieh) * donbalehZarib_1_3[looseCount];
                        if (nextMablagh <= sarmayeh)
                            mablagh = nextMablagh;
                        else
                            playing = false;                                
                    }
                    else {              // if win
                        mablagh = 4;
                    }
                    ////////////////////////
                    ////   *2 Shahram
                    // playing = true;
                    // if (looseCount) {   // if loose at last burst
                    //     var nextMablagh = mablagh*2;// (zarib_Avalieh) * donbalehZarib_1_3[looseCount];
                    //     if (nextMablagh <= sarmayeh)
                    //         mablagh = nextMablagh;
                    //     else
                    //         playing = false;                                
                    // }
                    // else {              // if win
                    //     mablagh = 2;
                    // }

                    //////////////////////////////////////////////////////////////////////////////////
                }
            });
    }

    // Only show result to user:
    function AddToHistoryTable(burst, zarib, mablagh, sud, zarar, sarmayeh) {
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
                    <div class='divCell'> " + zarar + "</div>\
                    <div class='divCell'> " + sarmayeh + "</div>\
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


    //var array = [1.02, 1.31, 1.20, 1.22, 1.40, 1.18, 0.00, 1.10, 6.12, 11.14];
    var array = [1.02,1.49,1.05,1.13,6.09,1.06,2.01,2.16,2.87,2.25,
        1.63,1.44,2.15,2.74,3.46,1.00,1.07,1.56,1.10,4.37,
        1.14,1.48,1.26,4.10,2.35,1.47,1.95,19.37,1.54,1.06,
        1.02,10.96,9.45,1.11,1.02,2.66,3.52,2.25,1.52,2.07,
        1.35,1.05,1.74,1.60,2.01,1.57,15.51,5.07,2.11,1.00,
        3.50,1.59,2.33,2.05,1.71,8.23,1.51,1.17,1.57,2.90,
        1.06,1.47,8.05,1.44,1.22,1.23,1.12,3.20,2.19,4.35,
        2.87,1.21,1.78,2.50,2.88,9.06,30.85,1.09,1.30,12.30,
        5.31,3.18,2.53,2.86,1.19,2.30,1.05,1.08,2.40,2.76,
        3.46,11.43,23.40,2.31,1.42,1.07,1.54,1.34,1.02,1.57,  // 100
        1.13,1.81,3.62,1.32,1.73,0.00,2.95,1.06,1.19,1.10,
        1.32,7.16,5.46,11.23,1.21,1.20,0.00,39.03,2.64,93.58,
        2.31,1.35,5.43,1.16,2.60,3.08,1.36,1.54,3.29,1.86,
        1.66,16.52,2.33,1.08,1.17,1.36,1.74,7.63,4.15,16.53,
        1.32,3.59,1.29,1.11,1.78,2.14,1.46,2.98,7.19,1.30,
        2.29,1.02,1.22,1.45,7.31,2.24,1.13,3.34,1.00,1.31,
        9.76,1.08,2.32,2.17,2.12,3.00,3.80,3.85,1.28,10.53,
        1.95,2.05,2.91,1.60,1.04,1.10,1.05,1.51,0.00,9.56,
        1.28,3.74,1.26,2.38,7.54,2.10,1.62,1.46,2.13,1.72,
        6.83,23.68,1.85,17.56,1.63,1.81,3.93,72.08,19.91,1.14, //200
        1.32,3.43,3.83,1.49,1.14,2.60,1.18,2.97,1.92,3.80,
        0.00,1.62,1.48,2.49,1.24,1.93,2.87,12.81,1.53,1.85,
        1.20,1.33,12.88,4.55,1.18,1.44,3.31,1.22,2.65,5.61,
        1.20,12.69,1.26,2.35,8.51,1.76,8.82,3.27,12.13,1.26,
        1.11,1.06,1.20,1.38,17.58,3.35,1.17,5.61,1.17,1.02];var burst = 0;

    for (var i = 0; i < array.length; i++) {
        burst = array[i];
        startCounter(burst);
        var div = $("div");
        div.animate({ right: '100px' }, "slow");
        div.animate({ left: '100px' }, "slow");

    }
});  // end of document.Ready

