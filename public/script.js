$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.nav-bar').addClass("sticky");
            $('.nav-bar .menu li a').addClass("sticky");
            $('.nav-bar .logo a').addClass("sticky");
            $('.menu-button').addClass("sticky");
        } else {
            $('.nav-bar').removeClass("sticky");
            $('.nav-bar .menu li a').removeClass("sticky");
            $('.nav-bar .logo a').removeClass("sticky");
            $('.menu-button').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });


    //toggle menu/navbar side menu script
    $('.menu-button').click(function () {
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
        $('.nav-bar .menu li a').toggleClass("active");
    });

    //toggle menu/navbar side menu script
    $('.nav-bar .menu li a').click(function () {
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 20000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});