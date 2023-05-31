"use strict";

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
    fetch("https://cataas.com/c")
        .then((res) => {
            cat_result.innerHTML = `<img src="${res.url}" alt="cat"/>`;

            // Store the cat picture URL in localStorage
            localStorage.setItem("catPicture", res.url);
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

// Check if cat picture is stored in localStorage
if (localStorage.getItem("catPicture")) {
    cat_result.innerHTML = `<img src="${localStorage.getItem("catPicture")}" alt="cat"/>`;
}

getRandomCat();
getRandomFact();


