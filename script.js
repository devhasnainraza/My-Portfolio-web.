function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    
    // Example of using GSAP with Locomotive Scroll
    scroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
  
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
  });
  


  