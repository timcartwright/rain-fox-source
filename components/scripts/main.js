$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 50
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
        
        $('#gmap-canvas').on("mouseup",function(){          // lock it when mouse up
            $('#map').addClass('scrolloff'); 
            //somehow the mouseup event doesn't get call...
        });
        $('#gmap-canvas').on("mousedown",function(){        // when mouse down, set the mouse events free
            $('#map').removeClass('scrolloff');
        });

        $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
            $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                        // or you can do it on some other event
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
