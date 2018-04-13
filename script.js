// Dropdown menu

$( document ).ready(function() {
	// SubMenu

	$('.dropdownMenu').addClass('js');
	$('.menuItem').hide();
	$('.dropdownMenu>h3').on('click', function(){
	  $(this).next('.menuItem').slideToggle('300');
	});
});

/*

Landing banner script	

*/

var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	 showDivs(slideIndex += n);
	}

	function currentDiv(n) {
	 showDivs(slideIndex = n);
	}

	function showDivs(n) {
	 var i;
	 var x = document.getElementsByClassName("mySlides");
	 var dots = document.getElementsByClassName("move");
	 if (n > x.length) {slideIndex = 1}    
	 if (n < 1) {slideIndex = x.length}
	 for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";  
	 }
	 for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" white", "");
	 }
	 x[slideIndex-1].style.display = "block";  
	 dots[slideIndex-1].className += " white";
	}

/* 

Image gallery script

*/

var galleryIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(a) {
  showSlides(galleryIndex += a);
}

// Thumbnail image controls
function currentSlide(a) {
  showSlides(galleryIndex = a);
}

function showSlides(a) {
  var g;
  var slides = document.getElementsByClassName("hidden-gallery");
  var thumbnail = document.getElementsByClassName("thumbnail");
  var captionText = document.getElementById("caption");
  if (a > slides.length) {galleryIndex = 1}
  if (a < 1) {galleryIndex = slides.length}
  for (g = 0; g < slides.length; g++) {
    slides[g].style.display = "none";
    slides[g].style.display = "none";
  }
  for (g = 0; g < thumbnail.length; g++) {
    thumbnail[g].className = thumbnail[g].className.replace(" active", "");
  }
  slides[galleryIndex-1].style.display = "block";
  thumbnail[galleryIndex-1].className += " active";
  captionText.innerHTML = thumbnail[galleryIndex-1].alt;
}


