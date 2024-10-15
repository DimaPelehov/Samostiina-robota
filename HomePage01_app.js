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

// cta emblems slider
let ctaEmblemsSwiper = new Swiper(".cta-emblems", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
  watchOverflow: true,
  spaceBetween: 1,
});

// latest project buttons slider

$(".latest-proj-buttons").slick({
  arrows: false,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  dots: false,
});

// latest project cards slider
$(".latest-proj-cards").slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  dots: true,
  infinite: true,
  variableWidth: true,
});

// latest project фільтрація
const latestProjBtns = document.querySelector(".latest-proj-buttons");
const latestProjBtnsItems = document.querySelectorAll(".latest-proj-btn");
const latestProjCards = document.querySelectorAll(".latest-proj-card");
const latestProjPagination = document.querySelectorAll(".slick-dots")[0];
console.log(latestProjPagination);

function filter() {
  latestProjBtns.addEventListener("click", (e) => {
    const targetId = e.target.dataset.id;
    const target = e.target;

    if (target.classList.contains("latest-proj-btn")) {
      latestProjBtnsItems.forEach((item) => {
        item.classList.remove("active-btn");
      });
      target.classList.add("active-btn");
    }

    switch (targetId) {
      case "all":
        // getItems("latest-proj-card");
        latestProjCards.forEach((item) => {
          if (item.classList.contains("latest-proj-card")) {
            item.style.display = "flex";
            latestProjPagination.style.display = "block";
          } else {
            latestProjPagination.style.display = "none";
          }
        });
        break;
      case "garden-care":
        getItems(targetId);
        break;
      case "lawan-care":
        getItems(targetId);
        break;
      case "landscape":
        getItems(targetId);
        break;
    }
  });
}

filter();

function getItems(className) {
  latestProjCards.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "flex";
      latestProjPagination.style.display = "none";
    } else {
      item.style.display = "none";
    }
  });
}
