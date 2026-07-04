// progress.js - reading progress bar + back-to-top button
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("reading-progress");
    const backBtn = document.getElementById("back-to-top");

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (bar) bar.style.width = pct + "%";

      if (backBtn) {
        if (scrollTop > 400) {
          backBtn.classList.add("show");
        } else {
          backBtn.classList.remove("show");
        }
      }
    }

    if (backBtn) {
      backBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  });
})();
