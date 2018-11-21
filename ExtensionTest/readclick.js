window.onload = function () {
	// console.log("sina is good boy");
	var myVar = setInterval(myTimer, 3000);
	var burstHistory = [];
	var currentBurst = 666;
	// if (document.getElementsByClassName("crash-row")[1].children[0].innerHTML) {
	// 	currentBurst = document.getElementsByClassName("crash-row")[1].children[0].innerHTML;
	// }

	function myTimer() {
		var mablagh = document.getElementsByClassName("game-amount")[0].value;
		var zarib = document.getElementsByClassName("cashout-amount")[0].value;
		console.log("mablagh: " + mablagh + "    zarib: " + zarib + "   lastBurst: " + currentBurst);
		var newBurst = document.getElementsByClassName("crash-row")[1].children[0].innerHTML;
		var saveAlready = true;
		if (newBurst != currentBurst) {
			burstHistory.push(newBurst);
			console.log(burstHistory);
			currentBurst = newBurst;
			saveAlready = false;
		}

		// Save every burst history every 100 entry
		if (burstHistory.length % 50 == 0 && saveAlready == false) {
			var textDoc = document.createElement('a');
			textDoc.href = 'data:attachment/text,' + encodeURI(burstHistory);
			textDoc.target = '_blank';
			textDoc.download = 'myFile.txt';
			textDoc.click();
			saveAlready = true;
		}


	}
}
