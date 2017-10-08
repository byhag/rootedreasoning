$(document).ready( function() {
    var duration = 300;

    // initial load
    if (!localStorage.getItem('showMenuOnLoad')) {
        localStorage.setItem('showMenuOnLoad',true);
    }

    var showMenuOnLoad = localStorage.getItem('showMenuOnLoad');

    $('.submenu').hide();
    $('.sharing').hide();
    $('.select-menu').hide();

    // don't change menu icon on mobile
    if (window.innerWidth < 768) {
        showMenuOnLoad = "false";
        localStorage.setItem('showMenuOnLoad',false);
        $('i','#menu-toggle').removeClass('fa-long-arrow-left');
        $('i','#menu-toggle').addClass('fa-bars');
    }

    // if (showMenuOnLoad == "true") {
    //     $('#wrapper').addClass('toggled');
    //     $('i','#menu-toggle').addClass('fa-long-arrow-left');
    //     $('i','#menu-toggle').removeClass('fa-bars');
    // } else {
    //     $('i','#menu-toggle').removeClass('fa-long-arrow-left');
    //     $('i','#menu-toggle').addClass('fa-bars');
    // }

    $('#menu-toggle').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
        if (showMenuOnLoad == "true") {
            showMenuOnLoad = "false";
        } else {
            showMenuOnLoad = "true";
        }
        localStorage.setItem('showMenuOnLoad',showMenuOnLoad);
        if (window.innerWidth > 767) {
            $('i',this).toggleClass('fa-bars');
            $('i',this).toggleClass('fa-long-arrow-left');
        }
    });

    $('.submenu-toggle').click(function(e) {
        e.preventDefault();
        $(this).next('.submenu').slideToggle(duration);
    });

    $('.sharing-toggle').click(function(e) {
        e.preventDefault();
        $(this).next('.sharing').slideToggle(duration);
    });

    $('.select-toggle').click(function(e) {
        e.preventDefault();
        if (!$(this).next('.select-menu').is(':visible')) {
            $('.select-menu').slideUp(duration);
            $('.select-toggle').css('border-radius','5px');
            $(this).css('border-bottom-left-radius','0px');
            $(this).css('border-bottom-right-radius','0px');
        }
        var toggle = $(this);
        toggle.next('.select-menu').slideToggle(duration, function () {
           if (!toggle.next('.select-menu').is(':visible')) {
                toggle.css('border-bottom-left-radius','5px');
                toggle.css('border-bottom-right-radius','5px');
            }
        });
    });
});