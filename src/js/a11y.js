//creating hover and tab activation of effect
function hoverA11Y() {
$('.hover-effect').on('mouseover', function (e) {
      $(this).addClass('active');
      $(this).on('mouseout', function (e) {
          $(this).removeClass('active');
      });
  });

$('.hover-effect').focus(function() {
  $(this).addClass('active');
});

$('.info').focusout(function(){
  $('.hover-effect').removeClass('active');
});
}

hoverA11Y();

//eliminating hover effects on mobile devices
function detectMobile(){
var $isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
var $isAndroid = navigator.userAgent.match(/android/i);
if($isIOS){
  $('.hover-effect').addClass('active');
}
if($isAndroid){
  $('.hover-effect').addClass('active');
}
}

detectMobile();
