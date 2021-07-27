$(function(){


  $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: true,
        infinite: true,
        pauseOnHover: true
  });
  
  $(".regular").slick({
        arrows:true,  
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite : true,
        pauseOnHover : true,
      });

  $(".vertical-center").slick({
        arrows : false, 
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 1000, 
        pauseOnHover : true,
      });

 /* 

   $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      }); 
*/
  $('.close').click(function(){
      $('#pop_up').slideUp(); 
          /* show/hide, slideDown/slideUp, fadeIn/fadeOut*/      
  })

  var lang = 0; /* 닫힘0, 열림1*/
  $('.top_account').click(function(){
      /* 다른 열려있는 창들을 닫거나 버튼 디자인을 제거함 */
    /* $('.top button.top_account').removeClass('on');
     $('.top div.account_box').hide();
     login = 0;
     $('.top button.search').removeClass('on');
     $('.top div.search_box').hide();
     search = 0; */

     if (lang == 0){
      $('.account_box').fadeIn();
      $(this).addClass('on');
      lang = 1;
     } else {
          $('.account_box').fadeOut();
          $(this).removeClass('on');
          lang = 0
     }
  }) //lang

})//제이쿼리 전체 끝