(() => {
  const page = document.body;
  const hero = document.querySelector(".hero__stage");

  if (!hero) {
    return;
  }

  const getCssLengthPixels = (value) => {
    const length = value.trim();
    const numericValue = Number.parseFloat(length);

    if (!Number.isFinite(numericValue)) {
      return 0;
    }

    if (length.endsWith("rem")) {
      const rootFontSize = Number.parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      return Number.isFinite(rootFontSize) ? numericValue * rootFontSize : 0;
    }

    return numericValue;
  };

  const updateNavState = () => {
    const navSolidOffset = getCssLengthPixels(
      getComputedStyle(page).getPropertyValue("--nav-solid-offset"),
    );
    const solidThreshold = Math.max(0, hero.offsetHeight - navSolidOffset);
    page.classList.toggle("is-nav-solid", window.scrollY > solidThreshold);
  };

  window.addEventListener("scroll", updateNavState, { passive: true });
  window.addEventListener("resize", updateNavState);
  updateNavState();
})();
