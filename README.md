# picture-background

Converts picture tags into background-image CSS styles. Updates with window resize events, just like `<picture>` does by default.

## Motivation

One solution to help fulfill three needs:

1. Background cover styling.
2. Conditional image loading.
3. Meaningful and accessible HTML markup.

## Requirements

1. Browser support for [matchMedia](http://caniuse.com/#search=matchMedia).
2. jQuery (vanilla support planned).

## Installation Options

* Download .zip from Github.
* [NPM](https://www.npmjs.com/package/picture-background).

## Usage

HTML:

	<div id="parentOfPicture">
		<picture>
			<source srcset="800x600.png" media="(min-width: 600px)" />
			<img alt="placeholder" src="400x300.png" />
		</picture>
	</div>


jQuery:

	$('#parentOfPicture').pictureBackground();


Output if window width < 600px:

	<div id="parentOfPicture" style="background-image: url("400x300.png");">
		<picture>
			<source srcset="800x600.png" media="(min-width: 600px)" />
			<img alt="placeholder" src="400x300.png" />
		</picture>
	</div>


Output otherwise:

	<div id="parentOfPicture" style="background-image: url("800x600.png");">
		<picture>
			<source srcset="800x600.png" media="(min-width: 600px)" />
			<img alt="placeholder" src="400x300.png" />
		</picture>
	</div>
