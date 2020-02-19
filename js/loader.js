$(document).ready(function() {
    $('#navbar').hide();
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#navbar').show();
        $('#formModal').modal('show');
    }, 500);
});