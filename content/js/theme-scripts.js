$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.navbar').addClass('navbar-shrink');
    }
    else {
        $('.navbar').removeClass('navbar-shrink');
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('#read-more-motivation').click(function() {
  $("#read-more-motivation").hide();
  $("#more-motivation").show(500);
});

$('#read-less-motivation').click(function() {
  $("#read-more-motivation").show(500);
  $("#more-motivation").hide(500);
});

// Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin: 10,
    autowidth: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('#back-top').fadeIn();
  	} else {
  		$('#back-top').fadeOut();
  	}
  });

  // scroll body to 0px on click
  $('#back-top a').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var src = $('header').css('background-image');
var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

var img = new Image();
img.onload = function() {
    $("body").removeClass("preload");
}
img.src = url;
if (img.complete) img.onload();


//Carousel Informació academica
$('.carousel').carousel({
    interval: false,
    wrap: false
});

// get the carousel
var $carousel = $(".carousel");

// pause it
$carousel.carousel('pause');

// get right & left controls
var $rightControl = $carousel.find(".right.carousel-control");
var $leftControl = $carousel.find(".left.carousel-control");

// hide the left control (first slide)
$leftControl.hide();
var $count = 0
// get 'slid' event (slide changed)
$carousel.on('slid.bs.carousel', function() {

    // get active slide
    var $active = $carousel.find(".item.active");
    $count=($count+1)%2;

    if($count==0){
      $rightControl.fadeIn();
      $leftControl.fadeOut();
    }
    if($count==1){
      $rightControl.fadeOut();
      $leftControl.fadeIn();
    }
});
