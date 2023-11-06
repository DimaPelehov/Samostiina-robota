//   frequently accordion
let accordionTitles = document.querySelectorAll(".fra-title");
console.log(accordionTitles);
let accordionContents = document.querySelectorAll(".fra-content");
console.log(accordionContents);

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
