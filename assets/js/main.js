const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");
const cards = document.querySelectorAll(".component-card");

// Get all titles and links from data-attributes
const components = Array.from(cards).map(card => ({
  title: card.getAttribute("data-title").toLowerCase(),
  link: card.getAttribute("data-link")
}));

searchInput.addEventListener("input", function () {
  const input = this.value.toLowerCase().trim();
  suggestionsBox.innerHTML = "";

  if (input === "") {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = components.filter(c => c.title.includes(input));

  if (matches.length > 0) {
    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = match.title;
      li.addEventListener("click", () => {
        window.location.href = match.link;
      });
      suggestionsBox.appendChild(li);
    });
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none";
  }
});

// Optional: Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = "none";
  }
});
