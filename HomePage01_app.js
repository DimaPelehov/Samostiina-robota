// відкривання мобільного меню
const bodyWrapper = document.querySelector("body");
const menuBtn = document.querySelector(".tn-menu-btn");
const mobMenu = document.querySelector(".mob-menu");

menuBtn.addEventListener("click", function () {
  mobMenu.classList.toggle("active");
  bodyWrapper.classList.toggle("stop-scroll");
});

// mob-menu accordion
const mobMenuTitles = document.querySelectorAll(".mma-title");
const mobMenuContents = document.querySelectorAll(".mma-column");

mobMenuTitles.forEach((item) =>
  item.addEventListener("click", () => {
    let pressContent = document.querySelector("#" + item.dataset.tab);

    if (pressContent.classList.contains("press")) {
      pressContent.classList.remove("press");
      item.classList.remove("press");
      pressContent.style.maxHeight = 0;
    } else {
      mobMenuContents.forEach((element) => {
        element.classList.remove("press");
        element.style.maxHeight = 0;
      });

      mobMenuTitles.forEach((element) => element.classList.remove("press"));

      item.classList.add("press");
      pressContent.classList.add("press");
      pressContent.style.maxHeight = pressContent.scrollHeight + "px";
    }
  })
);
