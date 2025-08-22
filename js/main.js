
let accordionbtn = document.querySelectorAll(".accordionbtn");
let accordion_item = document.querySelectorAll(".accordion_item");
let icons = document.querySelectorAll(" i");



/////////////////////////////////////////////////////
accordionbtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        for (let x = 0; x < accordionbtn.length; x++) {
            if (index != x) {
              accordion_item[x].style.height = null;
              icons[x].style.transform = "rotate(0deg)";
            }
          }

        if (accordion_item[index].style.height == 0) {
            icons[index].style.transform = "rotate(45deg)";
            accordion_item[index].style.height = accordion_item[index].scrollHeight + "px";
        } else {
            icons[index].style.transform = "rotate(0deg)";
            accordion_item[index].style.height = null;

        }
    });
});
