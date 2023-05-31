"use strict";

const cat_btn = document.getElementById("cat-btn");
const fact_btn = document.getElementById("fact-btn");
const cat_result = document.getElementById("cat-result");
const fact_result = document.getElementById("fact-result");

cat_btn.addEventListener("click", getRandomCat);
fact_btn.addEventListener("click", getRandomFact);

async function getRandomCat() {
    try {
        const response = await fetch("https://cataas.com/c");
        const blob = await response.blob();
        const imageURL = URL.createObjectURL(blob);

        cat_result.innerHTML = `<img src="${imageURL}" alt="cat" />`;
        localStorage.setItem("catPicture", imageURL);
    } catch (error) {
        console.log(error);
    }
}

async function getRandomFact() {
    try {
        const response = await fetch("https://meowfacts.herokuapp.com/");
        const data = await response.json();

        if (data.data) {
            fact_result.innerHTML = `<i>${data.data}</i>`;
            localStorage.setItem("catFact", data.data);
        } else {
            fact_result.innerHTML = "<i>No cat fact available</i>";
        }
    } catch (error) {
        console.log(error);
    }
}

getRandomCat();
getRandomFact();

