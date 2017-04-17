// This gets the images from images.json file and automatically
// renders them on the DOM.

$(function () {
    var count = 1

    $.ajax({
        url: "./images.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function(key, img) {
                $(".portfolio-images").append('<div class="col-sm-4"><div class="box"><a href="'+ img + '" title="" data-toggle="lightbox" data-gallery="portfolio" data-title="Portfolio image ' + count + '" data-footer="Some footer information"><img src="'+ img + '" alt="" class="img-responsive"></a></div>')
                count ++
            });
        }
    });
});
