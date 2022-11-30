$(window).scroll(example);

var statusBar = document.getElementById("statusBarFW")
var prevScroll = $(window).scrollTop();


function example() {
    var tempScrollTop = $(window).scrollTop();

    statusBar.style.width = String((prevScroll*100/4248)) + "%"
    statusBar.style.marginRight = String(100-(prevScroll*100/4248)) + "%"

    if (prevScroll < tempScrollTop) {
        $('header').addClass("hide")
        $('header').removeClass("show")
    } else {
        $('header').removeClass("hide")
        $('header').addClass("show")
    }
    prevScroll = $(window).scrollTop();
};
 