//Update leeftijd in about me
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getUTCDate();
let currentAge = currentYear - 2005;
//Als het voor November is of als het in de maand November is, maar niet de 30ste is, doe -1
if (currentMonth < 10 || currentMonth == 10 && currentDay < 30){ //De waarde van 10 is gelijk aan November in plaats van 11
	currentAge -= 1;
}
const aboutMeParagraph = document.getElementById("aboutMe");
aboutMeParagraph.innerHTML = aboutMeParagraph.innerHTML.replace("%%",currentAge); //Vervang %% met de leeftijd


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
