$(function(){

  $('.close').click(function(){
      $('#pop_up').slideUp();    
  })

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
  }) //lang

})//제이쿼리 전체 끝