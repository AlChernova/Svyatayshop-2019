var WidthWin,
	heightHead;
WidthWin = $(window).width();

// Плавающая шапка 
var scrollPos = 50;
function FixedNavbar() {
    if ($(window).scrollTop() > 0) {
        $("body").addClass("scroll");
        $("header").addClass("fixed");
        /*$("header").addClass("unpinned").delay(500).queue(function () {
            	$(this).addClass('fixed').dequeue();
            }); */
    } else {
        $("body").removeClass("scroll");
        $("header").removeClass("fixed");
    }

	// шапка от направления скролла
	   var st = $(window).scrollTop();
	   if (st > (scrollPos)){
		   setTimeout(function () {
			  $("header").addClass("unpinned");
		   }, 50);
	   } else {
		 $("header").removeClass("unpinned");
	   }
	   if (st < 50) {
	   	scrollPos = 50;
	   } else {
	 	  scrollPos = st;
		}
} 


jQuery(document).ready(function (e) {

    // GET CART AMOUNT
    $.ajax({
        url: "/include/ajax/add_to_cart.php",
        type: 'POST',
        dataType : "json",
        data: {},
        //processData: false,
        //contentType: false,
        cache:false,
        success: function (res) {
            $('.cart-amount').html(res.count);
        },
        error: function () {}
    });

    initFavorite();

	// Плавающая шапка 
	if ($("header").length) {
  		FixedNavbar();
  	}

	// шапка и футер
	$(document).on("click", "#open-search", function () {
	    $(".header").addClass("search-transform");
	}), 
	$(document).on("click", ".search-form-close", function () {
		//alert("wau");
	    $(".header").removeClass("search-transform");
	}), 
	$(document).on("click", ".block-inside .title", function () {
	    $(this).next().slideToggle(200);
		$(this).closest('.block-inside').toggleClass('active');
		return false;
	}); 

	var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	if (is_safari) {
	    //alert('this is safari');
	    $(document).on("click", ".up_page", function () {
			$('html, body').animate({scrollTop:0}, 2000);
		}); 
	} else {
		$(document).on("click", ".up_page", function () {
				$('html, body').animate({scrollTop:0}, 500);
		});
	};


    // слайдер для главной страницы
    if(e(".home-slider").length)
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
        });
// END слайдер для главной страницы


    if($('#slider_mini_action').length) {
        $('#slider_mini_action').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            adaptiveHeight: false,
            autoHeight: false,
            speed: 200,
        });
    }

// ПОПАПЫ
	/* просто окошки	 */
	if (WidthWin > 760) {
        $(".open-popup-link").fancybox({
			padding : 0,
			nextClick  : true,
			nextEffect : 'fade',
			prevEffect : 'fade',
			afterShow : function() {         
				if ($(this.element).hasClass('white_close')) {
					$('.fancybox-close').addClass('white_close');
				}
           }
		});
	} else {
        $(".open-popup-link").fancybox({
			padding : 0,
			margin: 0,
			autoSize: false,
			autoHeight: true,
			width: '100%',
			nextClick  : true,
			nextEffect : 'fade',
			prevEffect : 'fade',
			afterShow : function() {         
				if ($(this.element).hasClass('white_close')) {
					$('.fancybox-close').addClass('white_close');
				}
           }
		});
	}

/* ЛЕВОЕ МОбИЛЬНОЕ МЕНЮ */
	/* открыть боковое меню*/
	$(document).on("click", ".hamburger", function () {
		$("body").addClass("no_scroll");
		$(".boxleft-nav").addClass("active");
		$(".overlay").addClass("active-long")
	}), 
		/* закрыть боковое меню*/
	$(document).on("click", ".boxleft-nav .close, .overlay", function () {
		$("body").removeClass("no_scroll");
		$(".boxleft-nav").removeClass("active");
		$(".overlay").removeClass("active-long"), setTimeout(function () {
			$(".boxleft-nav .box_level_1").removeClass("outside");
			$(".boxleft-nav .box_level_2").removeClass("active");		
		}, 500)
	}), 
	/* открыть 2й уровень*/
	$(document).on("click", ".boxleft-nav .open_level2", function () {
		$(".boxleft-nav .box_level_1").addClass("outside");
		var _type = $(this).data('type');
		var _section = $(this).data('section');
		if (_type == 'women') {
			$(".box_level_2.women").addClass("active");
			$(".box_level_2.women .box_section").each(function(){	
				var _id = $(this).attr('id');
				if (_id == _section) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		} else {
			$(".box_level_2.men").addClass("active");	
			$(".box_level_2.men .box_section").each(function(){	
				var _id = $(this).attr('id');
				if (_id == _section) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
	}),
		/* закрыть 2й уровень. любой*/ 
	$(document).on("click", ".boxleft-nav .back_level_1", function () {
		$(".boxleft-nav .box_level_1").removeClass("outside");
		$(".boxleft-nav .box_level_2").removeClass("active");		
	}), 
	/* табы меню М/Ж */
	$(document).on("click", ".boxleft-nav .link_tab", function () {
		var _type = $(this).data('type');
		$(".boxleft-nav .link_tab").removeClass('active');
		$(this).addClass('active');
		
		$(".boxleft-nav .item_tab").each(function(){	
			var _this = $(this);
			var _id = $(_this).attr('id');
			if (_id == _type) {
				$(_this).removeClass('hide_item');
			} else {
				$(_this).addClass('hide_item');
			}
		});
	});
/* END левое моб. меню */

});

$(window).scroll(function() {
	if ($("header").length) {
  		FixedNavbar();
  	}
});

//Функция добавления - удаления из избранного
function initFavorite() {
    $.ajax({
        type: "POST",
        dataType : "json",
        url: "/include/ajax/add_favorite.php",
        data: {
        },
        success: function (res) {
            console.log('res ', res);
            if(res.ar){
                for(var i in res.ar){
                    var offerId = res.ar[i];
                    $('[data-fav=' + offerId + ']').addClass('active');
                    $('[data-fav=' + offerId + '].catalog__item__like__mobile').html('Удалить из избранного');
                }
            }
            $('.favorite-amount').html(res.count);
        }
    });

    //$('.catalog__item__like').off('click touchstart');
    $('body').stop().on('click', '.catalog__item__like', function (event) {

        //event.preventDefault();
        var elem = $(this);
        var favId = elem.data('fav');

        $.ajax({
            type: "POST",
            dataType : "json",
            url: "/include/ajax/add_favorite.php",
            data: {
                "ID": favId,
                'add': !elem.hasClass('active')
            },
            success: function (res) {
                $('[data-fav=' + favId + ']').toggleClass('active');
                $('.favorite-amount').html(res.count);

                $('[data-fav=' + favId + '].catalog__item__like__mobile').html(elem.hasClass('active')? 'Удалить из избранного' : 'Добавить в избранное');
            }
        });
    });
}

function updateQueryStringParameter(uri, key, value) {
    if (!uri) uri = window.location.href;

    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        uri = uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        uri = uri + separator + key + "=" + value;
    }

    history.replaceState('', '', uri);
    return uri;
}

function sendAnalyticsEvent(event){
    var category = '';
    var metrika = '';

    if(event == 'cart') {
        category = 'cart';
        metrika = 'ADDTOCART';
        fbq('track', 'AddToCart');
    }else if(event == 'mainsubscribe'){
        category = 'leadmain';
        //metrika = 'leadmain';
        fbq('track', 'Lead');
    }else if(event == 'productsubscribe'){
        category = 'leadproduct';
        //metrika = 'leadmain';
    }else if(event == 'toorder'){
        //category = 'leadproduct';
        metrika = 'CHECKOUT';
    }else if(event == 'topay'){
        //category = 'leadproduct';
        metrika = 'PAY';
    }else if(event == 'cod'){
        //category = 'leadproduct';
        metrika = 'COD';
    }else if(event == 'oneclick'){
        category = 'oneclick';
        //metrika = 'COD';
    }

    if(category)
        ga('send', 'event', { eventCategory: category, eventAction: 'click'});

    if(metrika) {
        if (typeof yaCounter44403550 != 'undefined') {
            yaCounter44403550.reachGoal(metrika);
        }
    }
    console.log('sendAnalyticsEvent', event);
}