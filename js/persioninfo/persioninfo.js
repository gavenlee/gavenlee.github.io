var t = setInterval(function() {
    var t = document.querySelector("span[data-show]"),
        e = t.nextElementSibling || document.querySelector(".first-tips"),
        n = document.querySelector("span[data-up]");
    n && n.removeAttribute("data-up"), t.removeAttribute("data-show"), t.setAttribute("data-up", ""), e.setAttribute("data-show", "")
}, 2e3);
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
