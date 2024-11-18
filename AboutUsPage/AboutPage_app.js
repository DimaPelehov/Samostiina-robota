document.addEventListener("DOMContentLoaded", function () {
  //   випадаюче меню language
  let languageBtn = document.querySelector(".language");
  let languageSubmenu = document.querySelector(".language-submenu");

  languageBtn.addEventListener("click", function () {
    languageSubmenu.classList.toggle("active");
  });

  // виїжджаюче меню та зміна кнопки моб.меню
  let navbarMenuBtn = document.querySelector(".nav-menu");
  let mobMenu = document.querySelector(".mob-menu");
  let bodyWrapper = document.querySelector("body");

  navbarMenuBtn.addEventListener("click", function () {
    navbarMenuBtn.classList.toggle("active");
    mobMenu.classList.toggle("active");
    bodyWrapper.classList.toggle("stop-scroll");
  });

  //  mob-menu accordion
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

  // logos slider
  let logosSwiper = new Swiper(".logos-slider", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    watchOverflow: true,
    spaceBetween: 30,
  });
});
