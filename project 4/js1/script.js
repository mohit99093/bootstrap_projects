$(document).ready(function() {
    lightbox.option({
        'resizeDuration': 2,
        'wrapAround': false
      });

      $(window).scroll(function() {
          let position = $(this).scrollTop();
        
          if(position >= 524)
          {
              $('.gallery').addClass('change')
          }
          else{
              $('.gallery').removeClass('change');
          }
      })

      $('.writters-accordion').click(function (e) { 
          if(event.target.id.split('-')[0] === 'button')
          {
              
              $('#book-1').attr('src', 'writers/'+event.target.id.split('-')[1]+ '-book1.jpg' );
              $('#book-2 ').attr('src', 'writers/'+event.target.id.split('-')[1]+ '-book2.jpg' );
          
          }
          
      });

      $('.hamburger-menu').click(function () { 
            $('.navi').toggleClass('change');
      });
})