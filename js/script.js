$(document).ready(function () {
  // GSAP Animations
  gsap.registerEffect({
    name: "fadeSlideUp",
    effect: (targets, config) => {
      return gsap.from(targets, {
        duration: config.duration,
        y: config.y,
        opacity: 0,
        ease: "power2.out",
        stagger: config.stagger
      });
    },
    defaults: { duration: 0.8, y: 20, stagger: 0.1 }
  });

  // Animate components on page load
  gsap.effects.fadeSlideUp(".component-card", { stagger: 0.1 });

  // Hover animations
  $(".component-link").hover(
    function () {
      gsap.to($(this).find(".card"), {
        scale: 1.03,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
        duration: 0.3
      });
    },
    function () {
      gsap.to($(this).find(".card"), {
        scale: 1,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        duration: 0.3
      });
    }
  );
});