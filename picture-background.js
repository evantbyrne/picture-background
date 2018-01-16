export default function(el) {

	var picture = el.querySelector('picture');

	if(picture) {
		var img = picture.querySelector('img'),
		    sources = picture.querySelectorAll('source');

		var resizeEvent = function() {

			var match = false;

			if(sources.length) {

				for(var i = 0; i < sources.length; i++) {
					if(!match) {
						if(window.matchMedia(sources[i].getAttribute('media')).matches) {
							match = true;
							el.style.backgroundImage = 'url(' + sources[i].getAttribute('srcset') + ')';
						}
					}
				}
			}

			if(!match && img) {
				el.style.backgroundImage = 'url(' + img.getAttribute('src') + ')';
			}
		};

		window.addEventListener('resize', resizeEvent);
		resizeEvent();
	}
};
