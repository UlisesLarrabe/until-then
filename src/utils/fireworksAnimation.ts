import confetti from "canvas-confetti";

let duration = 15 * 1000;
let animationEnd = Date.now() + duration;
let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function fireworksAnimation(interval: NodeJS.Timeout) {
  let timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  let particleCount = 50 * (timeLeft / duration);
  confetti({
    ...defaults,
    particleCount,
    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
  });
  confetti({
    ...defaults,
    particleCount,
    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
  });
}
export { fireworksAnimation };
