function HomeAnimation() {
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  tl.to(
    ".herovideo",
    {
      '--clip': "0%",
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".lft",
    {
      xPercent: -10,
      ease: Power4,
      stagger: 0.02,
    },
    "h"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      ease: Power4,
      stagger: 0.02,
    },
    "h"
  );
  // Text Animation
  tl.to(
    ".textanime",
    {
      opacity: 1,
      ease:Power4,
      stagger: 0.05, // Stagger each character animation by 0.05 second
    },
    "h"
  );
}

function SlidesAnimation(){
  gsap.set("body",{theme:"salmon"});
  gsap.to(".slide",{
    scrollTrigger:{
      trigger:".real",
      start:"top top",
      end:"bottom bottom",
      scrub:2,
      
    },
    xPercent:-200,
    ease:Power4
  })
}

// Our Team
function TeamAnimation(){
  let hoverimg = document.querySelectorAll(".listelem");
  hoverimg.forEach((e)=>{
    e.addEventListener("mousemove",(de)=>{
     
      gsap.to(e.querySelector(".profileimg"),{
        x: gsap.utils.mapRange(0,window.innerWidth,-200,200,de.clientX),
        opacity:1,
        scale:1.2,
        ease:Power4,
        duration:1,
      },'j')
      gsap.to(e.querySelector(".blueeffect"),{
        height:"135px",
        ease:Power4,
        duration:2
      },'k')
    })
    e.addEventListener("mouseleave",(de)=>{
      gsap.to(e.querySelector(".profileimg"),{
        opacity:0,
        scale:1,
        ease:Power4,
        duration:1,
      },'j')
      gsap.to(e.querySelector(".blueeffect"),{
        height:0,
        ease:Power4,
        duration:2
      },'k')
    })
  })
}

// Themes SET
function ThemeAnimation(){
  document.querySelectorAll(".section")
  .forEach((e)=>{
    ScrollTrigger.create({
      trigger:e,
      start:"top 50%",
      end:"bottom 50%",
      onEnter:()=>{
        document.body.setAttribute("theme",e.dataset.color);
      },
      onEnterBack:()=>{
        document.body.setAttribute("theme",e.dataset.color);
      }
    })
  })
}
// Text Animation
function TextAnimation(){
  let clutter =""
  document.querySelector(".paraanime").textContent.split("")
  .forEach((e)=>{
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
  })
  document.querySelector(".paraanime").innerHTML = clutter;
  document.querySelectorAll("span")
  .forEach((e)=>{
    e.style.color = "blue"
  })
  gsap.set(".paraanime span",{opacity:.1})
  gsap.to('.paraanime span',{
    scrollTrigger:{
      trigger:".about",
      start:"top 80%",
      end:"bottom bottom",
      scrub:.2
    },
    opacity:1,
    stagger:.03,
    ease:Power4
  })
}

function ArticleAnimation(){
  gsap.to(".cap-1",{
    scrollTrigger:{
      trigger:".explore",
      start:"top 20%",
      bottom:"bottom bottom",
    },
    yPercent:-25,
    ease:Power4,
    duration:1
  },'c')
  gsap.to(".cap-2",{
    scrollTrigger:{
      trigger:".explore",
      start:"top 20%",
      bottom:"bottom bottom",
    },
    yPercent:-20,
    ease:Power4,
    duration:1
  },'c')
}


HomeAnimation();
SlidesAnimation();
TeamAnimation();
ThemeAnimation();
TextAnimation();
ArticleAnimation();

