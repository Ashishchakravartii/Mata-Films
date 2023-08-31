gsap.from(".nav h4", {

    y: -50,
    duration: 1,
    delay: 0.2,
    stagger: 0.3
})
gsap.from(".main h1", {

    x: -600,
    duration: 1,
    delay: 1.5,
    stagger: 0.4,
    opacity: 0,
})
gsap.from(".main img", {

    x: 600,
    duration: 0.5,
    delay: 3,
    stagger: 0.4,
    opacity: 0,
    rotate: 0,
})

gsap.from(".bottom h4", {
    y: 100,
    duration: 1,
    delay: 3.5,
    stagger: 0.3,
    opacity: 0,
})

let tl= gsap.timeline();

tl
.from(".P2-div4 img", {
    x:-1000,
    duration:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".P2-div4 img",
        scroller:"body",
        start: "top 90%",
        end: "top 40%",
        scrub:2,
    }
})


.from(".P2-div3 img", {
    x:-1000,
    duration:2,
    opacity:0,


    // delay:0.3,
    scrollTrigger: {
        trigger: ".P2-div3 img",
        scroller:"body",
        start: "top 90%",
        end: "top 40%",
        scrub:2,

    }
})
.from(".P2-div2 img", {
    x:-1000,
    duration:2,
    opacity:0,


    // delay:0.6,

    scrollTrigger: {
        trigger: ".P2-div2 img",
        scroller:"body",
        start: "top 90%",
        end: "top 40%",
        scrub:2,

    }
})


.from(".P2-div1 img", {
    x:-1000,
    duration:2,
    opacity:0,


    // delay:1,

    scrollTrigger: {
        trigger: ".P2-div1 img",
        scroller:"body",
        start: "top 90%",
        end: "top 40%",
        scrub:2,

    }
})

.from(".p2-bottom h1",{
    opacity:0,
    scale:3,
    duration:0.5,
    scrollTrigger:{
        trigger:".p2-bottom h1",
        scroller:"body",
        start: "top 70%",
        end: "top 60%",
        scrub:1,

    }
})
