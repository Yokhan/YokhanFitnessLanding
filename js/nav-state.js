(() => {
  const page = document.body;
  const hero = document.querySelector(".hero__stage");

  if (!hero) {
    return;
  }

  const updateNavState = () => {
    const navSolidOffset = Number.parseFloat(
      getComputedStyle(page).getPropertyValue("--nav-solid-offset"),
    );
    const safeNavSolidOffset = Number.isFinite(navSolidOffset)
      ? navSolidOffset
      : 0;
    const solidThreshold = Math.max(0, hero.offsetHeight - safeNavSolidOffset);
    page.classList.toggle("is-nav-solid", window.scrollY > solidThreshold);
  };

  window.addEventListener("scroll", updateNavState, { passive: true });
  window.addEventListener("resize", updateNavState);
  updateNavState();
})();
