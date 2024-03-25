function locomotivescroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
locomotivescroll()

function animnav(){
    gsap.from('.nav',{
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 1
    })

    gsap.to('#img1',{
        transform: "translateY(-150%)",
        scrollTrigger: {
            trigger: ".part1",
            scroller: ".main",
            start: "top 0",
            end: "top -5%",
            scrub: 0.1,
        }
    })

    gsap.to('.list h2',{
        y: -40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".image-container",
            scroller: ".main",
            start: "top 65%",
            end: "top 35%",
            scrub: 0.2
        }
    })
}
animnav()

function animpart1(){
    gsap.from('.page1 h1',{
        opacity: 0,
        y: 100,
        duration: 0.5,
        delay: 1,
        stagger: 0.2,
    })
    gsap.from('.image-container img',{
        opacity: 0,
        scale:1.1,
        delay: 1.7, 
        duration: 1,
    })
}
animpart1()

function animpart2(){
    gsap.from(".left-part2 h1, #para-part2",{
        y: 50,
        opacity: 0,
        duration: 0.4,
        stagger:0.2,
        scrollTrigger:{
            trigger: ".page2",
            scroller: ".main",
            start: "top 70%",
            scrub: 0.2
        }
    })
}
animpart2()

function animpart4(){
    gsap.from('.left-part4 h1, .right-part4 p',{
        opacity:0,
        y: 50,
        duration: 0.2,
        stagger: 0.2,
        scrollTrigger:{
            trigger: ".page4",
            scroller: ".main",
            start: "top 80%",
            end: "top 20%",
            scrub: true
        }
    })
}
animpart4()

function animpart5(){
    gsap.from("#product1",{
        rotation: -45,
        transformOrigin: "bottom",
        opacity: 0,
        duration:1,
        stagger: .5,
        scrollTrigger:{
            trigger: ".page5",
            scroller: ".main",
            start: "top 70%",
            scrub: 0.2
        }
    })
    gsap.from("#product2",{
        rotation: 45,
        transformOrigin: "bottom",
        opacity: 0,
        duration:1,
        stagger: .5,
        scrollTrigger:{
            trigger: ".page5",
            scroller: ".main",
            start: "top 70%",
            scrub: 0.5
        }
    })
}
animpart5()

function animpart6(){
    gsap.from('.numbering-list, .description-data h1',{
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
        scrollTrigger:{
            trigger: ".page6",
            scroller: ".main",
            start: "top 60%",
            end: "top 10%",
            scrub: 0.2
        }
    })
    
    gsap.from(".page6-btn button, .page6-btn p",{
        y: 50,
        opacity:0 ,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger:{
            trigger: ".page6-btn",
            scroller: ".main",
            start: "top 70%",
            end: "top 20%",
            scrub: 0.5
        }
    })
}
animpart6()

function animpart7(){
    gsap.from('#left-part7, #left-part7 p, .right-part7 img',{
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger:{
            trigger: ".page7",
            scroller: ".main",
            start: "top 60%",
            end: "top 10%",
            scrub: 0.3
        }
    
    })
}
animpart7()

function animpart8(){
    gsap.from(".part8-line",{
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger:{
            trigger: ".part8",
            scroller: ".main",
            start: "top 50%",
            end: "top 10%",
            scrub: 0.3,
        }
    })
}
animpart8()

function animpart9(){
    gsap.from('.part9, .left-part9 p, .right-part9 p, .lower-part9 p',{
        y: 30,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".part9",
            scroller: ".main",
            start: "top 70%",
            end: "top 30%",
            scrub: 0.3,
        }
    })
}
animpart9()

function newsletterpart(){
    let part8Email = document.querySelector('.part8-Email')
    let emailOption = document.querySelector('.email-option')
    let emailInput = document.getElementById('email');
    emailOption.style.display = 'none'
    
    part8Email.addEventListener('click',()=>{
        emailOption.style.display = 'flex'
        part8Email.style.display = 'none'
        emailInput.focus();
    })
    emailOption.addEventListener('click',()=>{
        emailOption.style.display = 'none'
        part8Email.style.display = 'flex'
    })
}
newsletterpart()



document.addEventListener("mousemove",(dets)=>{
    gsap.to('.back-effect',{
        left: dets.x,
        top: dets.y,
    })
})


// function cursorAnimation() {
//     document.addEventListener("mousemove", function (dets) {
//       gsap.to(".cursor", {
//         left: dets.x,
//         top: dets.y,
//       });
//     });
//     // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
//     // })
  
//     // document.querySelector("#child1").addEventListener("mouseleave",function(){
//     //   gsap.to("#cursor",{
//     //     transform: 'translate(-50%,-50%) scale(0)'
//     //   })
//     // })
//     document.querySelectorAll("#product1 ").forEach(function (elem) {
//       elem.addEventListener("mouseenter", function () {
//         gsap.to(".cursor", {
//           transform: "translate(-50%,-50%) scale(1)",
//         });
//       });
//       elem.addEventListener("mouseleave", function () {
//         gsap.to(".cursor", {
//           transform: "translate(-50%,-50%) scale(0)",
//         });
//       });
//     });
//   }
//   cursorAnimation();
