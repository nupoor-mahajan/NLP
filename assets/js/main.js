// main.js - navbar behaviour, active link highlighting, mermaid init
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Mobile nav toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
      });
    }

    // Mobile dropdown expand (tap parent li to open submenu)
    document.querySelectorAll(".nav-links > li").forEach(function (li) {
      const link = li.querySelector(":scope > a.nav-link");
      const panel = li.querySelector(".dropdown-panel");
      if (link && panel) {
        link.addEventListener("click", function (e) {
          if (window.innerWidth <= 900) {
            e.preventDefault();
            li.classList.toggle("open");
          }
        });
      }
    });

    // Active link highlighting based on current path
    const current = window.location.pathname.replace(/\/index\.html$/, "/");
    document.querySelectorAll("a.nav-link[data-path]").forEach(function (a) {
      const target = a.getAttribute("data-path");
      if (current.indexOf(target) !== -1 && target !== "") {
        a.classList.add("active");
      }
    });

    // Mermaid diagrams
    if (window.mermaid) {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      window.mermaid.initialize({
        startOnLoad: true,
        theme: isDark ? "dark" : "default",
        themeVariables: {
          primaryColor: "#1f3a5f",
          primaryTextColor: "#ffffff",
          primaryBorderColor: "#142943",
          lineColor: "#6f8faf",
          secondaryColor: "#2f6f6a",
          tertiaryColor: "#faf6ec"
        }
      });
    }
  });
})();
