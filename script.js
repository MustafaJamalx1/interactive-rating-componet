"use strict";
const children = document.querySelector(".rating").children;
// ratings function
const pageNum = function (str) {
  document.querySelector(`.${str}`).addEventListener("click", function () {
    const oldActive = document.querySelector(".rating").children;
    if (document.querySelector(".selected-rating")) {
      for (let i = 0; i < oldActive.length; i++) {
        oldActive[i].classList.remove("selected-rating");
      }
    }
    document.querySelector(`.${str}`).classList.toggle("selected-rating");
  });
};
// function assigning
for (let i = 0; i < children.length; i++) {
  //   console.log(children[i].classList[1]);
  pageNum(`${children[i].classList[1]}`);
}
// pageNum("second");
// pageNum("third");
// pageNum("fourth");
// pageNum("fith");
//
//
//
// ***********
// submit btn
document.querySelector(".btn").addEventListener("click", function () {
  if (document.querySelector(".selected-rating")) {
    document.querySelector(".rating-page").style.display = "none";
    document.querySelector(".thank-page").style.display = "flex";
    const ratingNum = document.querySelector(".selected-rating").textContent;
    document.querySelector(".num-of-rating").textContent = ratingNum;
  } else {
    alert("choose a rating");
  }
});

// number of ratings
