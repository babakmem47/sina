window.onload = function () {
    // console.log("sina is good boy");
    var myVar = setInterval(myTimer, 3000);
    var burstHistory = [];
    var currentBurst = 666;
    var looseCount = 0;
    var zarib = 1.40;
    var zararTaInja = 0;
    var wantedProfit = 10;
    var mablagh_Start = 26;// =  Math.round((zararTaInja + wantedProfit) / (zarib - 1));;
    var mablagh = mablagh_Start;
    var playing = false;
    var firstTime = true;
    document.getElementsByClassName("cashout-amount")[0].value = zarib;

    // if (document.getElementsByClassName("crash-row")[1].children[0].innerHTML) {
    // 	currentBurst = document.getElementsByClassName("crash-row")[1].children[0].innerHTML;
    // }

    function myTimer() {
        mablagh = document.getElementsByClassName("game-amount")[0].value;
        //var zarib = document.getElementsByClassName("cashout-amount")[0].value;
        // console.log("mablagh: " + mablagh + "    zarib: " + zarib + "   lastBurst: " + currentBurst);
        var newBurst = document.getElementsByClassName("crash-row")[1].children[0].innerHTML;
        var saveAlready = true;
        if (newBurst != currentBurst) {
            burstHistory.push(newBurst);
            console.log(burstHistory);
            currentBurst = newBurst;
            saveAlready = false;
            if (playing) {
                if (zarib > currentBurst) {  // loose
                    looseCount++;
                    zararTaInja = zararTaInja + mablagh;
                    if (looseCount >= 6) {
                        clearInterval(myVar);
                    }
                    else {
                        mablagh = Math.round((zararTaInja + wantedProfit) / (zarib - 1));
                    }

                    firstTime = false;
                }
                else {                      // win
                    mablagh = mablagh_Start;
                    looseCount = 0;
                    zararTaInja = 0;
                }
                console.log("mablagh: " + mablagh + "    zararTaInja: " + zararTaInja + "   lastBurst: " + currentBurst + "   looseCount: " + looseCount );
                document.getElementsByClassName("game-amount")[0].value = mablagh;
                // var betButton = document.getElementsByClassName("place-bet")[0];
                // betButton.click();
            }
            else if (firstTime) {
                document.getElementsByClassName("game-amount")[0].value = mablagh_Start;
                document.getElementsByClassName("cashout-amount")[0].value = zarib;
                // var betButton = document.getElementsByClassName("place-bet")[0];
                // betButton.click();
                console.log("First Time: "+ "mablagh: " + mablagh + "    zararTaInja: " + zararTaInja + "   lastBurst: " + currentBurst + "   looseCount: " + looseCount );
                
                playing = true;
                firstTime = true;
            }

        }

        // Save every burst history every 100 entry
        if (burstHistory.length % 25 == 0 && saveAlready == false) {
            var textDoc = document.createElement('a');
            textDoc.href = 'data:attachment/text,' + encodeURI(burstHistory);
            textDoc.target = '_blank';
            
            // get a new date (locale machine date time)
            var date = new Date();
            // get the date as a string
            var n = date.toDateString();
            // get the time as a string
            var time = date.toLocaleTimeString();

            // log the date in the browser console
            //console.log('date:', n);
            // log the time in the browser console
            //console.log('time:', time);

            textDoc.download = date + " " + time + " " + burstHistory.length;
            textDoc.click();
            saveAlready = true;
        }


    }
}
