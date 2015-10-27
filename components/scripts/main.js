
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 70
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});



	$(window).scroll(function(){
    if($(window).scrollTop() > $(window).height() - 100 ) {
       $(".navbar-default").addClass("show-navbar");
    }
    else{
       $(".navbar-default").removeClass("show-navbar");
    }
	});
});