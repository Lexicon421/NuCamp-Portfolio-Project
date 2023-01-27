$(document).ready(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    $("#content-mapping").click(function () {
        $(".form-container").fadeIn();
    });
    $("#content-optimization").click(function () {
        $(".form-container").fadeIn();
    });
    $("#full-service-overhaul").click(function () {
        $(".form-container").fadeIn();
    });
});
