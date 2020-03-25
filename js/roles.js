$(function() {
    count = 0;
    c = 0;
    wordsArray = ["Brands", "Content creators", "Filmmakers", "Brand advocates", "Animators", "Communicators", "Influencers", "Experts", "Hobbyists", "Storytellers", "Enterprises"];
    imagesArray = ["./img/slides/brands.png", "./img/slides/contentc.png", "./img/slides/filmmakers.png",
        "./img/slides/brandadvocates.png", "./img/slides/animators.png", "./img/slides/communicators.png", "./img/slides/influencers.png",
        "./img/slides/experts.png", "./img/slides/hobbyists.png", "./img/slides/storytellers.png", "./img/slides/enterprise.png"
    ];

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