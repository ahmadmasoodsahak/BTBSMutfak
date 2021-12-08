var slideNo = 1;
showSlides(slideNo);

function changeSlides(n) {
	showSlides(slideNo += n);
}
function textSlide(n) {
	showSlides(slideNo = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var haber = document.getElementsByClassName("haber");
	if (n > slides.length){
		slideNo = 1
	}    
	if (n < 1) {
		slideNo = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < haber.length; i++) 
	{
		haber[i].className = haber[i].className.replace(" checked", "");
	}
	slides[slideNo-1].style.display = "block";
	haber[slideNo-1].className += " checked";
}


