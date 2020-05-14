$(document).ready( function () {

	"use strict";
	 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-96912365-2', 'auto');
	  ga('send', 'pageview');
		  
	var pathname = window.location.pathname;
	var cekPath = pathname.search("home.html");

	var scrollTopWindow     = $(window).scrollTop();
	if (scrollTopWindow > 30 || cekPath == -1) { 
       $(".navbarContainer").css({"background-color": "rgba(255, 255, 255,1)"});
       $("#nav-icon3 span").css({"background-color": "rgb(48, 48, 48)"});
       $("#navbar").css({"box-shadow": "rgba(0, 0, 0, 0.0980392) 0px 4px 8px"});
       $(".colTitleNav>h1>a").addClass("blackNav");
       $(".colMenuNav>ul>li>a").addClass("blackNav");
	}
	if (cekPath !== -1) {
		$(window).scroll( function() {

			/*************************
			    Navbar Animation
			*************************/ 
			var position      = $(".wrapper").offset().top;
			var scrollTop     = $(this).scrollTop();
			var opacityNavbar = scrollTop/200;

			if (scrollTop > position) { 
		       $(".navbarContainer").css({"background-color": "rgba(255, 255, 255," + opacityNavbar + ")"});
		       $("#nav-icon3 span").css({"background-color": "rgb(48, 48, 48)"});
		       $("#navbar").css({"box-shadow": "rgba(0, 0, 0, 0.0980392) 0px 4px 8px"});
		       $(".colTitleNav>h1>a").addClass("blackNav");
		       $(".colMenuNav>ul>li>a").addClass("blackNav");
			}else{
				$(".navbarContainer").css({"background-color":"transparent"});
				$("#nav-icon3 span").css({"background-color":"#fff"});
				$("#navbar").css({"box-shadow": "rgba(0, 0, 0, 0) 0px 4px 8px"});
				$(".colTitleNav>h1>a").removeClass("blackNav");
				$(".colMenuNav>ul>li>a").removeClass("blackNav");
			}

			/*************************
			         Paralax
			*************************/ 
			// var wScroll = $(this).scrollTop();
			// $(".intro-content").css({
			// 	"transform": "translate(0px," + wScroll / 8 + "%)"
			// });
		});
	}

	/*************************
	    NiceScroll
	*************************/ 

	$("html").niceScroll({
		scrollspeed: 150,
		mousescrollstep: 38,
		cursorwidth: 7,
		cursorborder: 0,
		cursorcolor: "#2f3742",
		autohidemode: true,
		zindex: 999999999,
		horizrailenabled: false,
		cursorborderradius: 0 
	});

	$(".colMenuNav").niceScroll({
		scrollspeed: 150,
		mousescrollstep: 38,
		cursorwidth: 7,
		cursorborder: 0,
		cursorcolor: "#2f3742",
		autohidemode: true,
		zindex: 999999999,
		horizrailenabled: false,
		cursorborderradius: 0 
	});
	/*************************
	   Intro typer
	*************************/
	if (cekPath !== -1) {
		var foo = $("#typer");
		foo.typer([
			"<h2>A Comfort Place In Indonesia </h2>",
			"<h2>Various Kinds of Tourist Attractions</h2>",
			"<h2>Low Budget with an Extraordinary Services</h2>"  
		]);
	}   
	      
	/*************************
	   Menu Responsive Button
	*************************/
	var menuResponsiveButton = $("#nav-icon3");
	menuResponsiveButton.on("click",function(){

		$("#nav-icon3").toggleClass("open");
		$(".colMenuNav").toggleClass("showResponsiveNav");
		$(".colTitleNav>h1>a").toggleClass("textBlackNav");
		$("#nav-icon3 span").toggleClass("spanBlackNav");

	});

	var menuLinkResponsive = $(".colMenuNav>ul>li>a ");
	menuLinkResponsive.on("click",function(){

		$("#nav-icon3").toggleClass("open");
		$(".colMenuNav").toggleClass("showResponsiveNav");
		$(".colTitleNav>h1>a").toggleClass("textBlackNav");
		$("#nav-icon3 span").toggleClass("spanBlackNav");

	});
	/*************************
	   Top Menu
	*************************/
	$(".colMenuNav ul li a").on("click", function(){
		var id = $(this).attr("href");
		var h = parseFloat($(id).offset().top);
		$("body,html").stop().animate({
			scrollTop: h - 70
		}, 800);

		return false;
	});

	$("a.buttonRowMe").on("click", function(){
		var id = $(this).attr("href");
		var h = parseFloat($(id).offset().top);
		$("body,html").stop().animate({
			scrollTop: h - 70
		}, 800);

		return false;
	});
    /*************************
	   Animated skills Bars
	*************************/
	if (cekPath !== -1) {
		$('#aboutMe').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.collumBar').animate({
				  width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '35%'
		});
	}

	/*************************
	   Init Counter
	*************************/
	if (cekPath !== -1) {
    	$('.counter').counterUp({ delay: 4, time: 1000 });
    }

    /*************************
	   OwlCarousels testimonial Start
	*************************/
	if (cekPath !== -1) {
		$('#testimonial-carousel').owlCarousel({
			loop: true,
			items: 1,
			margin: 10,
			responsiveClass: true,
			lazyLoad:true
		});
	}
	
	/*************************
	   Load google map
	*************************/
	if (cekPath !== -1) {
		var $map=$('#map');
		if ($map.length){
			google.maps.event.addDomListener(window, 'load', initMap);
			var map;
		}
		
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: -7.809691, lng: 110.362666},
				zoom: 12,
				scrollwheel: false,
				styles: [{
					"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},
					{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
					{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},
					{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},
					{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},
					{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},
					{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},
					{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},
					{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},
					{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},
					{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},
					{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},
					{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},
					{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},
					{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},
					{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},
					{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},
					{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}],
			});

			// //CREATE A CUSTOM PIN ICON
			// var marker_image = marker_image;
			// var pinIcon = new google.maps.MarkerImage(marker_image,null,null, null,new google.maps.Size(120, 90));    
		
			// var marker = new google.maps.Marker({
			//   position: new google.maps.LatLng(-7.809691,110.362666),
			//   map: map,
			//   icon: pinIcon,
			//   title: 'Hey, I am here'
			// });

		}
	}

	$("form").submit(function(event){
		event.preventDefault();
		var name = $("").val();
		var name = $("").val();
		var name = $("").val();
		var name = $("").val();
	});	

	// /* Contact form validation */
	// var $contactform=$("#contactForm");
	// $contactform.validator({focus: false}).on("submit", function (event) {
	// 	if (!event.isDefaultPrevented()) {
	// 		event.preventDefault();
	// 		submitForm();
	// 	}
	// });

	// function submitForm(){
	// 	/* Initiate Variables With Form Content*/
	// 	var name = $("#name").val();
	// 	var email = $("#email").val();
	// 	var message = $("#message").val();

	// 	$.ajax({
	// 		type: "POST",
	// 		url: "form-process.php",
	// 		data: "name=" + name + "&email=" + email + "&message=" + message,
	// 		success : function(text){
	// 			if (text == "success"){
	// 				formSuccess();
	// 			} else {
	// 				submitMSG(false,text);
	// 			}
	// 		}
	// 	});
	// }

	// function formSuccess(){
	// 	$contactform[0].reset();
	// 	submitMSG(true, "Message Sent Successfully!")
	// }

	// function submitMSG(valid, msg){
	// 	if(valid){
	// 		var msgClasses = "h3 text-center text-success";
	// 	} else {
	// 		var msgClasses = "h3 text-center text-danger";
	// 	}
	// 	$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	// }
	// /* Contact form validation end */
	
});