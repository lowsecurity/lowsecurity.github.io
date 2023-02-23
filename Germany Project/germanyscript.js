var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function() {
  var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 20); // how far to scroll on each step
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 2); // how often to run the scroll function (in milliseconds)
});
