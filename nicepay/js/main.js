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


      $(".regular").slick({
          arrows:false,  
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite : true,
          pauseOnHover : true,
      });

          var lang = 0; /* 닫힘0, 열림1*/
        $('.top_account').click(function(){

        if (lang == 0){
          $('.account_box').fadeIn();
          $(this).addClass('on');
          lang = 1;
        } else {
              $('.account_box').fadeOut();
              $(this).removeClass('on');
              lang = 0
        }
      });

       var lang = 0; /* 닫힘0, 열림1*/
        $('.top_search').click(function(){

        if (lang == 0){
          $('.list_box').fadeIn();
          $(this).addClass('on');
          lang = 1;
        } else {
              $('.list_box').fadeOut();
              $(this).removeClass('on');
              lang = 0
        }
      });

      $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      
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