"use strict";

const cat_btn = document.getElementById("cat-btn");
const fact_btn = document.getElementById("fact-btn");
const cat_result = document.getElementById("cat-result");
const fact_result = document.getElementById("fact-result");

cat_btn.addEventListener("click", getRandomCat);
fact_btn.addEventListener("click", getRandomFact);

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`;
    });
}

function getRandomFact() {
  console.log("fet");
  fetch("https://meowfacts.herokuapp.com/")
    .then((res) => res.json())
    .then((data) => {
      fact_result.innerHTML = `<i>${data.data.join("")}</i>`;
    });
}

getRandomCat();
getRandomFact();

