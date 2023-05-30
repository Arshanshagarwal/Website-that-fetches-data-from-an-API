"use strict";

// Variables to declare a constant (unchanging) variable

const cat_btn = document.getElementById("cat-btn");
const fact_btn = document.getElementById("fact-btn");
const cat_result = document.getElementById("cat-result");
const fact_result = document.getElementById("fact-result");

// Get random cat pictures when a user clicks a button
cat_btn.addEventListener("click", getRandomCat);

// Get random cat facts when a user clicks a button
fact_btn.addEventListener("click", getRandomFact);

// Get random cat pictures

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat"/>`;

        // Store the cat picture URL in localStorage
      localStorage.setItem("catPicture", data.file());
    });
}

// Get random cat facts 

function getRandomFact() {
  fetch("https://meowfacts.herokuapp.com/")
    .then((res) => res.json())
    .then((data) => {
      fact_result.innerHTML = `<i>${data.data.join("")}</i>`;

        // Store the cat fact in localStorage
      localStorage.setItem("catFact", data.data.join(""));
    });
}

getRandomCat();
getRandomFact();

