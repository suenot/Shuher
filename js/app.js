$(document).ready(function(){

	// var filters = document.querySelector(".filters"), // the SVG that contains the filters
	// 	defs = filters.querySelector("defs"), // the  element inside the SVG
	// 	blur = defs.querySelector("#blur"), // the blur filter
	// 	blurFilter = blur.firstElementChild; // the feGaussianBlur primitive
	// blurFilter.setAttribute("stdDeviation","12,0");

	$(document).mousemove(function(e){
		var X = e.pageX;
		var Y = e.pageY;
		if ($('#target').css('left').slice(0,-2) < X) {
			$('#target').css('transform', 'scaleX(-1)');
		} else {
			$('#target').css('transform', 'scaleX(1)');
		}
		$('#target').css('left', X);
		$('#target').css('top', Y);
	});

});