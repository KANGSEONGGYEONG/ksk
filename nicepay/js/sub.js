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

      $(".vertical-center").slick({
        arrows : false, 
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow : 5,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 1000, 
        pauseOnHover : true,
      });

      $('.menu a').each(function(){
      var img = $(this).find('img');
      var src_off = img.attr('src');
      var src_on = src_off.replace('off','on');

      $(this).hover(function(){img.attr('src',src_on)},
         function(){img.attr('src',src_off)});
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
     });  //tabSet
 
 var status = 1 
      $('#header .nav_btn').click(function(){
		  if (status == 1 ) {
			$(' #header nav').slideDown();
			$(this).addClass('on');
			status = 2;
		  } else {
			$(' #header nav').slideUp();
			$(this).removeClass('on');
			status = 1;
		  }
		}); //.nav_btn 
    
     $('#header .depth3 li a').click(function(){
       $(this).next().slideToggle().siblings('#header .depth4 li a').slideUp();
     });
     

      })