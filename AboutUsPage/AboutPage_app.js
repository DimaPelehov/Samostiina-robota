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
  let body = document.querySelector("body");

  navbarMenuBtn.addEventListener("click", function () {
    navbarMenuBtn.classList.toggle("active");
    mobMenu.classList.toggle("active");
    body.classList.toggle("stop-scroll");
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

  // our-staff slider
  $(".our-staff-cards").slick({
    slidesToShow: 2,
    arrows: false,
  });

  // зміна вигляду our-staff  card
  let ourStaffCards = document.querySelectorAll(".st-card");

  ourStaffCards.forEach((item) =>
    item.addEventListener("click", function () {
      ourStaffCards.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    })
  );

  // logos slider
  let logosSwiper = new Swiper(".logos-slider", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    watchOverflow: true,
    spaceBetween: 30,

    breakpoints: {
      768: { slidesPerView: 3, slidesPerGroup: 1 },
    },
  });

  // відправка форми -------------------
  let footerForm = document.querySelector(".subscribe-form");

  footerForm.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    // перевірка заповненості полів
    let error = formValidate(footerForm);
    // отримання даних з полей
    let footerFormData = new FormData(footerForm);

    if (error === 0) {
      body.classList.add("sending-form", "stop-scroll");

      // запрос на сервер
      let response = await fetch(
        "https://my-json-server.typicode.com/kznkv-skillup/server/orders",
        {
          method: "POST",
          body: footerFormData,
        }
      );

      if (response.ok) {
        let result = await response.json();
        alert("All right!");
        footerForm.reset();
        // очистка форми після відправки
        body.classList.remove("sending-form", "stop-scroll");
      } else {
        alert("Not sending!");
        body.classList.remove("sending-form", "stop-scroll");
      }
    } else {
      // якщо є проблема з валідацією
      alert("All fields required!");
    }
  }

  function formValidate(footerForm) {
    let error = 0;

    let formRequired = document.querySelectorAll(".required");

    for (let i = 0; i < formRequired.length; i++) {
      const input = formRequired[i];
      // кожен елемент масиву помістили в змінну input
      formRemoveError(input);
      // у кожного елемента видаляємо клас "error"

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

  //перевірка правильного формату пошти
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
