$(document).ready(function () {
    // Initialize carousel
    $(".carousel-container .carousel").carousel({ interval: 2000 });

    // Toggle play/pause on carousel when "carouselButton" is clicked
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel-container .carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel-container .carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    // Show form when "content-mapping", "content-optimization", or "full-service-overhaul" is clicked
    $(document).on("click", ".dropdown-item", function () {
        $(".form-container").fadeIn();
    });

    // Hide "videoModal" when it or its "btn" element is clicked
    $("#videoModal, #videoModal .modal-footer .btn").click(function () {
        $("#videoModal").hide();
    });
});
