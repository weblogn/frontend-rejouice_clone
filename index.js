function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

    
}
locoscroll()


function cursorEffect(page,element){
    var page1content= document.querySelector(page)
var cursor=document.querySelector(element)

page1content.addEventListener("mousemove",(dets)=>{
    gsap.to(element,{
        x:dets.x,
        y:dets.y,
    })
})
page1content.addEventListener("mouseenter",()=>{
    gsap.to(element,{
       scale:1
    })
})

page1content.addEventListener("mouseleave",()=>{
    gsap.to(element,{
       scale:0
    })
})
}
cursorEffect("#page1","#cursor")
cursorEffect("#page4","#cursor-1")

function animation_line(element,page){
    gsap.from(element, {
        y: 80,
        stagger: 0.25,
        duration: 1, // Fix typo here
        scrollTrigger: {
            trigger: page,
            scroller: "#main",
            start: "top 70%",
            end: "top 50%",
            scrub: 3
        }
    });
}
animation_line("#line-animation3 h1","#page5")
animation_line("#line-animation p","#page2")
animation_line("#line-animation2 h1","#page3-bottom")


gsap.from("#page3-bottom-head", {
  y: 15,
  stagger:0.15,
  duration: 1, // Fix typo here
  scrollTrigger: {
      trigger: "#page3-bottom",
      scroller: "#main",
      start: "top 70%",
      end: "top 60%",
      scrub: 3
  }
});


function animation_border(element, page) {
    gsap.to(element, {
        width: "100%", // Animate the width to 100% of the viewport
        duration: 1, // Animation duration
        ease: "power1.out", // Easing function (you can change it based on your preference)
        scrollTrigger: {
          trigger: page,
          scroller: "#main",
          start: "top 70%",
          end: "top 60%",
          scrub: 2
        }
      });
    
}
animation_border("#border-animation3","#page5")
animation_border("#border-animation","#page2")
animation_border("#border-animantion2","#page3-bottom")


var t1=gsap.timeline()

t1.from("#loader h1",{
  x:200 ,
  opacity:0,
  stagger:0.1,
})

t1.to("#loader",{
  opacity:0,
})

t1.to("#loader",{
  display:"none"
})

t1.to("#loader h1",{
  x:-200,
  opacity:0,
})

t1.to("#page1-content>h1>span",{
  x:100,
  opacity:0,  
  stagger:0.05
});


gsap.from("#footer-bottom-2>h1>span",{
  x:100,
  opacity:0,  
  stagger:0.05
});
gsap.from("#footer-bottom-2 h1 span", {
  y: 100,
  stagger: 0.5,
  duration: 1, // Fix typo here
  scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "top 45%",
      end: "top 40%",
      scrub: 3
  }
});

var button=document.querySelector("#page4 button")
var slidepage=document.querySelector("#slidepage")


slidepage.addEventListener("click",()=>{
  slidepage.style.opacity=1
  gsap.from(slidepage,{
  x:-window.innerWidth,
  duration:1,
  ease: 'power2.inOut',
}); 
})

button.addEventListener("click",()=>{
  
  var button=document.querySelector("#page4 button")
  button.style.opacity=1
  button.style.opacity=0

gsap.to(slidepage,{
  x:-window.outerWidth,
  duration:1,
  ease: 'power2.inOut',

});




});



