gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.batch( ".image-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,
  });


  ScrollTrigger.batch( ".service-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,
  });

ScrollTrigger.batch( ".about-section-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,  
  });



ScrollTrigger.batch( ".podcast-box", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,  
  });




ScrollTrigger.batch( ".nav-main-item", {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        start: "center center",
        end: "center center",
        stagger: 0.15,
        scrub: 3
      });
    },
    repeat: true,  
  });









const fadeIn = gsap.utils.toArray(".fade-in");

fadeIn.forEach((content, index) => {
  gsap.to(content, {
    scrollTrigger: {
      trigger: content,
      start: "top 90%",
      end: "top 80%",
      scrub: 3,
      markers: false,
    },
    y: 0,
    opacity: 1,
    duration: 0.5,
  });
});

const fadeInLeft = gsap.utils.toArray(".fade-in-leftG");

fadeInLeft.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 60%",
        end: "top center",
        scrub: 3,
        markers: false,
      },
      x: 0,
      opacity: 1,
      duration: 0.5
    })
});

const fadeInRight = gsap.utils.toArray(".fade-in-rightG");

fadeInRight.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 60%",
        end: "top center",
        scrub: 3,
        markers: false,
      },
      x: 0,
      opacity: 1,
      duration: 0.5
    })
});

const fade = gsap.utils.toArray(".fadeG");

fade.forEach((content, index) => {
    gsap.to(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
        markers: false,
      },
      opacity: 1,
      duration: 1,
      delay: 2
    })
});