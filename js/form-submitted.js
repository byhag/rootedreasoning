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

    var url = window.location.href;
    var page = '';
    
    if (url.includes('ask-us')) {
        page = 'askus.';
    } else if (url.includes('feedback')) {
        page = 'feedback.';
    } else if (url.includes('study-with-us')) {
        page = 'study.';
    }

    $.ajax({
        url: 'https://formspree.io/' + page + 'rootedreasoning@gmail.com',
        method: 'POST',
        data: {
            name: form.name.value,
            email: form.email.value,
            _subject: form._subject.value,
            message: form.message.value,
            _format: 'plain'
        },
        dataType: 'json'
    });

    for (var i = 0; i < form.length; ++i) {
        form[i].value = '';
    }

    $('.alert').hide();
    $('#email-form').hide();
    $('#thanks').show();
}