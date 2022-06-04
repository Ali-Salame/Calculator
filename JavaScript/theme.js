let Darkmode = localStorage.getItem("Darkmode")

let theme = document.body
theme.classList.add("theme_1")

function enable_Theme_1() {
    theme.classList.add("theme_1")
    theme.classList.remove("theme_2")
    theme.classList.remove("theme_3")
};
function enable_Theme_2() {
    theme.classList.add("theme_2")
    theme.classList.remove("theme_1")
    theme.classList.remove("theme_3")
};
function enable_Theme_3() {
    theme.classList.add("theme_3")
    theme.classList.remove("theme_1")
    theme.classList.remove("theme_2")
};

let switch1 = document.getElementsByClassName("switch");
let switchs = [...switch1];

switchs.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
        enable_Theme_1()
    } else if (index == 1) {
        enable_Theme_2()
    } else {
        enable_Theme_3()
    }
    switchs
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });

});