$(document).ready( function() {
    var duration = 300;

    $('.submenu').hide();
    $('.sharing').hide();
    $('.select-menu').hide();

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".submenu-toggle").click(function(e) {
        e.preventDefault();
        $(this).next('.submenu').slideToggle(duration);
    });

    $(".sharing-toggle").click(function(e) {
        e.preventDefault();
        $(this).next('.sharing').slideToggle(duration);
    });

    $(".select-toggle").click(function(e) {
        e.preventDefault();
        if (!$(this).next('.select-menu').is(":visible")) {
            $('.select-menu').slideUp(duration);
            $('.select-toggle').css('border-radius','5px');
            $(this).css('border-bottom-left-radius','0px');
            $(this).css('border-bottom-right-radius','0px');
        }
        var toggle = $(this);
        toggle.next('.select-menu').slideToggle(duration, function () {
           if (!toggle.next('.select-menu').is(":visible")) {
                toggle.css('border-bottom-left-radius','5px');
                toggle.css('border-bottom-right-radius','5px');
            }
        });
    });
});