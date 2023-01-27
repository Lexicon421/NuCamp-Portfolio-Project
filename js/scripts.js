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
    $("#reserveButton").click(function () {
        $("#reserveModal").modal();
    });
    $("#loginButton").click(function () {
        $("#loginModal").modal();
    });
    $("#videoButton").click(function () {
        $("#videoModal").modal();
    });
});