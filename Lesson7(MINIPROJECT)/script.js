let links = document.querySelectorAll("nav a");

for (let link of links) {
  if (link.href == window.location.href) {
    link.classList.add("active");
  }
}
