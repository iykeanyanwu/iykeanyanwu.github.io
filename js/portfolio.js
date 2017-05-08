$(function() {
    // jPages customisation
    function paginate() {
        $("div.holder").jPages({
            containerID: "itemContainer",
            perPage: 9,
            startPage: 1,
            startRange: 1,
            midRange: 5,
            endRange: 1
        });

        $("img.lazy").lazyload();
    }

    // This gets the images from images.json file and automatically
    // renders them on the DOM.
    $.ajax({
        url: "./images.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function(key, img_list) {
                img_list_length = img_list.length
                for (var i = 0; i < img_list_length; i++) {
                    img_title = img_list[i][0]
                    img = img_list[i][1]
                    $(".portfolio-images").append('<div class="col-sm-4"><div class="box"><a href="' + img + '" title="" data-toggle="lightbox" data-gallery="portfolio" data-title="' + img_title + '"  data-footer=""><img class="lazy" data-original="' + img + '" alt="" class="img-responsive"></a></div>')
                }
            });
        },
        complete: paginate
    });
});
