window.onload = function () {
    // console.log("sina is good boy");
    var myVar = setInterval(myTimer, 3000);
    var burstHistory = [];
    var currentBurst = 666;
    var looseCount = 0;
    var mablagh = 10;
    var zarib = 3.00;
    var playing = false;
    document.getElementsByClassName("cashout-amount")[0].value = 3.00;

    // if (document.getElementsByClassName("crash-row")[1].children[0].innerHTML) {
    // 	currentBurst = document.getElementsByClassName("crash-row")[1].children[0].innerHTML;
    // }

    function myTimer() {
        //var mablagh = document.getElementsByClassName("game-amount")[0].value;
        var zarib = document.getElementsByClassName("cashout-amount")[0].value;
        console.log("mablagh: " + mablagh + "    zarib: " + zarib + "   lastBurst: " + currentBurst);
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
                    if (looseCount == 1) {
                        mablagh = 20;
                    }
                    else if (looseCount == 2) {
                        mablagh = 40;
                    }
                    else if (looseCount == 3) {
                        mablagh = 80;
                    }
                    else if (looseCount == 4) {
                        mablagh = 160;
                    }
                    else if (looseCount == 5) {
                        mablagh = 320;
                    }
                    else if (looseCount == 6) {
                        mablagh = 640;
                    }
                    else if (looseCount == 7) {
                        mablagh = 1280;
                    }
                    else if (looseCount == 8) {
                        mablagh = 2560;
                    }
                    else if (looseCount == 9) {
                        mablagh = 5120;
                    }
                    else if (looseCount == 10) {
                        mablagh = 10240;                        
                    }
                    else if (looseCount == 11) {
                        mablagh = 10;
                    }
                    
                }
                else {                      // win
                    mablagh = 10;
                    looseCount = 0;
                }
                document.getElementsByClassName("game-amount")[0].value = mablagh;
                var betButton = document.getElementsByClassName("place-bet")[0];
                betButton.click();
            }
            else {
                document.getElementsByClassName("game-amount")[0].value = 10;
                var betButton = document.getElementsByClassName("place-bet")[0];
                betButton.click();
                playing = true;
            }

        }

        // Save every burst history every 100 entry
        if (burstHistory.length % 50 == 0 && saveAlready == false) {
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
