let nav = document.querySelector("nav");
    window.addEventListener('scroll', function(){
        let windowPositionScroll = window.scrollY > 50;
        nav.classList.toggle('scrolling-active', windowPositionScroll);
    })

    $(function(){
        'use strict';
        console.log($('nav').offset().top);
        let windowPosition = $('nav').offset().top > 50;
        nav.classList.toggle('scrolling-active', windowPosition);
    })

    $(document).ready(function() {

        var divide = 1.5;
        $(".nav-link").click(function() {

            $("html, body").animate ({
                scrollTop: $("." + $(this).data("scroll")).offset().top - $(".navbar").innerHeight() / divide
            },10)
        })

        $('select').niceSelect();

        $("#loading").fadeOut(2000);
    })



$(document).on('click', '.menu-btn', function(){
    $('body').addClass('menu-active')
})

$(document).on('click', '#close', function(){
    $('body').removeClass('menu-active')
})


$(document).on('scroll', '.link', function(){
    $(this).addClass('active').siblings().removeClass('active')
})




$(document).on('click', '.link', function(){
    $(this).addClass('active').siblings().removeClass('active')
})


    




$(window).scroll(function(){

    var scrollbarLocation = $(this).scrollTop();
    var scrollLink = $('.link-a')

    scrollLink.each(function(){

        var sectionOffset = $(this.hash).offset().top - 150;

        if (sectionOffset <= scrollbarLocation)
        {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    })

})


// section three

var menu = ['Standalone Villa', 'Twin House', 'Chalet', 'Lofts', 'Studios']
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    slideToClickedSlide: true,
    pagination: {
        el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
    },
});


// section three


