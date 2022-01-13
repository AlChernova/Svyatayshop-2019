var WidthWin = $(window).width();

// плавающий блок В корзину + лайк
function AddbasketMove() {
    var HeightWin = $(window).height();
    var WinScroll = $(window).scrollTop();
    var topPos_1 = $('.box_product_add').offset().top;
    var topPos_2 = $('.box_product_add_bottom').offset().top;
    var HeightButton = $('.product_add_buttons').height();
    var pointEnter = topPos_1 - (WinScroll + (HeightWin - HeightButton*2));
    var pointBottom = topPos_2 - (WinScroll + (HeightWin - HeightButton*2));
    //console.log("нижнняя точка" + pointBottom + "  скролл страницы" + WinScroll);
    //console.log('topPos_2: ' + topPos_2 + 'HeightWin: ' +  HeightWin);
    if (pointEnter < 6) {
        $('.product_add_buttons').addClass('fixed');
        if (pointBottom < 6) {
            //console.log('yes');
            // Перемещаем кнопки из верхнего в нижний дивник
            // с помощью явного отсоединения его и добавления в новое место
            $('.box_product_add .product_add_buttons').detach().prependTo('.box_product_add_bottom');
        } else {
            $('.box_product_add_bottom .product_add_buttons').detach().prependTo('.box_product_add');
        }
    } else {
        $('.product_add_buttons').removeClass('fixed');
    }
}

$(window).on('load scroll resize',function() {
    if (WidthWin < 768) {
        AddbasketMove();
    }
});


jQuery(document).ready(function (e) {

    e(".product__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        arrows: !1,
        fade: !0,
        //verticalSwiping: !0,
        asNavFor: ".product__slider-nav",
        responsive: [{breakpoint: 767, settings: {arrows: !1, dots: !0, fade: !1, asNavFor: null, verticalSwiping: !1}}]
    }), 
    e(".product__slider-nav").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".product__slider",
        lazyLoad: "ondemand",
        dots: !1,
        arrows: !0,
        focusOnSelect: !0,
        vertical: !0,
        verticalSwiping: !0
    }), 

    // слайдеры на стр. товара похожие товары и стрит-фото
    e(".similar-products__slider").slick({
        dots: !1,
        arrows: !0,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
             breakpoint: 600,
             settings: {
                slidesToShow: 2, 
                slidesToScroll: 1, 
                variableWidth: true,
                infinite: true
                }
            }
        ]
    }), 
    e(".streetlook_slider").slick({
        dots: !1,
        arrows: !0,
        speed: 300,
        fade: !1,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {breakpoint: 481,
             settings: {slidesToShow: 2, variableWidth: true, infinite: true}
            }
        ]
    });
    // ЕНД слайдеры на стр. товара похожие товары и стрит-фото

    $(document).on("click", ".box_link_video .button", function () {
        $('.box_video').toggleClass('play');
    });

    //отзывы
    $(document).on("click", ".testimonials_product .testimonials__more", function () {
        //console.log('bu');
        $(this).hide();
        $('.testimonials_product .testimonial__item .support-item').slideDown(200);
        $('.testimonials_product .hidden_testimonials').slideDown(200);
        $('.testimonials_product .testimonials__more_load').slideDown(200);
        return false;
    }); 

    /* Инициализация плагина easyzoom
    function easyzoom() {
        if (window.innerWidth > 768) {
            //$('ul.product__slider-nav li').css('width', 'auto');
            var $easyzoom = $('.easyzoom').easyZoom();
            var api = $easyzoom.data('easyZoom');
            api.teardown();
            api._init();
            console.log(api);
        }
    }
    $(document).on("click", ".easyzoom a", function (e) {
        e.preventDefault();
    }), 
    $(document).on("click", ".easyzoom img", function (e) {
        easyzoom();
    }), */        
});

