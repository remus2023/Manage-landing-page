const featuresItem = document.querySelectorAll("#featuresItem");
const featuresBox = document.querySelectorAll(".features__box");
const questionsBox = document.querySelectorAll("#questionsBox");
const questionsQuestion = document.querySelectorAll("#questionsQuestion");
const input = document.querySelector("#input");
const contactError = document.querySelector("#contactError");
const contactUs = document.querySelector("#contactUs");
const contactInfo = document.querySelector("#contactInfo");
const contactBox = document.querySelector("#contactBox");
const contactBoxInput = document.querySelector("#contactBoxInput");
const contactMessage = document.querySelector("#contactMessage");

featuresItem.forEach((item) => {
  item.addEventListener("click", function () {
    // de ce nu merge this daca pun arrow function?
    featuresItem.forEach((element) => element.classList.remove("features__item--active"));
    featuresBox.forEach((element) => element.classList.add("hide"));
    console.log(this);
    item.classList.add("features__item--active");
    const targetSection = document.getElementById(this.dataset.target);
    targetSection.classList.remove("hide");
  });
});

// questionsBox.forEach((item) => {
//   const questionsQuestion = item.querySelector("#questionsQuestion");
//   const questionsAnswer = item.querySelector("#questionsAnswer");
//   console.log(questionsQuestion, questionsAnswer);
//   questionsQuestion.addEventListener("click", function () {
//     questionsBox.forEach((element) => {
//       if (element !== item) {
//         questionsAnswer.classList.add("hide");
//       }
//       if (element === item) {
//         questionsAnswer.classList.toggle("hide");
//       }
//     });
//   });
// });

questionsQuestion.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedTag = document.getElementById(this.dataset.target);
    selectedTag.classList.toggle("hide");
    const img = item.querySelector("#questionsImg");
    console.log(img);

    selectedTag.classList.contains("hide") ? (img.src = "./images/icon-arrow.svg") : (img.src = "./images/icon-arrow-open.svg");
  });
});

contactUs.addEventListener("click", () => {
  checkInputEmail(input.value);
});
function checkInputEmail(email) {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    contactBox.classList.add("hide");
    contactInfo.classList.remove("hide");
  } else {
    contactError.classList.remove("hide");
    input.classList.add("contact__input--error");
    contactBoxInput.classList.add("contact__box-input--error");
    contactMessage.classList.remove("hide");
  }
}
