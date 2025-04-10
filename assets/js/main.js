function toggleDropdown(event, id) {
  event.preventDefault();
  // Закрыть все открытые дропдауны
  document.querySelectorAll(".dropdown-content").forEach((drop) => {
    if (drop.id !== id) {
      drop.classList.remove("show");
    }
  });

  document.getElementById(id).classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    document.querySelectorAll(".dropdown-content").forEach((drop) => {
      drop.classList.remove("show");
    });
  }
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block" || panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);
