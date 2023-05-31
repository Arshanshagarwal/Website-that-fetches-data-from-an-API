// "use strict";
//
// const cat_btn = document.getElementById("cat-btn");
// const fact_btn = document.getElementById("fact-btn");
// const cat_result = document.getElementById("cat-result");
// const fact_result = document.getElementById("fact-result");
//
// cat_btn.addEventListener("click", getRandomCat);
// fact_btn.addEventListener("click", getRandomFact);
//
// async function getRandomCat() {
//     try {
//         const response = await fetch("https://cataas.com/c");
//         const blob = await response.blob();
//         const imageURL = URL.createObjectURL(blob);
//
//         cat_result.innerHTML = `<img src="${imageURL}" alt="cat" />`;
//         localStorage.setItem("catPicture", imageURL);
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// async function getRandomFact() {
//     try {
//         const response = await fetch("https://meowfacts.herokuapp.com/");
//         const data = await response.json();
//
//         if (data.data) {
//             fact_result.innerHTML = `<i>${data.data}</i>`;
//             localStorage.setItem("catFact", data.data);
//         } else {
//             fact_result.innerHTML = "<i>No cat fact available</i>";
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// getRandomCat();
// getRandomFact();

"use strict";

const cat_btn = document.getElementById("cat-btn");
const fact_btn = document.getElementById("fact-btn");
const fact_result = document.getElementById("fact-result");
const cat_image = document.getElementById("cat-image");

cat_btn.addEventListener("click", getRandomCat);
fact_btn.addEventListener("click", getRandomFact);

async function getRandomCat() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();

        if (data && data.length > 0) {
            const imageUrl = data[0].url;
            cat_image.src = imageUrl;
            localStorage.setItem("catPicture", imageUrl);
        }
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

