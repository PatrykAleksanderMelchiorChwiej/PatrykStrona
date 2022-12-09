

const imie = prompt("Podaj imię, człowiecze.");
console.log(imie);
alert("Twoje imie to: \'" + imie + '\'');


const title = document.querySelector("h1");
title.textContent += " - witaj " + imie + ".";

const heading = document.querySelector("h3");
heading.textContent = "Kraków - moje miasto";

const pierwszy = document.querySelector(".pierwszy-akapit");
pierwszy.textContent = "JS tu był.";
