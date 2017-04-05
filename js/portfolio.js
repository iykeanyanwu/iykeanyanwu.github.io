$(function () {
    console.log("portfolio works")
    var folder = "./portfolio/";
    var images_list = [];

    $.ajax({
        url: folder,
        success: function(data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png)$/) ) {
                    images_list.push(val)
                }
            });
        }
    });

    console.log(images_list)
});
