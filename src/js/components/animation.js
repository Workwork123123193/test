const animationItems = document.querySelectorAll(
  ".what__animation, .clients__animation"
);

window.addEventListener("scroll", animation);
document.addEventListener("DOMContentLoaded", animation);

function animation() {
  for (let i = 0; i < animationItems.length; i++) {
    const animItem = animationItems[i];
    animateItem(animItem);
  }
}

function animateItem(animItem) {
  const animItemHeight = animItem.offsetHeight;
  const animItemOffset = getOffset(animItem).top - 100;
  const animStart = 4;
  let animItemPoint = window.innerHeight - animItemHeight / animStart;

  if (animItemHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
  }

  if (
    scrollY > animItemOffset - animItemPoint &&
    scrollY < animItemOffset + animItemHeight
  ) {
    animItem.classList.add("active");
  }
}

function getOffset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollY || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
