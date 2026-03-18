function getObserverOptions() {
  const height = window.innerHeight;

  // Threshold proportional zur Fensterhöhe
  let threshold, rootMargin;

  if (height > 1000) {
    // sehr große Bildschirme
    threshold = 0.35;
    rootMargin = "0px 0px 0px 0px";
  } else if (height > 700) {
    // mittlere Bildschirme
    threshold = 0.2;
    rootMargin = "0px 0px -5% 0px";
  } else {
    // kleine Bildschirme
    threshold = 0.1;
    rootMargin = "0px 0px -10% 0px";
  }

  return { threshold, rootMargin };
}

function initAnimations() {
  const options = getObserverOptions();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, options);

  document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
}

window.addEventListener("DOMContentLoaded", initAnimations);
window.addEventListener("resize", () => {
  initAnimations();
});