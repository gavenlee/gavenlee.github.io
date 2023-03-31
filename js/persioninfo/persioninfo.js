"use strict";
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}! function() {
    fetch("https://v6-widget.51.la/v6/Jp8wwGQpp21utaFQ/quote.js").then(function(t) {
        return t.text()
    }).then(function(t) {
        for (var e = ["最近活跃", "今日人数", "今日访问", "昨日人数", "昨日访问", "本月访问", "总访问量"], n = (n = t.match(/(<\/span><span>).*?(\/span><\/p>)/g)).map(function(t) {
                return t.replace(/(<\/span><span>)/g, "").replace(/(<\/span><\/p>)/g, "")
            }), o = document.getElementById("statistic"), r = [], u = 0; u < n.length; u++) {
            var s = function(t) {
                return o ? 0 == t ? "continue" : (o.innerHTML += "<div><span>" + e[t] + "</span><span id=" + e[t] + ">" + n[t] + "</span></div>", void queueMicrotask(function() {
                    r.push(new CountUp(e[t], 0, n[t], 0, 2, {
                        useEasing: !0,
                        useGrouping: !0,
                        separator: ",",
                        decimal: ".",
                        prefix: "",
                        suffix: ""
                    }))
                })) : {
                    v: void 0
                }
            }(u);
            if ("continue" !== s && "object" === _typeof(s)) return s.v
        }
        var a = document.querySelector(".about-statistic.author-content-item");

        function i() {
            if (isInViewPortOfOne(a)) {
                for (var t = 0; t < n.length; t++)(function(t) {
                    if (0 == t) return;
                    queueMicrotask(function() {
                        r[t - 1].start()
                    })
                })(t);
                document.removeEventListener("scroll", l)
            }
        }
        var c = new CountUp("selfInfo-content-year", 0, 2002, 0, 2, {
                useEasing: !0,
                useGrouping: !1,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: ""
            }),
            f = document.querySelector(".author-content-item.selfInfo.single");

        function p() {
            f && isInViewPortOfOne(f) && (c.start(), document.removeEventListener("scroll", d))
        }
        var l = btf.throttle(i, 200),
            d = (document.addEventListener("scroll", l, {
                passive: !0
            }), i(), btf.throttle(p, 200));
        document.addEventListener("scroll", d, {
            passive: !0
        }), p()
    });
    var t = setInterval(function() {
        var t = document.querySelector("span[data-show]"),
            e = t.nextElementSibling || document.querySelector(".first-tips"),
            n = document.querySelector("span[data-up]");
        n && n.removeAttribute("data-up"), t.removeAttribute("data-show"), t.setAttribute("data-up", ""), e.setAttribute("data-show", "")
    }, 2e3);
    document.addEventListener("pjax:send", function() {
        clearInterval(t)
    }), document.querySelector(".hello-about").addEventListener("mousemove", function(t) {
        var e = t.offsetX,
            t = t.offsetY;
        gsap.set(".cursor", {
            x: e,
            y: t
        }), gsap.to(".shape", {
            x: e,
            y: t,
            stagger: -.1
        })
    })
}();
