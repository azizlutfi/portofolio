function count() {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var string = numbers + letters;
    var allCounters = document.querySelectorAll(".counter > i");

    allCounters.forEach(function (el) {
        var duration = 500 + Array.from(allCounters).indexOf(el) * 500;
        var interval = setInterval(function () {
            el.innerText = string.charAt(Math.random() * numbers.length);
            duration = duration - 50;
            if (duration <= 0) {
                clearInterval(interval);
                el.innerText = el.getAttribute("data-final");
            }
        }, 50);
    });
}

$(function () {
    var header = $(".navbar-dark");
    var navigation = $(".navbar");
    var numberanimation = 1;
    var viewportHeight = $(window).height();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll <= viewportHeight - 40) {
            navigation.css("background-color", "#1239ba");
        } else if (
            scroll >= viewportHeight - 20 &&
            scroll <= viewportHeight * 2 - 40
        ) {
            header.removeClass("navbar-light").addClass("navbar-dark");
            navigation.css("background-color", "#214fc6");
        } else if (
            scroll >= viewportHeight * 2 - 40 &&
            scroll <= viewportHeight * 3 - 40
        ) {
            header.removeClass("navbar-dark").addClass("navbar-light");
            navigation.css("background-color", "#e7eeed");
        } else if (scroll >= viewportHeight * 3 - 40) {
            navigation.css("background-color", "#fff");
        }

        if (scroll >= viewportHeight * 0.75 && numberanimation == 1) {
            count();
            numberanimation = 0;
        } else if (scroll <= viewportHeight * 0.75) {
            numberanimation = 1;
        }
    });
});

// typing animation
gsap.fromTo(
    "#cursor",
    { autoAlpha: 0, x: -20 },
    { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
);

let tween = gsap.to("#text", {
    text: {
        value: "Hello! I’m Aziz Lutfi, a web developer currently based in Yogyakarta, Indonesia.",
    },
    duration: 2.5,
    delay: 0.5,
    ease: "none",
});
