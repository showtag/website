$(function() {
    count = 0;
    wordsArray = ["Enterprises", "Brands", "Content creators", "Filmmakers", "Brand advocates", "Animators", "Communicators", "Influencers", "Experts", "Hobbyists", "Storytellers"];
    setInterval(function() {
        count++;
        $("#roles").fadeOut(2000, function() {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(2000);
        });
    }, 2000);
});