// search.js - filter concept cards on Section A index page
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("concept-search");
    const chips = document.querySelectorAll(".filter-chip");
    const cards = document.querySelectorAll(".concept-card-wrap");

    if (!input && chips.length === 0) return;

    let activeCategory = "all";

    function applyFilters() {
      const query = (input && input.value.trim().toLowerCase()) || "";
      cards.forEach(function (card) {
        const title = (card.getAttribute("data-title") || "").toLowerCase();
        const category = card.getAttribute("data-category") || "";
        const matchesQuery = query === "" || title.indexOf(query) !== -1;
        const matchesCategory = activeCategory === "all" || category === activeCategory;
        card.style.display = matchesQuery && matchesCategory ? "" : "none";
      });
    }

    if (input) {
      input.addEventListener("input", applyFilters);
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("active");
        });
        chip.classList.add("active");
        activeCategory = chip.getAttribute("data-category") || "all";
        applyFilters();
      });
    });
  });
})();
