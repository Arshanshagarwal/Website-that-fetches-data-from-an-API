"use strict";

// Variables to declare a constant (unchanging) variable

const cat_btn = document.getElementById("cat-btn");
const fact_btn = document.getElementById("fact-btn");
const fact_result = document.getElementById("fact-result");
const cat_image = document.getElementById("cat-image");

// Get random cat pictures when a user clicks a button

cat_btn.addEventListener("click", async () => {
    await getRandomCat();
});

// Get random cat facts when a user clicks a button

fact_btn.addEventListener("click", async () => {
    await getRandomFact();
});

// Get random cat pictures

async function getRandomCat() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();

        if (data && data.length > 0) {
            const imageUrl = data[0].url;
            cat_image.src = imageUrl;

            //  Store the cat picture URL in localStorage
            localStorage.setItem("catPicture", imageUrl);
        }
    } catch (error) {
        console.log(error);
    }
}

// Get random cat facts

async function getRandomFact() {
    try {
        const response = await fetch("https://meowfacts.herokuapp.com/");
        const data = await response.json();

        if (data.data) {
            fact_result.innerHTML = `<i>${data.data}</i>`;

            // Store the cat fact in localStorage
            localStorage.setItem("catFact", data.data);
        } else {
            fact_result.innerHTML = "<i>No cat fact available</i>";
        }
    } catch (error) {
        console.log(error);
    }
}

// Initially display a random cat photo and a random fact when the page loads

getRandomCat();
getRandomFact();
