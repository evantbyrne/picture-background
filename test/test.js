(function($) {
	describe('picture-background', function() {
		it('no sources', function() {
			$('#noSources').pictureBackground();
			expect($('#noSources').attr('style')).to.be('background-image: url("400x300.png");');
		});

		it('one source, simple srcset', function() {
			$('#oneSource').pictureBackground();
			if($(window).width() < 600) {
				expect($('#oneSource').attr('style')).to.be('background-image: url("400x300.png");');
			} else {
				expect($('#oneSource').attr('style')).to.be('background-image: url("800x600.png");');
			}
		});

		it('multiple sources, simple srcset', function() {
			$('#multipleSourcesOneMatch').pictureBackground();
			var windowWidth = $(window).width();
			if(windowWidth < 600) {
				expect($('#multipleSourcesOneMatch').attr('style')).to.be('background-image: url("400x300.png");');
			} else if(windowWidth < 800) {
				expect($('#multipleSourcesOneMatch').attr('style')).to.be('background-image: url("800x600.png");');
			} else {
				expect($('#multipleSourcesOneMatch').attr('style')).to.be('background-image: url("1000x600.png");');
			}
		});
	});
}(jQuery));
