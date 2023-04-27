const boxes = document.querySelectorAll(".article-me");
const media = document.getElementById("socials-animate");

let checkMedia = () => {
  const triggerBottomMedia = (window.innerHeight / 5) * 4;
  const mediaTop = media.getBoundingClientRect().top;

  if (mediaTop < triggerBottomMedia) {
    media.style.setProperty("transform", "translate(0)");
  }
};

let checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
    // else{
    //     box.classList.remove("show");
    // }
  });
};

window.addEventListener("scroll", checkBoxes);
window.addEventListener("scroll", checkMedia);
