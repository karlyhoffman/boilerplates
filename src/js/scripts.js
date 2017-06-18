(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    //retinajs();

    //var controller = new ScrollMagic.Controller();

    //general animations
    //$( ".reveal" ).each(function( index, elem ) {
      //var fadeIn = TweenMax.fromTo(this, 0.5, {"opacity": "0"}, {"opacity": "1", ease: Power0.easeNone});
      //var revealScene = new ScrollMagic.Scene({triggerHook: "0.8", triggerElement: this}).setTween(fadeIn).addTo(controller);
    //});

    //SCROLL REVEAL
    $(window).sr = new scrollReveal({
			//reset: true,
			delay: 'onload',
			mobile: true
		});



    $("#share").jsSocials({
      shares: ["linkedin", "googleplus", "pinterest", "twitter", "facebook"],
      showLabel: false,
      showCount: false,
      shareIn: "popup",
      text: "Win one million miles from Star Alliance"
    });

    $("#share2").jsSocials({
      shares: ["linkedin", "googleplus", "pinterest", "twitter", "facebook"],
      showLabel: false,
      showCount: false,
      shareIn: "popup",
      text: "Win one million miles from Star Alliance"
    });

    $('#share-expand').click(function(e){
      $( ".sharebucket" ).toggleClass("expanded");
    });

    $('.video-slick').slick({
      nextArrow: '<div class="slick-next"><img src="assets/img/arrow-right.png" /></div>',
      prevArrow: '<div class="slick-prev"><img src="assets/img/arrow-left.png" /></div>'
    });


    $('.video-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      jQuery("iframe").each(function() {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });

    });




    $('.video-slick').fitVids();

  });

})(jQuery, window, document);
