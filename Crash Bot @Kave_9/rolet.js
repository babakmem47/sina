//algoritm
var price_alogoritm_fibonaci = true;
var price_alogoritm_randValue = false;
var price_alogoritm_double = false;
var price_algoritm_sum = false;
var price_fake_stop_algoritm = false;
//fibonaci
var fi_previous_price = 1;
var double_start_algortim = 1;
var t_coefficient = 2;//ضریب مقادیر است 1 , 10,100
var t_times = 500;//تعداد دفعات تکرار حلقه
var numberOneCount =0;
var damage = 0;
// this is the code which will be injected into a given page...
var d_price = 25;
var d_prices =25;


var t_fakeStop = 1.87;//ضریب توقف برای اولیت های حلقه
var t_forceStop = 4.01;//ضریب


var t_randValue;//آخرین ضریب ارایه شده
var t_correntValue;//ضریب درحال حاظر


//append to functions
var f_game_waiting = game_waiting;
var f_game_busted = game_busted;
var f_game_update = game_update;
var f_game_cash_out = game_cash_out;
var f_data_from_socket = data_from_socket;
var box =document.getElementsByClassName('game-controls')[0];
//elements
var t_cashoutProduct = document.getElementsByClassName('cashout-amount')[0];
var t_priceAmount = document.getElementsByClassName('game-amount')[0];
var t_setCashBtn = document.getElementsByClassName("place-bet")[0];//دکمه ثبت
var t_setCashCancelBtn = document.getElementsByClassName("place-bet-cancel")[0];//دکمه کنسل
var h_information = $('div.user-name');
h_information.after("<div class='top-link'><h4 id='hadi-box'><b>دفعات :: " + t_times + "</b></h4></div> ");
// var t_remain = $("div.top-link chips-amount");//مقدار باقی مانده ما
var counter = 0;

function getCondition( counter) {
	t_cashoutProduct.value = t_forceStop;
    t_priceAmount.value = getPrice(counter) * t_coefficient;
    t_setCashBtn.click();
}

// get price to add it
function getPrice() {
    // if (price_alogoritm_fibonaci) {
    //
    //     return fibonacci_algoritm();
    // } else if (price_alogoritm_randValue) {

       // return rand_value_algoritm();
    // } else if (price_alogoritm_double) {
    //
         return double_algoritm();
    // } else if (price_algoritm_sum) {
    //
    //     return sum_alogoritm();
    // }
    //
    // return 0;
}

game_waiting = (function () {
    return function (_0x8341xe) {
//         //console.log("game_waiting ", str);
//         getInformation();
//         H_addOption();
// 		if (t_times % 15!= 0 ) {
//             getCondition(counter); //gane wating
// 		}
		
//         f_game_waiting.apply(this, arguments); // calling the real function
//     };
// }());
// data_from_socket = (function () {
//     return function (str) {
//       //console.log(str);
//         f_data_from_socket.apply(this, arguments); // calling the real function

 if (game_data[_0xfa96[61]] = _0xfa96[11],
    gameCanvas[_0xfa96[63]](_0x8341xe[_0xfa96[62]]),
    update_button(),
    game_data[_0xfa96[34]] = [],
    game_data[_0xfa96[45]] = [],
    prepare_user_list(),
    game_data[_0xfa96[109]]) {
        var _0x8341xf = $(_0xfa96[29])[_0xfa96[26]]();
        _0xfa96[30] == _0x8341xf ? _0x8341xf = 1e6 : (_0x8341xf = parseFloat($(_0xfa96[29])[_0xfa96[26]]()),
        _0x8341xf = parseInt(100 * _0x8341xf));
        var _0x8341x10 = parseInt($(_0xfa96[27])[_0xfa96[26]]()[_0xfa96[112]](_0xfa96[113])[_0xfa96[110]](_0xfa96[3])[_0xfa96[112]](_0xfa96[111])[_0xfa96[110]](_0xfa96[3]));
        socket_send({
            command: 70886,
            amount: 100 * 500,
            cashout: 120
        })
    }
    ;if (null != _0x8341xe[_0xfa96[100]] && 0 == $(_0xfa96[105] + _0x8341xe[_0xfa96[100]])[_0xfa96[35]]) {
        var _0x8341x11 = _0xfa96[106] + _0x8341xe[_0xfa96[100]] + _0xfa96[107] + _0x8341xe[_0xfa96[100]] + _0xfa96[108];
        $(_0xfa96[76])[_0xfa96[104]](_0x8341x11)
    }
    ;show_codes(),
    game_data[_0xfa96[109]] = !1,
    setTimeout(function() {
        update_button()
    }, 500)	
    };
}());

var f_game_play =game_play;
// game_play = (function () {
//     return function (str) {

//     };
// }());

game_busted = (function () {
    return function (str) {

        var currentValue = str.amount / 100;
        if (currentValue >= t_forceStop) {
            t_times--;
            counter = 0;
            fi_previous_price = 1;
            numberOneCount = 0;
            damage =0;
            d_prices = d_price;
        } else {
            damage += getPrice(counter) * t_coefficient;
            counter++;
            if (currentValue < 2){
                numberOneCount++;
            }
            d_prices +=d_prices;
        }

        f_game_busted.apply(this, arguments); // calling the real function
    };
}());




game_update = (function () {
    return function (str) {
        try {
      //fake_stop_algoritm (counter,str);
        } catch (e){

        }

        f_game_update.apply(this, arguments); // calling the real function
    };
}());

game_cash_out = (function () {
    return function (str) {
        console.log(str);
        f_game_cash_out.apply(this, arguments); // calling the real function
    };
}());

//aloritms
function fake_stop_algoritm(counter, str) {
    var t_cachoutBtn = document.getElementsByClassName("place-bet-cashout")[0];
    if (counter ==0 || counter == 1 || counter == 3 || counter ==2) {
        if( (str.current/100) >= (t_fakeStop -0.40) ){

            t_cachoutBtn.click();
        }
    }
    if (counter == 4 || counter == 3 || counter ==2) {
        if( (str.current/100) >= t_fakeStop){

            t_cachoutBtn.click();
        }
    }
    if (numberOneCount>5){
        if( (str.current/100) >= 2.9)
            t_cachoutBtn.click();
    }
}


function fibonacci_algoritm() {
    if (t_times > 0) {
        for (var i= 0; i<counter ;i++) {
            fi_previous_price += i;
        }

        return fi_previous_price;
    }

    return 0;
}

function double_algoritm() {
    if (t_times > 0) {

        return d_prices * 2;
    }

    return 0;
}

function rand_value_algoritm() {
    var t_prices = [1,1, 2, 4, 8, 15, 30,50, 80, 140, 220, 330, 490, 710, 980, 1250, 1750, 2100 ];//مقادیر8100

    if (t_prices.length == counter) {
        counter = 0;
    }
    return t_prices[counter];
}

function sum_alogoritm() {
    var p = 1;
    for (var i = 0; i <= counter; i++) {
        p +=i;
    }

    return p;
}

//-------------------
function getInformation(){
    var str =" <b style='color: green' ' >دفعات :"+t_times+ "</b> ";
    str +=  " <span style='color:red'>" + "  ضرر تا الان : " + damage + " </span> ";
    str += " <span style='color:blue'>  شماره  " + (counter+1) + "</span>";
    str += " <span style='color:saddlebrown'>  ضریب اعداد :   " + (t_coefficient) + "</span>";
    str += " <span style='color:greenyellow'>  ضریب بازی :   " + (t_forceStop) + "</span>";
    str += " <span style='color:blueviolet'>  ضریب بازی پایین :   " + (t_fakeStop) + "</span>";
    $("h4#hadi-box").html(str);
}

//-----add option
function H_addOption() {
    var h_option_text='<input id="conficient" type="number" onchange="addConficient()" placeholder="صریب بازی" value="' + t_coefficient + '">';
    h_option_text += '<button onclick="restartTimes()">restart game</button>';
    $('div.top-link.user-name').html(h_option_text);
}

function addConficient() {
    t_coefficient = $("input#conficient").val();
}
function restartTimes() {
    t_times += 100;
}
