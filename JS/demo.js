document.addEventListener(
  "DOMContentLoaded",
  function () {
    particleground(document.getElementById("particles"), {
      dotColor: "#70b342",
      lineColor: "#264f25",
    });
    var intro = document.getElementById("intro");
    intro.style.marginTop = -intro.offsetHeight / 2 + "px";
  },
  false
);
