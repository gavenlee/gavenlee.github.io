//个人页面 技能栈颜色随机生成
$(function() {   //方法一
    $(".randomcolor").each(function() {
        var random = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ')';
         $(this).css("background-color", random);
    });
});

//个人页面 生涯横向鼠标滚动
$(function() {   //方法一
    if (document.getElementById("category-bar-items")){
        let xscroll = document.getElementById("category-bar-items");
        xscroll.addEventListener("mousewheel", function (e) {
        //计算鼠标滚轮滚动的距离
        let v = -e.wheelDelta / 2;
        xscroll.scrollLeft += v;
        //阻止浏览器默认方法
        e.preventDefault();
      }, false);
    }
});

