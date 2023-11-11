// Code om de leeftijd in de Over mij aan te passen - index.html
function onLoad(){
	if (typeof document.getElementById("aboutMe") !== "undefined" && document.getElementById("aboutMe") !== null)  { //onload script voor index.html
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth();
		const currentDay = currentDate.getDay();
		let currentAge = currentYear - 2005;
		//Als het voor November is of als het in de maand November is, maar niet de 30ste is, doe -1
		if (currentMonth < 10 || currentMonth == 10 && currentDay != 30){ //De waarde van 10 is gelijk aan November in plaats van 11
			currentAge -= 1;
		}
		const aboutMeParagraph = document.getElementById("aboutMe");
		let text = "Mijn naam is Rogier en ik ben %% jaar oud. " + 
					"Ik heb gekozen om mijn website over mijn katten te houden, " + 
					"omdat ik heel veel van katten houd en vooral van mijn eigen katten.";
		text = text.replace("%%",currentAge); //Vervang %% met de leeftijd
		aboutMeParagraph.innerHTML = text;
	}
	else if (typeof document.getElementById("hannahParagraph") !== "undefined" && document.getElementById("hannahParagraph") !== null) { //onload script voor hannah.html
		showSlide(slideIndex = 1);
	}
}
window.onload = onLoad;

function toggleAboutMe(){
	const container = document.getElementById("container-AboutMe");
	const button = document.getElementById("buttonAboutMe");
	if (container.style.display == "block") {
		container.style.display = "none";
		button.innerHTML = "Klik hier om over mij te lezen";
	}
	else {
		container.style.display = "block";
		button.innerHTML = "Klik hier om niet meer over mij te lezen";
	}
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slideFade");
  const dots = document.getElementsByClassName("imageDot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
