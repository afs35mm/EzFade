(function($) {
    $.fn.EzFade = function(options) {
    	var settings = $.extend({
            duration: 3000,
            parentName: 'EzFade',
            elmName: 'EzFadeElm',
            fadeSpeed: 1000,
            width: '660',
            height: '400',
            position: 'relative'
        }, options);        
        $(this).each(function(){
            var self = $(this),
                elmID = self.attr('id');
            self.css({
                'width' : settings.width,
                'height' : settings.height,
                'position': settings.position, 
                'overflow': 'hidden'
            }).addClass(settings.parentName);
            var containerHeight = self.height(),
                containerWidth = self.width();
                ratio = containerWidth / containerHeight;
            self.children('img').each(function(pos,value){
                var elm = $(this);
                console.log(pos,value);
                elm.load(function(){
                    var elmRatio = elm.width() / elm.height();
                    if( ratio <= elmRatio){
                        elm.css('height', containerHeight)
                        .css( 'left', -(elm.width() - containerWidth) / 2 );
                    }else if (ratio > elmRatio ){
                       elm.css('width', containerWidth)
                       .css( 'top', -(elm.height() - containerHeight) / 2 );
                    }
                });
                if(pos == 0){
                    elm.addClass(settings.elmName).css({
                        'position':'absolute',
                    });
                }else{
                    elm.addClass(settings.elmName).css({
                        'position':'absolute',
                        'opacity' : '0'
                    });
                }
            });
            setInterval(function(){
                self.children(":first")
                    .animate({'opacity':0},settings.fadeSpeed)
                    .next('img')
                    .animate({'opacity':100},settings.fadeSpeed)
                    .end()
                    .appendTo('#' + elmID);
            },settings.duration); 
        });
        return this;
    }
}(jQuery));