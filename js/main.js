
		 $(document).ready(function(){
		    $("#menu").on("click","a", function (event) {
		        event.preventDefault();
		        var id  = $(this).attr('href'),
		            top = $(id).offset().top;
		        $('body,html').animate({scrollTop: top}, 1000);
		    });

		    $('.lern-more-btn').on('click', () => {
		        $('.lern-more').slideToggle(100);
		    });

		    $('.js-im').on('mouseenter', () => {
	            $('.js-animation-content').show(100);
	        });

    	    $('.js-im2').on('mouseenter', () => {
                $('.js-animation-content2').show(100);
            });

		    $('.js-animation').on('mouseleave', () => {
	            $('.js-animation-content').hide(100);
	        });

    	    $('.js-animation2').on('mouseleave', () => {
                $('.js-animation-content2').hide(100);
            });
		    	$('.section1__img').on('mouseenter', () => {
			      	$('.section1__img').css("bacground-size" , "")
			    });
		});

		 $(document).ready(function() {
		 $('.post').addClass("hidden").viewportChecker({
		 classToAdd: 'visible animated fadeIn',
		 offset: 200
		 });
		 });

		function initMap() {
		  var uluru = {lat: 49.5684915, lng: 34.583184};
		  var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 14,
		    center: uluru
		  });
		  var image = './img/Pin.png';

		  var marker = new google.maps.Marker({
		    position: uluru,
		    map: map,
		    icon: image
		  });
		};

		var pullup = $("#map").outerHeight();
		$(".map-form").css("margin-top", - pullup);
		$(".map-form").css("height",  pullup);