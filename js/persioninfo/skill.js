$(function() {   //方法一
    $(".randomcolor").each(function() {
        var random = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ')';
         $(this).css("background-color", random);
    });
});