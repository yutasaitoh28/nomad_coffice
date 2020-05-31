$('.dropdown-btn').hover(
    function() {
    $(this).children('.dropdown').addClass('open');
    }, function() {
    $(this).children('.dropdown').removeClass('open');
    }
);

$('.our-vision > .text').each(function(){
    //一文字ずつ<span>で括る
    $(this).children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
    });
　　//inviewを使って画面に表れたら起動させる
    $(this).on('inview',function(){
        //一文字ずつ順番に不透明させる
        $(this).css({'opacity':1});
        for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(15*i).animate({'opacity':1},1200);
        };
    });
});

var _header = $('.global-nav'),
    thisOffset;
$(window).on('load',function(){
	thisOffset = $('.first-view').offset().top + $('.first-view').outerHeight();
});
$(window).scroll(function(){
    _header.hide();
	if( $(window).scrollTop() + $(window).height() > thisOffset){
        _header.show();
		_header.addClass('fixed'); 
	} else {
        _header.hide();
		_header.removeClass('fixed'); 
	}
});