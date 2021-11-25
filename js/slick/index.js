const introSection = document.querySelector(".section_intro");
const height = introSection.offsetHeight;
const btnScroll = document.querySelector(".btn_scroll");

btnScroll.addEventListener("click", function () {
  window.scrollTo({
    top: height,
    left: 0,
    behavior: "smooth",
  });
});
//  + window.scrollY
