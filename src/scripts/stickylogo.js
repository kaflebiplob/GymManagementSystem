const stickylogo = () => {
    const navbar = document.querySelector(".header-section");
    const bodySection = document.querySelector(".body-section");
    const signup = document.querySelector(".signupbtn")
    const stickyHeader = 180;
  window.addEventListener("scroll", () => {

    if (scrollY>stickyHeader) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.left = "0";
        navbar.style.width = "100%";
        navbar.style.height ="200px";
        navbar.style.backgroundColor = "#fff";
        navbar.style.color = "black";
        navbar.style.padding = "10px 0";
        navbar.style.zIndex = "9999";
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        navbar.style.transition = "0.5s ease-in-out"
       bodySection.style.paddingTop = "250px"
        signup.style.padding= "10px"
    //   navbar.classList.add("stickygymheader");
      
    } else {
        navbar.style.position = "";
        navbar.style.top = "";
        navbar.style.left = "";
        navbar.style.width = "";
        navbar.style.backgroundColor = "";
        navbar.style.color = "";
        navbar.style.padding = "";
        navbar.style.zIndex = "";
        navbar.style.boxShadow = "";
    
        bodySection.style.paddingTop = "";
        signup.style.padding= "10px"
    //   navbar.classList.remove("stickygymheader");
    }
  });

  const membership = document.querySelector('.membership-section')
  // membership.style.position = "fixed";

};
export default stickylogo;
