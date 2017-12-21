var bar = document.getElementById('scrollBar');

function statusBar() {
  var scrollDown = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) *100);
  console.log(scrollDown);
  bar.style.width = scrollDown + "%";
};

window.addEventListener('scroll', statusBar);
