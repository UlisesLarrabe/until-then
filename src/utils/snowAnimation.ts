import confetti from "canvas-confetti";

let duration = 5 * 1000;
let animationEnd = Date.now() + duration;
let skew = 1;

function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function snowAnimation() {
  let timeLeft = animationEnd - Date.now();
  let ticks = 200;
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 5,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      y: Math.random() * skew - 0.2,
    },
    colors: ["#ffffff"],
    shapes: ["circle"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  });

  if (timeLeft > 0) {
    requestAnimationFrame(snowAnimation);
  }
}

export { snowAnimation };
