jQuery(document).ready(function (e) {
// слайдер для главной страницы
e(".home-slider").slick({
        dots: !1,
        customPaging: function (e, t) {
            return '<svg width="25" height="25"><circle class="outer" cx="12" cy="11" r="10.5"></circle></svg>'
        },
        arrows: !1,
        infinite: !0,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 5e3,
        cssEase: "cubic-bezier(0.4, 0.0, 0.6, 1)",
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{breakpoint: 768, settings: {pauseOnHover: !1}}]
    })
// END слайдер для главной страницы
});