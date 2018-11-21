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
    // var i = 0;
    // $("#BetButton").click(function () {
    //     if (i == 0) {
    //         $(this).css("background-color", "#FFF");
    //         i = 1;
    //     }
    //     else {
    //         $(this).css("background-color", "#000");
    //         i = 0;
    //     }
    // });

    // $("#BetButton").toggleClass("btn-dark");
    // // if (white = !white) {
    //     bgcolor = $(this).css('backgroundColor');
    //     $(this).css("background-color", "#FFF");
    // } else {
    //     $(this).css("background-color", bgcolor);
    // }
});

