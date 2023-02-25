/**
 * Adds an opacity effect on the menu links elements.
 */
export function setEffectOnMenuLinks() {
  // Hover effect on menu links
  let navLinks = document.querySelectorAll(".tb-nav-link");
  const len = navLinks.length;
  for (let i = 0; i < len; i++) {
    // When hovering a link, the other links opacity is reduced
    navLinks[i].addEventListener("mouseenter", function () {
      for (let x = 0; x < len; x++) {
        if (x !== i) {
          navLinks[x].classList.add("tb-transp-nav-link");
        }
      }
    });
    // Reset the opacity on the links when the link isn't hovered anymore
    navLinks[i].addEventListener("mouseleave", function () {
      for (let x = 0; x < len; x++) {
        navLinks[x].classList.remove("tb-transp-nav-link");
      }
    });
  }
}
