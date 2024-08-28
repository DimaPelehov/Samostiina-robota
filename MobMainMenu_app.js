let menuAcordionTitles = document.querySelectorAll(".mma-title");
// console.log(menuAcordionTitles);
let menuAccordionContents = document.querySelectorAll(".mma-column");
// console.log(menuAccordionContents);

menuAcordionTitles.forEach((item) =>
  item.addEventListener("click", () => {
    let pressContent = document.querySelector("#" + item.dataset.tab);

    if (pressContent.classList.contains("press")) {
      pressContent.classList.remove("press");
      item.classList.remove("press");
      pressContent.style.maxHeight = 0;
    } else {
      menuAccordionContents.forEach((element) => {
        element.classList.remove("press");
        element.style.maxHeight = 0;
      });

      menuAcordionTitles.forEach((element) =>
        element.classList.remove("press")
      );

      item.classList.add("press");
      pressContent.classList.add("press");
      pressContent.style.maxHeight = pressContent.scrollHeight + "px";
    }
  })
);
