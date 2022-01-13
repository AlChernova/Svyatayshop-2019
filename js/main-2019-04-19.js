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