(function($) {
	$.fn.pictureBackground = function() {

		return this.each(function() {

			var that = $(this),
			    picture = that.find('> picture'),
			    img = picture.find('> img'),
			    sources = picture.find('> source');

			var resizeEvent = function() {

				var match = false;

				if(picture.length) {

					if(sources.length) {
						sources.each(function() {
							if(!match) {
								if(window.matchMedia($(this).attr('media')).matches) {
									match = true;
									that.css('background-image', 'url(' + $(this).attr('srcset') + ')');
								}
							}
						});
					}

					if(!match && img.length) {
						that.css('background-image', 'url(' + img.attr('src') + ')');
					}
				}
			};

			$(window).resize(resizeEvent);
			resizeEvent();
		});
	};
}(jQuery));
