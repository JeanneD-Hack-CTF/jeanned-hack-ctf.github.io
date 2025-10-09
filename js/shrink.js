document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector("header.contain");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  if (!hero || !main) return;

  const shrinkOn = 20;
  const buffer = 10;
  let isShrunk = false;
  let ticking = false;

  function isPageScrollable() {
    // Calculate content height excluding flex filler
    const contentHeight =
      hero.offsetHeight + main.scrollHeight + (footer?.offsetHeight || 0);
    const viewportHeight = window.innerHeight;

    return contentHeight > viewportHeight + 5; // add small tolerance
  }

  function updateHero(scrollY) {
    if (!isShrunk && scrollY > shrinkOn + buffer) {
      hero.classList.remove("nav-initial");
      hero.classList.add("nav-shrink");
      isShrunk = true;
    } else if (isShrunk && scrollY < shrinkOn - buffer && isPageScrollable()) {
      hero.classList.add("nav-initial");
      hero.classList.remove("nav-shrink");
      isShrunk = false;
    }
  }

  // Decide starting state
  if (isPageScrollable()) {
    hero.classList.add("nav-initial");
    hero.classList.remove("nav-shrink");
  } else {
    hero.classList.remove("nav-initial");
    hero.classList.add("nav-shrink");
    isShrunk = true;
  }

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(() => {
        updateHero(scrollY);
        ticking = false;
      });
      ticking = true;
    }
  });

  updateHero(window.scrollY);

  // Optional: re-evaluate after dynamic content loads
  window.addEventListener("resize", () => updateHero(window.scrollY));
});  