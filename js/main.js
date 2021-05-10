$(function(){
  var mixer = mixitup('.gallery__content');
  
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  
  $('.slider-blog__inner').slick({
    dots: true,
    
  });

});
