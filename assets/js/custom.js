$("#ContactButton").click(function () {
    $header = $(this);
	$content = $("#ContactSection");
	
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : $("#ContactText").text();
        });
    });

});


// $("#ContactFrame").on('load', function () {
//     $content = $("#ContactSection");
//     // $content.slideToggle(500)
// });



$(document).ready(function(){
	$('.customer-logos').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
			pauseOnHover: true,
			responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 2
			}
		}]
	});
});