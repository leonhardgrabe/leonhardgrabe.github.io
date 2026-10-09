// Toggle abstract / coverage panels. Buttons carry data-toggle="abstract|coverage".
// Opening one panel closes any other panel of the same paper.
document.addEventListener("click", function (e) {
  const btn = e.target.closest("button[data-toggle]");
  if (!btn) return;
  const paper = btn.closest(".paper");
  const target = paper.querySelector(".panel." + btn.dataset.toggle);
  const willOpen = target.hidden;

  paper.querySelectorAll(".panel").forEach(p => (p.hidden = true));
  paper.querySelectorAll("button[data-toggle]").forEach(b => b.setAttribute("aria-expanded", "false"));

  if (willOpen) {
    target.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }
});
