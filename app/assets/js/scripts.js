/*!
 * ProjectName
 * Project Title
 * https://karlyhoffman.com
 * @author Karly Hoffman
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
"use strict";

(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // Reveal animations
    var controller = new ScrollMagic.Controller();

    $(".reveal").each(function (index, elem) {
      var revealIn = TweenMax.fromTo(this, 0.4, { "opacity": "0", marginTop: 40 }, { "opacity": "1", marginTop: 0, ease: Power0.easeNone });
      var revealScene = new ScrollMagic.Scene({ triggerHook: "0.72", triggerElement: this }).setTween(revealIn).addTo(controller);
    });

    $(".fade").each(function (index, elem) {
      var fadeIn = TweenMax.fromTo(this, 0.5, { "opacity": "0" }, { "opacity": "1", ease: Power0.easeNone });
      var fadeScene = new ScrollMagic.Scene({ triggerHook: "0.95", triggerElement: this }).setTween(fadeIn).addTo(controller);
    });

    $(".reveal-stagger").each(function (index, elem) {
      var animStaggerSubjects = $(elem).find('.reveal-elmt');
      var fadeStaggerIn = TweenMax.staggerFromTo(animStaggerSubjects, 0.3, { "opacity": "0", marginTop: 20 }, { "opacity": "1", marginTop: 0, ease: Power2.easeOut }, 0.2);
      var revealStaggerScene = new ScrollMagic.Scene({ triggerHook: "0.75", triggerElement: this }).setTween(fadeStaggerIn).addTo(controller);
    });

    $(".stagger-x").each(function (index, elem) {
      var animStaggerSubjects = $(elem).find('.x-elmt');
      var fadeStaggerIn = TweenMax.staggerFromTo(animStaggerSubjects, 0.4, { "opacity": "0", marginLeft: -200 }, { "opacity": "1", marginLeft: -5, ease: Power2.easeOut }, 0.2);
      var revealStaggerScene = new ScrollMagic.Scene({ triggerHook: "0.75", triggerElement: this }).setTween(fadeStaggerIn).addTo(controller);
    });

    $(".line-cont").each(function (index, elem) {
      var lineAnim = $(elem).find('.line');
      var lineIn = TweenMax.fromTo(lineAnim, 2, { "height": "0" }, { "height": "200%", ease: Power0.easeNone });
      var revealLine = new ScrollMagic.Scene({ triggerHook: "0.7", triggerElement: elem }).setTween(lineIn).addTo(controller);
    });
  });
})(jQuery, window, document);