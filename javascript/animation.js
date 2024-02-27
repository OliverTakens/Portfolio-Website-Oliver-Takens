"use strict"

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
    opacity: 0,
});



// Career
let timeline01 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about__left",
        start: "bottom bottom"
    }
});

timeline01.from("#about__left", {
    duration: 1,
    x: -150,
},
// "-=1"
);

timeline01.from("#about__right", {
    duration: 1,
    y: 150,
},
// "-= .2"
);


// Selected Work
let timeline02 = gsap.timeline({
    scrollTrigger: {
        trigger: "#left__box01",
        start: "center bottom"
    }
});

timeline02.from("#left__box01", {
    duration: 1,
    x: -150,
},
// "-= .2"
);

timeline02.from("#right__box01", {
    duration: 1,
    x: 150,
},
"-=1"
);

let timeline03 = gsap.timeline({
    scrollTrigger: {
        trigger: "#left__box02",
        start: "center bottom"
    }
});

timeline03.from("#left__box02", {
    duration: 1,
    x: -150,
},
// "-= .2"
);

timeline03.from("#right__box02", {
    duration: 1,
    x: 150,
},
"-=1"
);

let timeline04 = gsap.timeline({
    scrollTrigger: {
        trigger: "#left__box03",
        start: "center bottom"
    }
});

timeline04.from("#left__box03", {
    duration: 1,
    x: -150,
},
// "-= .2"
);

timeline04.from("#right__box03", {
    duration: 1,
    x: 150,
},
"-=1"
);
