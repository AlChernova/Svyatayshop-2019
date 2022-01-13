jQuery(document).ready(function (e) {
	// управление товаром в мобильной корзине 
	$(document).on("click", ".link_mobile_selects", function () {
        $("body").addClass("no_scroll");
        $(".overlay").addClass("active-long")
        var _this = $(this).closest('.row_basket');
        $(_this).find(".box_select_fixed_mobile").addClass("active");
    });
	$(document).on("touchstart click", ".overlay", function () {
        $("body").removeClass("no_scroll");
        $(".box_select_fixed_mobile").removeClass("active");
        $(".overlay").removeClass("active-long")
    });

    //удалить из корзины 
	$(document).on("click", ".box_select_fixed_mobile .delete, .links_desctop .close", function () {
        $("body").removeClass("no_scroll");
        $(".box_select_fixed_mobile").removeClass("active");
        $(".overlay").removeClass("active-long");
        var _this = $(this).closest('.row_basket');
        var _height = $(_this).height();
        $(_this).append(function() {
        	return "<div class='txt_delete'>Товар удален</div>";
    	}).css('height', _height);
        setTimeout(function () {
            $(_this).addClass('item_delete').delay(1000).queue(function () {
            	$(this).addClass('item_delete_hide').dequeue();
            })
            .delay(1000).queue(function () {
            	$(this).remove().dequeue();
            })
        }, 300);
    }); 

    // перенести в избранное
    $(document).on("click", ".box_select_fixed_mobile .add_like, .links_desctop .likes", function () {
        $("body").removeClass("no_scroll");
        $(".box_select_fixed_mobile").removeClass("active");
        $(".overlay").removeClass("active-long");
        var _this = $(this).closest('.row_basket');
        var _height = $(_this).height();  
        $(_this).append(function() {
        	return "<div class='txt_favs'>Товар добавлен в избранное</div>";
    	}).css('height', _height);  
    	setTimeout(function () {
    		$(_this).addClass('add_favs').delay(1500).queue(function () {
            	$(this).addClass('add_favs_hide').dequeue();
            })
            .delay(1000).queue(function () {
            	$(this).remove().dequeue();
            });
    	}, 300);	
    });

    $(document).on("click", ".dopskidki .title a", function(){
    	$(this).closest(".title").fadeOut().next(".content_form").delay(300).slideDown();
    });
    $(document).on("click", ".dopskidki .content_form .close", function(){
    	$(this).closest(".content_form").slideUp().prev(".title").delay(300).fadeIn();
    });
});