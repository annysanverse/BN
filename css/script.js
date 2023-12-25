const lights = document.querySelectorAll("i");

lights.forEach((light) => {
  light.style.animationDelay = `${Math.random() * -7000}ms`;
});