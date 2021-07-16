const buttons = document.querySelectorAll("button");
const slide = document.querySelector(".container");
let currentPage = 0;
buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    slide.style.transform = `translate(${(idx - currentPage) * -100}vw)`;

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i] !== idx) {
        buttons[i].classList.remove("active");
      }
    }
    button.classList.add("active");
  });
});
