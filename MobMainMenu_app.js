let accordionTitles = document.querySelectorAll(".mma-title");
console.log(accordionTitles);
let accordionContents = document.querySelectorAll(".mma-column");
console.log(accordionContents);

accordionTitles.forEach((item) =>
  item.addEventListener("click", () => {
    let pressContent = document.querySelector("#" + item.dataset.tab);

    if (pressContent.classList.contains("press")) {
      pressContent.classList.remove("press");
      item.classList.remove("press");
      pressContent.style.maxHeight = 0;
    } else {
      accordionContents.forEach((element) => {
        element.classList.remove("press");
        element.style.maxHeight = 0;
      });

      accordionTitles.forEach((element) => element.classList.remove("press"));

      item.classList.add("press");
      pressContent.classList.add("press");
      pressContent.style.maxHeight = pressContent.scrollHeight + "px";
    }
  })
);
