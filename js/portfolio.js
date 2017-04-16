$(function () {
    var images_list = [];

    $.ajax({
        url: './images.json',
        dataType: 'json',
        success: function(data) {
            $.each( data, function( key, val ) {
                images_list.push(val)
            });
        }
    });

    console.log(images_list)
});
