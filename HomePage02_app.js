// відкривання-закривання мобільного меню
let navbarMenuBtn = document.querySelector(".menu-button");
// console.log(navbarMenuBtn);
let sidebarMenu = document.querySelector(".mobile-menu");
// console.log(sidebarMenu);
let header = document.querySelector("header");

navbarMenuBtn.addEventListener("click", function () {
  sidebarMenu.classList.toggle("active");
  header.classList.toggle("sticky");
});

//   frequently accordion
let accordionTitles = document.querySelectorAll(".fra-title");
// console.log(accordionTitles);
let accordionContents = document.querySelectorAll(".fra-content");
// console.log(accordionContents);

accordionTitles.forEach((item) =>
  item.addEventListener("click", () => {
    // це ми починаємо перебирати заголовки і додаємо клік кожному заголовку
    let activeContent = document.querySelector("#" + item.dataset.tab);
    // при натисканні на title  знаходиться прив'язаний до нього через data-tab активний контент

    if (activeContent.classList.contains("active")) {
      // якщо контент вибраного title має клас active, то ми:
      activeContent.classList.remove("active");
      //  прибираємо у контента клас active
      item.classList.remove("active");
      //  прибираємо у даного title клас active
      activeContent.style.maxHeight = 0;
      // задаємо висоту контента 0
    } else {
      accordionContents.forEach((element) => {
        // якщо ж контент не активний, то ми проходимо по усім контентам
        element.classList.remove("active");
        // прибираємо у них клас acive
        element.style.maxHeight = 0;
        // і задаємо висоту контента 0
      });

      accordionTitles.forEach((element) => element.classList.remove("active"));
      // потім проходимо по усім заголовкам і прибираємо у них клас active

      item.classList.add("active");
      // і тепер тільки для того заголовку, на який ми клікнули додаємо клас active
      activeContent.classList.add("active");
      // його активному контенту додаємо клас active
      activeContent.style.maxHeight = activeContent.scrollHeight + "px";
      // і присвоюємо контенту висоту, котру він займає
    }
  })
);

// our-staff slider
$(".mob-our-staff-cards").slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// clients-say slider
$(".clients-say-cards").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

// our-insights slider
let swiper = new Swiper(".our-insights-swipe", {
  direction: "horizontal",
  loop: true,
  freeMode: true,
  spaceBetween: 5,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 30, slidesPerGroup: 2, loop: false },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
    },
  },
});

// company-logos slider
let swiper2 = new Swiper(".mob-company-logos", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
  watchOverflow: true,
  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
