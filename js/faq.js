$(document).ready(function() {
    $(".question-box").click(function() {
        var target = $(this).parent().children(".answer-box");
        $(target).slideToggle();
    });
});