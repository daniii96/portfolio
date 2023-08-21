// toggle button
function goToScroll(name) {
  var location = document.querySelector("#" + name).offsetTop;
  window.scrollTo({ top: location, behavior: 'smooth' });
}

// website button
$('.website_design a').click(function(){
  $(this).parents('section').children($('div').eq(1)).fadeIn();
});
$('section button').click(function(){
  $(this).parents('.popup_wrap').fadeOut();
});

// graphic design popup
// $('#graphic_design ul li a').click(function(){
//   $(this).parents('section').children($('div').eq(1)).fadeIn();
// });
// $('.button_close button').click(function(){
//   $(this).parents('.banner_wrap').fadeOut();
// });

$(function(){
  // 이미지 클릭시 해당 이미지 모달
  $("#graphic_design ul li a").click(function(){
      // let img = new Image();
      // img.src = $(this).children('div').children('img').attr("src")
      // $('.img_wrap').html(img);
      $(this).siblings('div').show();
  });
  // 모달 클릭할때 이미지 닫음
  $(".banner_wrap button").click(function (e) {
    $(".banner_wrap").toggle();
  });
});

// aside menu
$(".menu ul li a").on('click',function(){
  $(".menu ul li div").slideUp(100);
  $(this).nextAll("div").slideDown(100); 
});
