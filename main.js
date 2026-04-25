var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


  document.querySelectorAll(".radial-bars").forEach(bar => {
    const circle = bar.querySelector(".path");
    const percent = +bar.getAttribute("data-percent");
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percent / 100);

    circle.style.strokeDashoffset = offset;
    circle.style.strokeDasharray = circumference;
    circle.style.stroke = "#0ef"; // <-- this sets the cyan color
  });


