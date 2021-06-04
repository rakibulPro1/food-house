// back to top button work
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});


var menubar = $('#custom_nav');
    var MenuOffset = menubar.offset().top;
    $(window).on('scroll', function() {
        var WinScroll = $(window).scrollTop();
        if (WinScroll > MenuOffset) {
            menubar.addClass('menu_fixed');
        } else {
            menubar.removeClass('menu_fixed');
        }
	});
	


// 	<nav id="custom_nav" class="navbar navbar-expand fixed-top">
// 	<h3><a href="#" class="logo">Food House</a></h3>
// 	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
// 	  <span class="navbar-toggler-icon"></span>
// 	</button>
// 	<div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
// 	  <ul class="navbar-nav">
// 		<li class="nav-item active">
// 		  <a class="nav-link" href="#header">Home <span class="sr-only">(current)</span></a>
// 		</li>
// 		<li class="nav-item">
// 		  <a class="nav-link" href="#about">About</a>
// 		</li>
// 		<li class="nav-item">
// 		  <a class="nav-link" href="#">Our team</a>
// 		</li>
// 		<li class="nav-item">
// 		  <a class="nav-link" href="#products-section">Products</a>
// 		</li>
// 		<li class="nav-item">
// 			<a class="nav-link" href="#contact">Contact</a>
// 		</li>
// 		<li class="nav-item">
// 		  <a class="nav-link" href="#sign-section">Signin</a>
// 		</li>
// 		<li class="nav-item">
// 		  <a class="nav-link" href="#sign-section">Signup</a>
// 		</li>
// 	  </ul>
// 	</div>
//   </nav>