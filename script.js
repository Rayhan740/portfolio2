// For navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu / navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

// For progress bar
var progressBarOptions = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: {
    gradient: ["#a445b2", "#fa4299"],
  },
};

$(".circle .bar")
  .circleProgress(progressBarOptions)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2)).substr(2) + "%");
  });

$(".js .bar").circleProgress({
  value: 0.7,
});

$(".ps .bar").circleProgress({
  value: 0.6,
});

// auto text

const textEl = document.getElementById("auto_text");
const text1 = "Front End Developer";

let idx = 1;
let speed = 300 / 2;

writeText();

function writeText() {
  textEl.innerText = text1.slice(0, idx);

  idx++;

  if (idx > text1.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

// Reviews section starts from here
const wrapper = document.querySelector(".review-wrapper");
const indicators = [...document.querySelectorAll(".indicators button")];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicators[currentTestimonial].classList.remove("btn");
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add("btn");
    currentTestimonial = i;
  });
});
