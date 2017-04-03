$(function() {

  $('.product-layout > .product-thumb').each(function(e) {

    e +=1;

    var img_url = $(this).find('.img-responsive').attr('src'),
        item_name = $(this).find('h4 a').text(),
        item_price = $(this).find('.price').html(),
        admin = $('#callback [name=admi_email]').val();

    $(this).after('\
    <div id="pp-item-' + e + '" class="product-popup">\
      <h2>Buy Now</h2>\
      <div class="pp-img-wrap"><img src="' + img_url + '" alt="iPhoneservice"></div> \
      <div class="pp-content"> \
        <h3>' + item_name + '</h3> \
        <p>' + item_price +'</p> \
        <form class="ajax-form"> \
          <input type="hidden" name="project_name" value="iPhoneservice"> \
          <input type="hidden" name="admin_email" value="' + admin +'"> \
          <input type="hidden" name="form_subject" value="Call back from iPhoneservice"> \
          <input type="hidden" name="product" value="' + item_name +'"> \
          <input class="form-control" type="text" name="Phone" placeholder="Your phone is..." required> \
          <button class="btn btn-primary">Send</button> \
        </form> \
        <div class="succes">Thank you for request</div> \
      </div> \
    </div>');

    $(this).find('.button-group').append('<a class="button toclick" href="#pp-item-' + e + '"> Buy Now</a>');
    $(this).parent().attr({
      'class': 'product-layout col-lg-4 col-md-4 col-sm-6 col-xs-12'
    });
  });

  $('.product-thumb h4').css('height', '').equalHeights();

  $('.toclick, .callback').magnificPopup({
    mainClass: 'mfp-zoom-in',
    removalDelay: 500
  });

  //E-mail Ajax Send
	$(".ajax-form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "catalog/view/theme/apple/mail.php",
			data: th.serialize()
		}).done(function() {
			var pp_suc = th.closest('.product-popup').find('.succes');
      pp_suc.fadeIn();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
        pp_suc.fadeOut();
        $.magnificPopup.close()
			}, 4000);
		});
		return false;
	});




});
