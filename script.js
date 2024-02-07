function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
var pg1vd = document.querySelector(".page1 video");
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + 20 +"px"
  crsr.style.top = dets.y + 20 + "px"
})

pg1vd.addEventListener("mouseenter",function(){
  crsr.style.width ="120px"
  crsr.style.height ="20px"
  crsr.style.borderRadius ="20px"
  crsr.textContent =" sound on"
  crsr.style.color ="blue"
  crsr.style.font ="bold"
  crsr.style.fontSize ="20px"
  crsr.style.textAlign ="center"
  crsr.style.backgroundColor ="lightGray"
})
pg1vd.addEventListener("mouseleave",function(){
  crsr.textContent=""
  crsr.style.width ="20px"
  crsr.style.height ="20px"
  crsr.style.borderRadius ="50%"
  crsr.style.backgroundColor ="#edbfff"
})

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3
  }
})

tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to(".page1 video", {
  width: "95%"
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 3
  }
})

tl2.to(".main",{
  backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -425%",
      end: "top -400%",
      scrub: 3
  }
})
tl3.to(".main",{
  backgroundColor:"#111"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width ="470px"
  crsr.style.height ="370px"
  crsr.style.borderRadius ="0"
  crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave", function(){
    elem.style.backgroundColor="transparent"
    crsr.style.width ="20px"
  crsr.style.height ="20px"
  crsr.style.borderRadius ="50%"
  crsr.style.backgroundColor ="#edbfff"
  crsr.style.backgroundImage = `none`
  })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purple.style.display="block"
    purple.style.opacity = "1"
  })
  elem.addEventListener("mouseleave",function(){
    purple.style.display="none"
    purple.style.opacity = "0"
  })
})