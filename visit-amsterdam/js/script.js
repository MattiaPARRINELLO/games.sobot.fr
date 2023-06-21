const elements = document.querySelectorAll(".animation");

const config = {
  focusin: {
    treshold: 0.1,
    animateClass: "focus-in",
  },
  slideinndelay: {
    treshold: 0.1,
    animateClass: "slide-in-ndelay",
  },
  slidein1delay: {
    treshold: 0.1,
    animateClass: "slide-in-1delay",
  },
  slidein2delay: {
    treshold: 0.1,
    animateClass: "slide-in-2delay",
  },
  scaleup: {
    treshold: 0.1,
    animateClass: "scale-up",
  },
};

elements.forEach((element) => {
  const animationClass = Array.from(element.classList).find(
    (className) =>
      className.includes("focusin") ||
      className.includes("slidein") ||
      className.includes("scaleup")
  );
  console.log(animationClass);
  const animationConfig = config[animationClass];
  console.log(animationConfig);
  if (animationConfig) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > animationConfig.treshold) {
            entry.target.classList.remove(animationConfig.animateClass);
            entry.target.classList.add(animationConfig.animateClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: animationConfig.treshold,
      }
    );
    observer.observe(element);
  }
});
