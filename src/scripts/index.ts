import { setEffectOnMenuLinks } from "./Menu";

export type MousePosition = {
  x: number;
  y: number;
}

window.onload = function() {
  setEffectOnMenuLinks();
}

document.addEventListener("mousemove", function(e) {
  const cursor = document.getElementById("cursor") as HTMLDivElement;

  const x = e.clientX
  const y = e.clientY

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
})
