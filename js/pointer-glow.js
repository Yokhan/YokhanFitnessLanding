(() => {
  const SELECTOR = ".btn, .nav__cta";

  const updatePointerVars = (event) => {
    const target = event.currentTarget;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty("--pointer-x", `${x}px`);
    target.style.setProperty("--pointer-y", `${y}px`);
    target.style.setProperty("--control-glow-opacity", "1");
  };

  const resetPointerVars = (event) => {
    const target = event.currentTarget;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    target.style.removeProperty("--pointer-x");
    target.style.removeProperty("--pointer-y");
    target.style.removeProperty("--control-glow-opacity");
  };

  document.querySelectorAll(SELECTOR).forEach((target) => {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    target.addEventListener("pointerenter", updatePointerVars);
    target.addEventListener("pointermove", updatePointerVars);
    target.addEventListener("pointerleave", resetPointerVars);
  });
})();