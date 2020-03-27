$(function() {
    count = 0;
    c = 0;
    wordsArray = ["Advertisers", "Content creators", "Advertising agencies", "Influencers", "Storytellers"];
    imagesArray = ["./img/slides/advertisers-showtag.jpg", "./img/slides/content-creators-showtag.jpg", "./img/slides/advertising-agencies-showtag.png", "./img/slides/influencers-showtag.jpg", "./img/slides/storytellers-showtag.jpg"];

    setInterval(function() {
        count++;
        var img;
        c = count % wordsArray.length;
        $("#roles").fadeOut(2000, function() {
            $(this).text(wordsArray[c]).fadeIn(2000);
            img = "'" + imagesArray[c] + "'";
            $('.splash-container').css({ backgroundImage: 'url(' + img + ')' }).fadeIn(2000);
            //$('.splash-container').css({ backgroundImage: 'url(' + img + ')' }).fadeIn(2000);
        });
    }, 4000);
});