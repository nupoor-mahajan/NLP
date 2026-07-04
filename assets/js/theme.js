// theme.js - light/dark mode toggle with localStorage persistence
(function () {
  const STORAGE_KEY = "nlp-repo-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    applyTheme(saved);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtns = document.querySelectorAll(".theme-toggle");
    toggleBtns.forEach(function (btn) {
      updateIcon(btn);
      btn.addEventListener("click", function () {
        const isDark = root.getAttribute("data-theme") === "dark";
        const next = isDark ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
        toggleBtns.forEach(updateIcon);
      });
    });
  });

  function updateIcon(btn) {
    const isDark = root.getAttribute("data-theme") === "dark";
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
})();
