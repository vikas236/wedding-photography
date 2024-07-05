function homeW() {
  function slideAnimation() {
    const slides = document.querySelectorAll(".slide");
    const left_btn = document.querySelector(".fa-chevron-left");
    const right_btn = document.querySelector(".fa-chevron-right");
    let slide_no = 0;
    let timer = 0;

    left_btn.addEventListener("click", () => {
      moveSlider("left");
    });

    right_btn.addEventListener("click", () => {
      moveSlider("right");
    });

    function moveSlider(direction) {
      slides.forEach((e) => {
        e.classList.remove("active");
      });

      if (direction == "left") {
        if (slide_no < 4) slide_no++;
        else slide_no = 0;
      } else if (direction == "right") {
        if (slide_no > 0) slide_no--;
        else slide_no = 4;
      }

      timer = 0;
      slides[slide_no].classList.add("active");
    }

    // setInterval(() => {
    //   timer++;
    //   if (timer == 6) moveSlider("right");
    // }, 1000);
  }
  slideAnimation();
}

export default homeW;
