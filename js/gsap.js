gsap.registerPlugin(Flip,ScrollToPlugin,EaselPlugin);

const preloaderBackground = document.querySelector('.preloader__background');
const preloaderText = document.querySelector('.preloader__text span');
const heroTitles = [...document.querySelectorAll('.hero__title span span')];
const heroImageStart = document.querySelector('.hero-image-start');
const heroCaption = document.querySelector('.hero__caption span');
const heroButton = document.querySelector('.hero__button');
const heroImageWrapper = document.querySelector('.hero__image');
const heroImage = document.querySelector('.hero__image img, .hero__image video');
const headerItems = [...document.querySelectorAll('.header *')];







const master = gsap.timeline();



const setInitialStates = () => {

gsap.set(headerItems, {
    y: 24,
    autoAlpha: 0, // autoAlpha = visibility: hidden & opacity: 0
});


gsap.set(heroButton, {
    y: 64,
    autoAlpha: 0
});



gsap.set([preloaderText, heroCaption, heroTitles], {
    yPercent: 100

});

}

const preloaderAnimation = () => {

    const tl = gsap.timeline({
        defaults: {
            ease: 'power2.out'
        }
    });


    tl.to(preloaderText, {
        yPercent: -10,
        delay: 0
    })
    .to(preloaderText, {
        yPercent: -120,
        delay: 0
    }, '<')

    .to(preloaderBackground, {
        duration: 0.6,
        ease: "power4.inOut",
        backgroundColor: " #e04220"
        // backgroundColor: "#ffc107"
    }, '-=.1')

    .to(preloaderBackground, {
        yPercent: -100,
        duration: 1.3,
        ease: "power4.inOut",
    }, '-=.1')

    return tl;
}


const heroImageAnimation = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: 'power3.inOut',
            duration: 2
    }
});




const state = Flip.getState(heroImageWrapper);
heroImageStart.appendChild(heroImageWrapper);

tl.from(heroImage, {
    scale: 1.05
})

.to(heroImageWrapper, {
    borderRadius: '32px', // remover isto depois
    scale: .85
}, '<')


.add(() => {
    Flip.to(state, {
        duration: 1,
        ease: 'power3.inOut'
    })
}, '<')








return tl;
}

const UIAnimation = () => {

    const tl = gsap.timeline( {
        delay: 0.5,
        defaults: {
            ease: 'power3.inOut',
            duration: 1.7,
            yPercent: 0,
            y: 0
        }
    });


    tl.to(heroTitles, {
        duration: 1,
        ease: 'power3.inOut',

    })

    .to(heroCaption, {
        stagger: 0.2,
    }, '-=0.6')


    .to(heroButton, {
        autoAlpha: 1
    }, '0.7')

    .to(headerItems, {
        autoAlpha: 1
    }, '0.5')

    return tl;

}


master
 .add(setInitialStates())
 .add(preloaderAnimation(), '-=.1')
 .add(heroImageAnimation(), '-=1')
 .add(UIAnimation(), '-=1.8')