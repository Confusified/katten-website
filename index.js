// Code om de leeftijd in de Over mij aan te passen
window.onload = function(){
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDay();
	let currentAge = currentYear - 2005;
	//Als het voor November is of als het in de maand November is, maar niet de 30ste is, doe -1
	if (currentMonth < 10 || currentMonth == 10 && currentDay != 30){ //De waarde van 10 is gelijk aan November
		currentAge -= 1;
	}
	const aboutMeParagraph = document.getElementById("aboutMe");
	let text = aboutMeParagraph.innerHTML;
	text = text.replace("%%",currentAge); //Vervang %% met de leeftijd
	aboutMeParagraph.innerHTML = text;
}