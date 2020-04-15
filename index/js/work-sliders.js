$(".header-branding").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.branding').fadeIn('slow');
});

$(".header-illustration").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.illustration').removeClass('hide');
    $('.illustration').fadeIn('slow');
});
$(".header-photography").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.photography').removeClass('hide');
    $('.photography').fadeIn('slow');
});
$(".header-creative").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.creative').removeClass('hide');
    $('.creative').fadeIn('slow');
});

$( document ).ready(function() {
  $(".navbar-toggle").on("click", function () {
    $(".menu-toggle").toggleClass("open");
  })
		$(".menu-toggle li a").on('click', function(){
		$(".menu-toggle").removeClass("open");

	})

  $(".work-image").hover(function(){
		$(this).find('.overlay').toggleClass('shown').fadeToggle();
		$(this).find('h4').toggleClass('shown')
    })


	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
					}
				}
		});
	});
	$(".view-more").on("click", function(){
		$(".swiper-container").fadeOut('slow');
		$("#mobile-team").fadeIn('slow', function(){
			$("#mobile-team").addClass("show");
		})
		$(".view-more").addClass("hide");

	})
});