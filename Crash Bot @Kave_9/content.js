//algoritm
var price_alogoritm_fibonaci = false;
var price_alogoritm_randValue = true;
var price_alogoritm_double = false;
var price_algoritm_sum = false;
var price_fake_stop_algoritm = false;
//fibonaci
var fi_previous_price = 1;
var double_start_algortim = 1;
var t_coefficient = 1;//ضریب مقادیر است 1 , 10,100
var t_times = 100;//تعداد دفعات تکرار حلقه
var numberOneCount =0;
// this is the code which will be injected into a given page...
var h_docule_first_value = 12.5;
var h_double_amount = 12.5;

var t_fakeStop = 1.87;//ضریب توقف برای اولیت های حلقه
var t_forceStop = 1.20;//ضریب
var damage = 0;

var t_randValue;//آخرین ضریب ارایه شده
var t_correntValue;//ضریب درحال حاظر


//append to functions
var f_game_waiting = game_waiting;
var f_game_busted = game_busted;
var f_game_update = game_update;
var f_game_cash_out = game_cash_out;
var box =document.getElementsByClassName('game-controls')[0];
//elements
var t_cashoutProduct = document.getElementsByClassName('cashout-amount')[0];
var t_priceAmount = document.getElementsByClassName('game-amount')[0];
var t_setCashBtn = document.getElementsByClassName("place-bet")[0];//دکمه ثبت
var t_setCashCancelBtn = document.getElementsByClassName("place-bet-cancel")[0];//دکمه کنسل
var h_information = $('div.user-name');
h_information.after("<div class='top-link'><h4 id='hadi-box'><b>ربات فعال شده است</b></h4></div> ");

// var t_remain = $("div.top-link chips-amount");//مقدار باقی مانده ما
var counter = 0;

function getCondition( counter) {
    t_cashoutProduct.value = t_forceStop;
    //setCoficient();
    t_priceAmount.value = getPrice(counter) * t_coefficient;
    t_setCashBtn.click();
}

// get price to add it
function getPrice() {
    if (price_alogoritm_fibonaci) {

        return fibonacci_algoritm();
    } else if (price_alogoritm_randValue) {

        return rand_value_algoritm();
    } else if (price_alogoritm_double) {

        return double_algoritm();
    }

    // return 0;
}

game_waiting = (function () {
    return function (str) {
        //console.log("game_waiting ", str);
        getInformation();
        H_addOption();
        if (t_times % 15!= 0 ) {
            getCondition(counter); //gane wating
        }
        //var robot = getCookie('crash50');
            
        //if (robot=='bot') {

            console.log("XXXXX");
            //setTimeout(myFunction,60*10000*60*4250);
        //}else{

        f_game_waiting.apply(this, arguments); // calling the real function
        //	}
        
    };
}());

game_busted = (function () {
    return function (str) {

        var currentValue = str.amount / 100;
        if (currentValue >= t_forceStop) {
            t_times--;
            counter = 0;
            fi_previous_price = 1;
            numberOneCount = 0;
            damage = 0;
            h_double_amount = h_docule_first_value;
        } else {
            counter++;
            if (currentValue < 2){
                numberOneCount++;

            }
            damage += getPrice() * t_coefficient;
        }

        f_game_busted.apply(this, arguments); // calling the real function
    };
}());




game_update = (function () {
    return function (str) {
       //var robot = getCookie('crash50');
     ///   if (robot=='bot') {
           // setTimeout(myFunction,60*10000*60*4250);
      //  }else
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

        return h_double_amount *= 2 ;
    }

    return 0;
}

function rand_value_algoritm() {
    var t_prices = [3,13,56,242,1048,4541,19677,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ];//مقادیر8100

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
    var str =" <b style='color: green' ' >بردها  :"+t_times+ "</b>  | ";
    str += " <b style='color:red'>   ضررها  :" + (counter) + "</b> | ";
    str += " <b style='color:brown'>   ضرر :" + (damage) + "</b> | ";
    str += " <b style='color:blue'>  سود :   " + h_profit() + "</b> | ";
    str += " <b style='color:#C500FF'>  Telegram: @kave_9 | " + (t_fakeStop) + "</b> | ";
    $("h4#hadi-box").html(str);
}

function changeMethod() {
    var method = $('select#change-method').val();
    switch (method) {
        case 1 : {
            price_alogoritm_fibonaci = false;
            price_alogoritm_randValue = true;
            price_alogoritm_double = false;
            break;
        }
        case 2 : {
            price_alogoritm_fibonaci = false;
            price_alogoritm_randValue = false;
            price_alogoritm_double = true;
            break;
        }
        case 3 : {
            price_alogoritm_fibonaci = true;
            price_alogoritm_randValue = false;
            price_alogoritm_double = false;
            break;
        }
        default :{
            price_alogoritm_fibonaci = true;
            price_alogoritm_randValue = false;
            price_alogoritm_double = false;
        }
    }
}
function changeCof() {
    var cof = $('select#change-method').val();
    t_coefficient = (cof) ? cof : 3.01;
}
//-----add option
function H_addOption() {
     var h_option_text='<input id="conficient" type="number" onchange="addConficient()" placeholder="صریب بازی" value="' + t_coefficient + '">';
   // var h_option_text='<span style="color:red" > ضریب مبالغ :' + t_coefficient + '</span>';
    h_option_text += '<button onclick="restartTimes()">+100 WIN</button>';
    //h_option_text += '<select onchange="changeConf()" id="change-method">';
   // h_option_text += '<option value="3">3</option>';
    //h_option_text += '<option value="4.01">4</option>';
    //h_option_text += '<option value="5">5</option></select>';
    $('div.top-link.user-name').html(h_option_text);
}

function addConficient() {
    t_coefficient = $("input#conficient").val();
}
function restartTimes() {
    t_times += 100;
}

//profit
var first_amount = 0;
function h_profit() {
    if(first_amount == 0) {
        first_amount = user_data.chips;
    }

    return parseInt( (user_data.chips - first_amount)/100) ;
}

h_information.after("<div class='top-link'><span id='hadi-timing'></span></div> ");
//var test = setTimeout(myFunction, 50*60*1000);
//function myFunction() {
 //   setCookie("crash50", "bot");
 //   alert('ربات تستی از کار افتاد لطفا با سازندع اماس بگیرید و پس از پرداخت هزبنه ربات بدونه محدودیت را دریافت کنید');
//}

function setCookie(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (60*1000*1000*30));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCoficient() {
	var amount = user_data.chips/100;
	var newCof = parseInt(amount/10000) + 1;
	t_coefficient =  newCof;
}
