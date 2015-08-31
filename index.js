(function($) {
    $.fn.fader = function(options) {
        var settings = $.extend({
            delay: 2000
        }, options ); 

        var imgs = [];
        $('.fader').addClass("clearfix").css("overflow", "hidden");
        $('.fader ul').addClass("clearfix").css("padding", "0px");

        function fade(index) {
          var toHide = index === 0 ? imgs.length-1 : index-1;
          imgs[toHide].animate({opacity: 0}, settings.delay/2);
          imgs[index].animate({opacity: 1}, settings.delay/2);
          setTimeout(function() {  
            index = index === imgs.length-1 ? 0 : index+1;
            fade(index);
          }, settings.delay);
        }

        $('.fader ul li').each(function(){
          imgs.push($(this));
        });

        fade(0);
    };
 
}(jQuery));
