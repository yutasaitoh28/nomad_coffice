$(function(){   
    $(window).scroll(function(){
    if ($(window).scrollTop() < $('#sec1').offset().top){
    $(".global-nav > .navtitle").css("color", "#fff");
    } else
    $(".global-nav > .navtitle").css("color", "#000");
    });

    $('.top-view > .arrow').click(function () {
        var p = $(".main-visual").eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
    });
    $('.one').click(function () {
        var p = $(".main-visual").eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
        });
    $('.two').click(function () {
        var _content = $('#content1');
        var _jptop = $('#jp1');
        _content.slideToggle();
        _jptop.toggleClass('show');
        var p = $("#sec1").eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
    });
    $('.three').click(function () {
        var _content = $('#content2');
        var _jptop = $('#jp2');
        _content.slideToggle();
        _jptop.toggleClass('show');
        var p = $("#forestry-industry").eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
    });
    $('.four').click(function () {
        var _content = $('#content3');
        var _jptop = $('#jp3');
        _content.slideToggle();
        _jptop.toggleClass('show');
        var p = $("#recruit-section").eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
    });
    $('.five').click(function () {
        var _content = $('#content4');
        var _jptop = $('#jp4');
        _content.slideToggle();
        _jptop.toggleClass('show');
        var p = $("#message-section").eq(0).offset().top;
        $('body,html').animate({
        scrollTop: p
        }, "swing");
        return false;
    });
    $('.six').click(function () {
        var _content = $('#content5');
        var _jptop = $('#jp5');
        _content.slideToggle();
        _jptop.toggleClass('show');
        var p = $("#company-overview").eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
    });
    $('.seven').click(function () {
        var _content = $('#content6');
        var _jptop = $('#jp6');
        _content.slideToggle();
        _jptop.toggleClass('show');
        var p = $("#contact-info").eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
    });
});

$(function() {
    var p1 = $('.p1');
    var txt_array = p1.text().split('');  
    $('.p1').html('');   
    $.each(txt_array, function(index, element) {
        var new_element = $("<span/>").text(element).css({ opacity: 0 });
        p1.append(new_element);
        new_element.delay(index * 50);
        new_element.animate({opacity: 1}, 1000);
    });

    var p2 = $('.p2');  
    var txt_array = p2.text().split('');
    $('.p2').html('');
    $.each(txt_array, function(index, element) {
        var new_element = $("<span/>").text(element).css({ opacity: 0 });
        p2.append(new_element);
        new_element.delay(index * 50);
        new_element.animate({opacity: 1}, 1000);
    });

    var p3 = $('.p3');
    var txt_array = p3.text().split('');
    $('.p3').html('');   
    $.each(txt_array, function(index, element) {
        var new_element = $("<span/>").text(element).css({ opacity: 0 });
        p3.append(new_element);
        new_element.delay(index * 50);
        new_element.animate({opacity: 1}, 1000);
    });

    var p4 = $('.p4');
    var txt_array = p4.text().split('');
    $('.p4').html('');
    $.each(txt_array, function(index, element) {
        var new_element = $("<span/>").text(element).css({ opacity: 0 });
        p4.append(new_element);
        new_element.delay(index * 50);
        new_element.animate({opacity: 1}, 1000);
    });

    $('.dropdown-btn').hover(
        function() {
        $(this).children('.dropdown').addClass('open');
        }, function() {
        $(this).children('.dropdown').removeClass('open');
        }
    );
});

$(function(){
    $('.according-list .top-wrapper').click(function(){
        $(this).next('ul').slideToggle();
        $(this).children('.japanese').toggleClass('show');
        var p = $(this).eq(0).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, "swing");
        return false;
    });
});

var _header = $('.footer-section'),
    thisOffset;
$(window).on('load',function(){
	thisOffset = $('#forestry-industry').offset().top + $('#forestry-industry').outerHeight();
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
_window.trigger('scroll');


