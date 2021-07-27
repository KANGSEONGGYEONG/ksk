$(function(){

     $(window).scroll(function(){
       //만약 scrollTop의 위치가 300보다 크면 
       if ($(document).scrollTop() >= 300) {
         $('header').css({background:'rgba(255,255,255,1)'})
       }else {
         $('header').css({background:'rgba(255,255,255,1)'})
       }
      })

      $(".depth1 > li").each(function(){
		   var sub = $(this).find('.depth2');

    	   $(this).hover(function(){
           sub.stop().slideDown();},function(){
           sub.stop().slideUp(); })
      });

      $('.tabSet').each(function(){       
      var anchor = $(this).find('.tabs a');
      var anchor_on = $(this).find('.tabs a.on');
	  var phref_on =  anchor_on.attr('phref');
	  var this_panel = $(this).find('.panel')

      $(phref_on).show();
      anchor.each(function(){
           var phref = $(this).attr('phref');
		   
            $(this).click(function(){
				this_panel.hide();
              anchor.removeClass('on'); //$('.tabs a')
              $(phref).show();
              $(this).addClass('on');

          }) //click
       }) //anchor
     }); //tabSet
   
     })
        