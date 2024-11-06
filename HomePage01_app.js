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

  breakpoints: {
    768: { slidesPerView: 3, slidesPerGroup: 1 },
  },
});

// latest project buttons slider

$(".latest-proj-buttons").slick({
  infinite: false,
  arrows: false,
  slidesToShow: 4,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        infinite: true,
      },
    },
  ],
});

// latest project cards slider
$(".mob-latest-proj-cards").slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  dots: true,
  infinite: true,
  variableWidth: true,
});

// latest project  фільтрація
const latestProjBtns = document.querySelector(".latest-proj-buttons");
const latestProjBtnsItems = document.querySelectorAll(".latest-proj-btn");
const latestProjCards = document.querySelectorAll(".latest-proj-card");
const latestProjPagination = document.querySelectorAll(".slick-dots")[0];
let desktopLaterProjCards = document.querySelectorAll(".desk-latest-proj-card");

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
        }) ||
          desktopLaterProjCards.forEach((deskItem) => {
            if (deskItem.classList.contains("desk-latest-proj-card")) {
              deskItem.style.display = "flex";
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
  }) ||
    desktopLaterProjCards.forEach((deskItem) => {
      if (deskItem.classList.contains(className)) {
        deskItem.style.display = "flex";
      } else {
        deskItem.style.display = "none";
      }
    });
}

// зміна виду desktop latest project card

desktopLaterProjCards.forEach((item) =>
  item.addEventListener("click", function () {
    desktopLaterProjCards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  })
);

// desktop our team slider
$(".desk-our-team-cards").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: true,
  arrows: false,
  dots: true,
});

// зміна вигляду desktop our team card

let deskOurTeamCard = document.querySelectorAll(".ot-card");

deskOurTeamCard.forEach((item) =>
  item.addEventListener("click", function () {
    deskOurTeamCard.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  })
);

// -- clients say raiting --

let clientsSayRaitings = document.querySelectorAll(".cs-card-stars");

clientsSayRaitings.forEach(function (rating) {
  let clientsSayRaitingItems = rating.querySelectorAll(".cs-card-star");

  rating.addEventListener("click", function (e) {
    rating.classList.remove("unselected");
    let target = e.target;
    if (target.classList.contains("cs-card-star")) {
      removeClass(clientsSayRaitingItems, "active");
      target.classList.add("active");
    }
  });
});

function removeClass(elements, className) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className);
  }
}

// clients say slider
let clientsSaySlider = new Swiper(".clients-say-cards", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  watchOverflow: false,
  spaceBetween: 20,

  pagination: {
    el: ".client-say-pagination ",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30, loop: false },
  },
});

// зміна вигляду clients say card
let clientsSayCard = document.querySelectorAll(".cs-card");

clientsSayCard.forEach((item) =>
  item.addEventListener("click", function () {
    clientsSayCard.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  })
);

// зміна вигляду ask card
let askCards = document.querySelectorAll(".ask-card");

askCards.forEach((item) =>
  item.addEventListener("click", function () {
    askCards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  })
);

// відправка email
const footerForm = document.getElementById("footer-form");
const body = document.querySelector("body");

footerForm.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();

  // перевірка заповненості усіх полів
  let error = formValidate(footerForm);

  // отримуємо дані з полей
  let footerFormData = new FormData(footerForm);

  if (error === 0) {
    // якщо помилок немає
    body.classList.add("sending-form", "stop-scroll");

    // відправляємо запрос на сервер
    let response = await fetch(
      "https://my-json-server.typicode.com/kznkv-skillup/server/orders",
      {
        method: "POST",
        body: footerFormData,
      }
    );

    if (response.ok) {
      // якщо з відповіддю з сервера все ок
      let result = await response.json();
      // отримуємо відповідь у json
      alert("Надіслано");
      // і виводимо на екран
      footerForm.reset();
      // очищаємо форму після відправки
      body.classList.remove("sending-form", "stop-scroll");
    } else {
      // якщо с сервером проблема, то
      alert("Помилка при відправці");
      body.classList.remove("sending-form", "stop-scroll");
    }
  } else {
    // якщо є помилки з валідацією, то
    alert("Заповніть обов'язкове поле");
  }
}

function formValidate(footerForm) {
  let error = 0;

  let formRequired = document.querySelectorAll(".required");
  // визначили поля обов'язкові до заповнення

  for (let i = 0; i < formRequired.length; i++) {
    const input = formRequired[i];
    // пройшлись по всім обов'яковим полям циклом, і кожен отриманий елемент помістили у змінну input
    formRemoveError(input);
    // у кожного обов'язкового поля видаляємо клас "error"

    if (input.classList.contains("input-email")) {
      if (emailTest(input)) {
        // якщо пошту введено неправильно
        formAddError(input);
        // додаємо елементу "error"
        error++;
      } else {
        if (input.value === "") {
          // якщо поле незаповнено
          formAddError(input);
          // додаємо елементу "error"
          error++;
        }
      }
    }
  }

  return error;
  // значення буде або 0 або ні
}

function formAddError(input) {
  input.parentElement.classList.add("error");
  input.classList.add("error");
}

function formRemoveError(input) {
  input.parentElement.classList.remove("error");
  input.classList.remove("error");
}

// перевірка правильного формату пошти
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
