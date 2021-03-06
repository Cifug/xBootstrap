// JavaScript Document
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style")
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  )
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

jQuery(document).ready(function($) {
    $('.carousel').carousel({
        interval:   5000,
        pause:      "hover",
        wrap:       true
  })
});

jQuery(document).ready(function($){
    var $container = $('#xoopsgrid').masonry();
    $container.imagesLoaded( function() {
      $container.masonry();
    });
});

/* Newbb */
jQuery(document).ready(function($){
    /* Bootstrap Style: Horizontal Form */
    $(".xoopsform").find('form').addClass("form-inline");
    $(".xoopsform").find('select').addClass("form-control");
    $(".xoopsform").find('input[type="submit"]').addClass("btn btn-primary");
    $(".newbb-links").find('span').removeClass('forum_icon forum_button');
    $('.newbb-thread-attachment').find('br').remove();
    $('.newbb-thread-attachment').find('hr').remove();
})

/* Profile */
jQuery(document).ready(function($){
   $('#userinfo table, #regform table').addClass('table table-condensed table-hover').css('width','100%');
   $('.profile-form input[type="text"], .profile-form input[type="password"]').addClass('form-control');
   $('.profile-form select').addClass('form-control').css('width','100%');
   $('.profile-form textarea').addClass('form-control');
   $('.profile-form input.formButton').addClass('btn btn-primary pull-right');
});