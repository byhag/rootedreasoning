$(document).ready( function() {
    $('.alert').hide();
    $('#thanks').hide();
});

function sendAnother() {
    $('#email-form').show();
    $('#thanks').hide();
}

function sendEmail() {
    var form = document.getElementById('email-form');

    for (var i = 0; i < form.length; ++i) {
        if (!form[i].value) {
            $('.alert').show();
            return;            
        }
    }

    $.ajax({
        url: "https://formspree.io/byron.g.hager@gmail.com",
        method: "POST",
        data: {
            name: form.name.value,
            email: form.email.value,
            _subject: form._subject.value,
            message: form.message.value,
            _format: "plain"
        },
        dataType: "json"
    });

    for (var i = 0; i < form.length; ++i) {
        form[i].value = "";
    }

    $('.alert').hide();
    $('#email-form').hide();
    $('#thanks').show();
}