
// Плавающий фильтр каталога. Подключать только в каталоге
 if($("div").is(".box_catalog-filter")) {
    var scrollFilter = $(".box_catalog-filter").offset()['top'];
    var lastScrollTop  = 0;
}
function FixedFilter() {
    if ($(window).scrollTop() > scrollFilter) {
        $(".box_catalog-filter").addClass("unpinned").addClass("fixed");
        $("body").addClass("scroll_catalog");
    } else {
        $(".box_catalog-filter").removeClass("fixed");
        $("body").removeClass("scroll_catalog");
    } 

    // показ от направления скролла 
       var top = $(window).scrollTop();
       if (lastScrollTop < top){
           if (lastScrollTop > scrollFilter){
               setTimeout(function () {
                  $(".box_catalog-filter").addClass("unpinned");
               }, 300);
           }
       } else {
         $(".box_catalog-filter").removeClass("unpinned");
       }
       lastScrollTop = top;
}

jQuery(document).ready(function (e) {
// Плавающий фильтр каталога. Подключать только в каталоге
    FixedFilter();

/* В каталоге ПРАВЫЙ МОбИЛЬНЫЙ ФИЛЬТР */
    /* Ф. открыть боковое меню*/
    $(document).on("click", "#open-filter", function () {
        $("body").addClass("no_scroll");
        $(".boxright-nav").addClass("active");
        $(".overlay").addClass("active-long")
    }), 
        /*Ф. закрыть боковое меню*/
    $(document).on("click", ".boxright-nav .close, .overlay", function () {
        $("body").removeClass("no_scroll");
        $(".boxright-nav").removeClass("active");
        $(".overlay").removeClass("active-long"), setTimeout(function () {
            $(".boxright-nav .box_level_1").removeClass("outside");
            $(".boxright-nav .box_level_2").removeClass("active");      
        }, 500)
    }), 
    /* Ф. открыть 2й уровень*/
    $(document).on("touchstart click", ".boxright-nav .open_level2", function () {
        $(".boxright-nav .box_level_1").addClass("outside");
        var _type = $(this).data('type');
        var _section = $(this).data('section');
        if (_type == 'chara_1') {
            $(".box_level_2.chara_1").addClass("active");
            $(".box_level_2.chara_1 .box_section").each(function(){ 
                var _id = $(this).attr('id');
                if (_id == _section) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        } else {
            $(".box_level_2.chara_2").addClass("active");   
            $(".box_level_2.chara_2 .box_section").each(function(){ 
                var _id = $(this).attr('id');
                if (_id == _section) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    }),
        /* Ф. закрыть 2й уровень. любой*/ 
    $(document).on("click", ".boxright-nav .back_level_1", function () {
        $(".boxright-nav .box_level_1").removeClass("outside");
        $(".boxright-nav .box_level_2").removeClass("active");      
    });
/* END правый фильртр */  

    // слайдер превьюшек
    e(".slider_preview").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        lazyLoad: "ondemand",
        speed: 300,
        cssEase: "cubic-bezier(0.4, 0.0, 0.6, 1)",
        pauseOnHover: !0,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

$(window).scroll(function() {
    FixedFilter();
});