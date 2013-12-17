/*global jQuery */
/*!
* MakeMeFit.js 1.1
*
*/

(function( $ ){

  $.fn.makemefit = function( kompres,paren, options ) {

    var compressor = kompres || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      var $this = $(this);

      if(paren!=''){
            var resizer = function() {
                $this.css("font-size",Math.min(($this.parent().width()/10)*compressor,parseFloat(settings.maxFontSize)));
            };
        }else{
          if(parseFloat(settings.minFontSize)!=''){

              var resizer = function() {
                  $this.css("font-size",Math.max(Math.min(($this.width()/10)*compressor,parseFloat(settings.maxFontSize)),parseFloat(settings.minFontSize)));
              };
              console.log(($this.width()/10)*compressor);
          }else{
              var resizer = function() {
                  $this.css("font-size",Math.min(($this.width()/10)*compressor,parseFloat(settings.maxFontSize)));
              };

          }
        }


      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.makemefit orientationchange.makemefit', resizer);

    });

  };

})( jQuery );
