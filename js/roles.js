$(function() {
    count = 0;
    c = 0;
    wordsArray = ["Advertisers", "Content creators", "Brands", "Influencers", "Consumers"];
    imagesArray = ["./img/slides/advertisers-showtag.jpg", "./img/slides/content-creators-showtag.jpg", "./img/slides/brands.jpg", "./img/slides/influencers-showtag.jpg", "./img/slides/consumers-showtag.jpg"];

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