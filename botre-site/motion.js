// Scroll reveal: elements fade up as they enter the viewport.
// Respects prefers-reduced-motion via CSS, which turns the reveal off.
document.documentElement.classList.add('js');

(function () {
  const targets = document.querySelectorAll(
    '.eyebrow, .display, .lede, .tile.wide, .craft-img, .brief-intro, .section-card, .presets-wrap, .contact .card, .trust-line, .trust-sub, .cta-card'
  );
  const groups = document.querySelectorAll('.steps, .gallery, .occasion-row, .tile-row, .contact-grid, .presets, .feature-grid, .why-grid, .faq-list, .story-row');

  const items = new Set(targets);
  groups.forEach(group => {
    [...group.children].forEach((child, i) => {
      child.style.transitionDelay = (i * 90) + 'ms';
      items.add(child);
    });
  });

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('reveal', 'in'));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
