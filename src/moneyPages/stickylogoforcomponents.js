const StickylogoforlS = () => {
  const LSnavbar = document.querySelector(".LSheadContainer");
  const stickyHeader = 50;
  window.addEventListener("scroll", () => {
    if (window.scrollY > stickyHeader) {

      LSnavbar.classList.add("sticky");
    
    } else {
      LSnavbar.classList.remove("sticky");
    }
  });
};
export default StickylogoforlS;
