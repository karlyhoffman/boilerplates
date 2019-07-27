(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // Reveal animations
    const controller = new ScrollMagic.Controller();

    $( ".reveal" ).each(( index, elem )=> {
     const revealIn = TweenMax.fromTo(this, 0.4, { "opacity": "0", marginTop: 40 }, { "opacity": "1", marginTop:0, ease: Power0.easeNone });
     const revealScene = new ScrollMagic.Scene({triggerHook: "0.72", triggerElement: this}).setTween(revealIn).addTo(controller);
    });

    $( ".fade" ).each(( index, elem )=> {
     const fadeIn = TweenMax.fromTo(this, 0.5, {"opacity": "0"}, {"opacity": "1", ease: Power0.easeNone});
     const fadeScene = new ScrollMagic.Scene({triggerHook: "0.95", triggerElement: this}).setTween(fadeIn).addTo(controller);
    });

    $( ".reveal-stagger" ).each(( index, elem )=> {
     const animStaggerSubjects = $(elem).find('.reveal-elmt');
     const fadeStaggerIn = TweenMax.staggerFromTo(animStaggerSubjects, 0.3, {"opacity": "0", marginTop:20}, {"opacity": "1", marginTop:0, ease: Power2.easeOut}, 0.2);
     const revealStaggerScene = new ScrollMagic.Scene({triggerHook: "0.75", triggerElement: this}).setTween(fadeStaggerIn).addTo(controller);
    });

    $( ".stagger-x" ).each(( index, elem )=> {
     const animStaggerSubjects = $(elem).find('.x-elmt');
     const fadeStaggerIn = TweenMax.staggerFromTo(animStaggerSubjects, 0.4, {"opacity": "0", marginLeft:-200}, {"opacity": "1", marginLeft:-5, ease: Power2.easeOut}, 0.2);
     const revealStaggerScene = new ScrollMagic.Scene({triggerHook: "0.75", triggerElement: this}).setTween(fadeStaggerIn).addTo(controller);
    });

    $( ".line-cont" ).each(( index, elem )=> {
      const lineAnim = $(elem).find('.line');
      const lineIn = TweenMax.fromTo(lineAnim, 2, {"height": "0"}, {"height": "200%", ease: Power0.easeNone});
      const revealLine = new ScrollMagic.Scene({triggerHook: "0.7", triggerElement: elem}).setTween(lineIn).addTo(controller);
    });

  });

})(jQuery, window, document);
