;
(($) => {
	'use strict';
	$(document).foundation();

	$(document).ready( function () {

		$('.am-goods__container').mCustomScrollbar({
			mouseWheel:{ scrollAmount: 400 }
		});
		$('.am-presents__container').mCustomScrollbar({
			scrollbarPosition: "outside",
			mouseWheel:{ scrollAmount: 250 }
		});

		var showChar = 80;  // How many characters are shown by default
		var ellipsestext = "...";
		var moreRead = "Read More »";
		var lessRead = "Read Less «";

		$('.am-user').on('click', '.am-user__link', function(event) {

			var a = "Read Less «";
			var b = $(".am-user__link").html();

			var contHeight = $(".am-goods__container").height();
			var setContHeight;

			var height = $('#mCSB_1').height();
			var setHeight;

			event.preventDefault();

			

			if ( $(".am-user__content").width() > 193 || $(".am-user__content").width() <= 167 ) {
				
				if ( a != b) {

					setContHeight = contHeight + 50;
					setHeight = height + 50;

					$('.am-goods__container').css({
						maxHeight: setContHeight,
					});
					$('#mCSB_1').css({
						maxHeight: setHeight,
					});
				}

				if ( a == b ) {
					setContHeight = contHeight - 50;
					setHeight = height - 50;

					$('.am-goods__container').css({
						maxHeight: setContHeight,
					});
					$('#mCSB_1').css({
						maxHeight: setHeight,
					});
				}
			} else {
				if ( a != b) {

					setContHeight = contHeight + 25;
					setHeight = height + 25;

					$('.am-goods__container').css({
						maxHeight: setContHeight,
					});
					$('#mCSB_1').css({
						maxHeight: setHeight,
					});
				}

				if ( a == b ) {
					setContHeight = contHeight - 25;
					setHeight = height - 25;

					$('.am-goods__container').css({
						maxHeight: setContHeight,
					});
					$('#mCSB_1').css({
						maxHeight: setHeight,
					});
				}
			}
			
		});

		$('.am-user__content').each(function() {
			var content = $(this).html();

			if(content.length > showChar) {

				var c = content.substr(0, showChar);
				var h = content.substr(showChar, content.length - showChar);

				var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span>\
				<span class="am-user__content--more">' + h + '</span><a href="#read" class="am-user__link">' + moreRead + '</a>';
				$(this).html(html);
			}
		});

		$(".am-user__link").click(function(){
			if($(this).hasClass("less")) {
				$(this).removeClass("less");
				$(this).html(moreRead);
			} else {
				$(this).addClass("less");
				$(this).html(lessRead);
			}
			$(this).prev().prev().toggle();
			$(this).prev().toggle();
		});


		$( ".am-goods__container" ).on('click', '.am-menu__options', function() {
			if ($(this).parents('.am-goods__wrapper').hasClass('open')) {
				$(this).parents('.am-goods__wrapper').removeClass('open');
				$(this).parents('.am-goods__wrapper').animate({ marginBottom: "23px" }, 300 );
			} else {
				$(this).parents('.am-goods__wrapper').addClass('open');
				$(this).parents('.am-goods__wrapper').animate({marginBottom: "72px"}, 300);
			}
			$(this).parents('.am-goods__wrapper').find('.am-menu__item--options').slideToggle( "slow" );
		});

		$('.am-goods__container').on('click', '.am-menu__remove', function() {
			var id = $(this).parents(".am-goods__wrapper").data("id");
			$('.am-presents').find('.am-presents-added[data-id="'+ id +'"]').removeClass('added');
			$('.am-presents').find('.am-presents-added[data-id="'+ id +'"]').animate({opacity: "0"}, 300);
			$(this).parents('.am-goods__wrapper').remove();
		});

		$('.am-presents').on('click', '.am-presents__item', function() {
			if ( !$(this).find('.am-presents-added').hasClass('added') ) {
				var id = $(this).attr("id");
				var type = $(this).data("type");
				var image = $(this).find('.am-presents__image').attr('src');
				var price = $(this).data("price");
				var by = $(this).data("by");
				$(this).find('.am-presents-added').addClass('added');
				$(this).find('.am-presents-added').animate({opacity: "0.95"}, 300);
				createWishlistItem(id, type, image, price, by);
			}
		});

	function createWishlistItem(id, type, image, price, by) {
		$('<div class="am-goods__wrapper" data-id = '+ id +'>\
				<div class="am-goods__background">\
					<img src="'+ image +'" alt="icon" class="am-goods__icon">\
					<img src="assets/img/clip_2.png" alt="clip" class="am-goods__clip am-goods__clip--2">\
				</div>\
				<div class="am-goods__description">\
					<p class="am-goods__sort"> '+ type +' </p>\
					<p class="am-goods__price">Best Price: '+ price +'</p>\
					<p class="am-goods__seller">By: \
						<a href="https://www.amazon.com/" class="am-goods__link">\
							<img src="'+ by +'" alt="seller">\
						</a>\
					</p>\
				</div>\
				<div class="am-menu">\
					<button class="am-menu__view">\
						<svg class="am-menu__view-icon" xmlns="http://www.w3.org/2000/svg" width="18.781" height="19.5" viewBox="0 0 18.781 19.5">\
							<path style="fill: #d93655;\
							fill-rule: evenodd;"\
							class="cls-1" d="M987.7,562.776a9.039,9.039,0,0,1-3.392,1.033c-3.993,0-7.071-3.618-7.071-7.611a6.88,6.88,0,0,1,7.071-6.972c3.993,0,7.611,2.979,7.611,6.972a8.263,8.263,0,0,1-1.769,4.6l5.608,5.264a0.844,0.844,0,0,1,0,1.2l-1.195,1.195a0.846,0.846,0,0,1-1.2,0Zm-3.08-11.2a4.9,4.9,0,1,1-4.9,4.9A4.9,4.9,0,0,1,984.623,551.577Z" transform="translate(-977.25 -549.219)"/>\
						</svg>\
						View item\
					</button>\
					<ul class="am-menu__list">\
						<li class="am-menu__item">\
							<button class="am-menu__options am-menu__button">\
								More options\
								<svg class="am-menu__options-icon" xmlns="http://www.w3.org/2000/svg" width="8.62" height="6.219" viewBox="0 0 8.62 6.219">\
									<path style="fill: #d93655;\
									fill-rule: evenodd;\
									opacity: 0.95;\
									mix-blend-mode: multiply; " d="M1229.46,562.24l-4.31-6.205h8.63Z" transform="translate(-1225.16 -556.031)"/>\
								</svg>\
							</button>\
						</li>\
						<li class="am-menu__item am-menu__item--options">\
							<button class="am-menu__button am-menu__remove">\
								<svg class="am-menu__remove-icon" xmlns="http://www.w3.org/2000/svg" width="18.72" height="18.75" viewBox="0 0 18.72 18.75">\
									<path style="fill: #d93655;\
									fill-rule: evenodd;" d="M1118.2,589.856a9.363,9.363,0,1,1-9.36,9.362A9.361,9.361,0,0,1,1118.2,589.856Zm4.9,6.406-1.93-1.934-2.9,2.9-2.89-2.9-1.94,1.934,2.9,2.9-2.9,2.9,1.94,1.934,2.89-2.9,2.9,2.9,1.93-1.934-2.89-2.9Z" transform="translate(-1108.84 -589.844)"/>\
								</svg>\
								Remove item\
							</button>\
						</li>\
						<li class="am-menu__item am-menu__item--options">\
							<button class="am-menu__button">\
								<svg class="am-menu__re-assign-icon" xmlns="http://www.w3.org/2000/svg" width="14.85" height="13.562" viewBox="0 0 14.85 13.562">\
									<path style="fill: #d93655;\
									fill-rule: evenodd;" d="M1117.89,635.833s-8.2-6.3-8.67,3.2c0,0-.81-4.271,1.69-5.8,0,0,2.9-2.815,7.72.073l0.47-2.25,3.41,5.635-5.5,1.188A15.755,15.755,0,0,0,1117.89,635.833Zm-2.78,4.334s8.3,6.114,8.73-3.261c0,0,.75,4.334-1.75,5.865,0,0-2.9,2.815-7.71-.073l-0.67,1.937-2.78-5.291,4.81-1.469S1115.28,639.521,1115.11,640.167Z" transform="translate(-1109.09 -631.063)"/>\
								</svg>\
								Re-assign item\
							</button>\
						</li>\
					</ul>\
				</div>\
			</div>').appendTo('.am-goods__cont');
	}
});
})(jQuery);