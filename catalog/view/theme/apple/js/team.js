$(function() {

  $('.product-layout > .product-thumb').each(function(e) {
    e +=1;
    $(this).find('.button-group .button:firts').after('<a class="button toclick" href="#pp-item-' + e +'">');
  });

});
