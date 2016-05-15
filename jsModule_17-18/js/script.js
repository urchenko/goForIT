$(function() {
/*-----jCarousel-----*/
  var $jcarousel = $('.jcarousel');
  $jcarousel.jcarousel({
    wrap: 'circular'
  })
  .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  })
  .on('jcarousel:create jcarousel:reload', function() {
    var element = $(this),
      width = element.innerWidth();
      element.jcarousel('items').css('width', width + 'px');
    })
  .jcarousel({  });
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });
  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  .on('click', function(e) {
      e.preventDefault();
  })
  .jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

  $jcarousel
  .on('jcarousel:create jcarousel:reload', function() {
    var element = $(this),
    width = element.innerWidth();
    element.jcarousel('items').css('width', width + 'px');
  })
  .jcarousel({  });

/*------dropdown menu jQuery------*/
  $( '.dropdown' ).hover(
    function(){
      $(this).children('.submenu').slideDown(300, function () {
        $(this).animate({
          backgroundColor: 'rgb(255,75,75)'
        }, 400);
      });
    },
    function(){
      $(this).children('.submenu').slideUp(300, function () {
        $(this).animate({
          backgroundColor: 'rgb(255,100,100)'
        }, 400);
      });
    }
  );

});