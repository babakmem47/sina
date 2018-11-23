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

});

