var isLargeScreen = window.matchMedia("(min-width: 768px)").matches;

if (isLargeScreen) {
    var avatarAppear = anime({
        autoplay: false,
        targets: '.header-block-avatar',
        duration: 2000,
        easing: 'easeInOutQuad',
        opacity: 1
    })
    
    var avatarToRightAnimation = anime({
        autoplay: false,
        targets: '.header-block-avatar',
        duration: 2500,
        translateX: [0, '15vw'],
        marginLeft: [0, '10vw'],
    })
    
    var headersToLeftAnimation = anime({
        autoplay: false,
        targets: '.header-block-text',
        duration: 2500,
        translateX: [0, '-15vw'],
        marginRight: [0, '10vw']
    })
}
else {
    var avatarAppear = anime({
        autoplay: false,
        targets: '.header-block-avatar',
        duration: 2000,
        easing: 'easeInOutQuad',
        opacity: 1
    })
    
    var avatarToRightAnimation = anime({
        autoplay: false,
        targets: '.header-block-avatar',
        duration: 2500,
        translateY: [0, '-25vw'],
        marginBottom: [0, '-20vw'],
    })
    
    var headersToLeftAnimation = anime({
        autoplay: false,
        targets: '.header-block-text',
        duration: 2500,
        translateY: [0, '30vw'],
        marginTop: [0, '25vw']
    })
}


var headerBlock = document.getElementById('headerBlock');
var headerText = document.getElementById('headerText');
var avatar = document.getElementById('avatarPic');



// ? Disable/Enable Scroll
function disableScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

function enableScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.overflowX = 'hidden';
  }

function restoreBlocks() {
    headerBlock.style.display = 'static';
    avatar.style.display = 'static';
}

function playDesktopAvatarAnimation() {
    // disableScroll();
    avatarAppear.play();
    avatarAppear.finished.then(function() {
        headerText.style.display = 'flex';
        avatarToRightAnimation.play();
        headersToLeftAnimation.play();
    })
    headersToLeftAnimation.finished.then(function() {
        enableScroll();
        restoreBlocks();
    })
}

playDesktopAvatarAnimation();

// Scroll Animation
const controller = new ScrollMagic.Controller();

var tweenAbout = TweenMax.to("#aboutBlock", 0.7, {css: {opacity: 1}, ease: Power2.easeInOut});

const sceneAbout = new ScrollMagic.Scene({
    triggerElement: '.about-section',
    triggerHook: 0.3,
    reverse: true,
})
    .setTween(tweenAbout)
    .addTo(controller);

// ? EDUCATION ==============
var tweenEducationSection = TweenMax.to('#educationSection', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneEducationSection = new ScrollMagic.Scene({
    triggerElement: '.education-section',
    triggerHook: 0.9,
    reverse: true
})

    .setTween(tweenEducationSection)
    .addTo(controller);

var tweenEducation = TweenMax.to('#educationBlock', 0.7, {css: {opacity: 1, translateX: 0}, ease: Power2.easeInOut})

const sceneEducation = new ScrollMagic.Scene({
    triggerElement: '.education-section',
    triggerHook: 0.3,
    reverse: true
})

    .setTween(tweenEducation)
    .addTo(controller);
    
var tweenEducationCollege = TweenMax.to('#educationCollege', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneEducationColege = new ScrollMagic.Scene({
    triggerElement: '.education-dci',
    triggerHook: 0.9,
    reverse: true
})

    .setTween(tweenEducationCollege)
    .addTo(controller);

var tweenEducationDci = TweenMax.to('#educationDci', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneEducationDci = new ScrollMagic.Scene({
    triggerElement: '.filler',
    triggerHook: 0.7,
    reverse: true
})

    .setTween(tweenEducationDci)
    .addTo(controller);

// ? EXPERIENCE ==============
var tweenExperienceSection = TweenMax.to('#experienceSection', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneExperienceSection = new ScrollMagic.Scene({
    triggerElement: '.experience-section',
    triggerHook: 0.9,
    reverse: true
})

    .setTween(tweenExperienceSection)
    .addTo(controller);

var tweenExperience = TweenMax.to('#experienceBlock', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneExperience = new ScrollMagic.Scene({
    triggerElement: '.experience-section',
    triggerHook: 0.3,
    reverse: true
})

    .setTween(tweenExperience)
    .addTo(controller);
    
var tweenExperienceCollege = TweenMax.to('#experienceCbo', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneExperienceColege = new ScrollMagic.Scene({
    triggerElement: '.experience-dci',
    triggerHook: 0.9,
    reverse: true
})

    .setTween(tweenExperienceCollege)
    .addTo(controller);

var tweenExperienceDci = TweenMax.to('#experienceDci', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneExperienceDci = new ScrollMagic.Scene({
    triggerElement: '.experience-pychallenger',
    triggerHook: 0.7,
    reverse: true
})

    .setTween(tweenExperienceDci)
    .addTo(controller);
    
var tweenExperiencePyChallenger = TweenMax.to('#experiencePyChallenger', 0.7, {css: {opacity: 1}, ease: Power2.easeInOut})

const sceneExperiencePyChallenger = new ScrollMagic.Scene({
    triggerElement: '.filler-experience',
    triggerHook: 0.4,
    reverse: true
})

    .setTween(tweenExperiencePyChallenger)
    .addTo(controller);

// ? SKILLS
var tweenSkills = TweenMax.to('#skillsBlock', 0.7, {css: {opacity: 1, translateY: 0}, ease: Power2.easeInOut})

var skillsSectionScene = new ScrollMagic.Scene({
    triggerElement: '.skills-section',
    triggerHook: 0.4,
    reverse: true
  })

  .setTween(tweenSkills)
  .addTo(controller);

// ? LOGOS APPEARANCE
var logos = document.querySelectorAll('.skill-logo');
var delay = 0;

logos.forEach(function(logo){
    var skillsScene = new ScrollMagic.Scene({
        triggerElement: '.skills-section',
        offset: 100,
        reverse: true
      })
      .on('leave', function() {
        delay = 0;
      })
      .setTween(TweenMax.to(logo, 0.5, {css: {opacity: 1, translateY: 0}, delay: delay, ease: Power2.easeInOut}))
      .addTo(controller);
      delay += 0.1;
  });
  
var languages = document.querySelectorAll('.language');
var delayLang = 0;
  
languages.forEach(function(lang){
    var langsScene = new ScrollMagic.Scene({
        triggerElement: '.languages-section',
        offset: 300,
        reverse: true
    })
    .on('leave', function() {
        delayLang = 0;
    })
    .setTween(TweenMax.to(lang, 0.5, {css: {opacity: 1, translateY: 0}, delay: delayLang, ease: Power2.easeInOut}))
    .addTo(controller);
    delayLang += 0.3;
});


if (isLargeScreen) {
var langBlockScene = new ScrollMagic.Scene({
    triggerElement: '.languages-section',
    triggerHook: 0.3,
    reverse: true
})

    .setTween(TweenMax.to('#languagesBlock', 0.5, {css: {opacity: 1, translateY: 0}, ease: Power2.easeInOut}))
    .addTo(controller);

} else {
    var langBlockScene = new ScrollMagic.Scene({
        triggerElement: '.languages-section',
        // triggerHook: 0.4,
        offset: 300,
        reverse: true
    })
    
        .setTween(TweenMax.to('#languagesBlock', 0.5, {css: {opacity: 1, translateY: 0}, ease: Power2.easeInOut}))
        .addTo(controller);
}

var buttonsScene = new ScrollMagic.Scene({
    triggerElement: '.languages-section',
    offset: 300,
    reverse: true
})

    .setTween(TweenMax.to('#cvBlock', 0.6, {css: {opacity: 1, translateY: 0}, ease: Power2.easeInOut}))
    .addTo(controller);

var projScene = new ScrollMagic.Scene({
    triggerElement: '.projects-section',
    triggerHook: 0.6,
    reverse: true
})

    .setTween(TweenMax.to('#projectsBlock', 0.5, {css: {opacity: 1, translateY: 0}, ease: Power2.easeInOut}))
    .addTo(controller);
    

if (isLargeScreen) {
var projCards = document.querySelectorAll('.project-card');
var delayCard = 0;
    
projCards.forEach(function(card){
    var cardsScene = new ScrollMagic.Scene({
        triggerElement: '.projects-section',
        offset: 300,
        reverse: true
    })
    .on('leave', function() {
        delayCard = 0;
    })
    .setTween(TweenMax.to(card, 0.5, {css: {opacity: 1}, delay: delayCard, ease: Power2.easeInOut}))
    .addTo(controller);
    delayCard += 0.3;
});
} else {
    var projOneScene = new ScrollMagic.Scene({
        triggerElement: '.projects-section',
        offset: 300,
        reverse: true
    })
    .setTween(TweenMax.to('#projectOne', 0.5, {css: {opacity: 1}, ease: Power2.easeInOut}))
    .addTo(controller);

    var projTwoScene = new ScrollMagic.Scene({
        triggerElement: '.filler-mobile1',
        offset: 300,
        reverse: true
    })
    .setTween(TweenMax.to('#projectTwo', 0.5, {css: {opacity: 1}, ease: Power2.easeInOut}))
    .addTo(controller);

    var projThreeScene = new ScrollMagic.Scene({
        triggerElement: '.filler-mobile2',
        offset: 300,
        reverse: true
    })
    .setTween(TweenMax.to('#projectThree', 0.5, {css: {opacity: 1}, ease: Power2.easeInOut}))
    .addTo(controller);
}


var contactsScene = new ScrollMagic.Scene({
    triggerElement: '.contacts-section',
    triggerHook: 0.6,
    reverse: true
})

    .setTween(TweenMax.to('#contactsBlock', 0.5, {css: {opacity: 1, translateY: 0}, ease: Power2.easeInOut}))
    .addTo(controller);


var contactGroups = document.querySelectorAll('.contacts-sub-group');
var delayCont = 0;

contactGroups.forEach(function(group){
    var groupsScene = new ScrollMagic.Scene({
        triggerElement: '.contacts-section',
        offset: 300,
        reverse: true
    })
        .on('leave', function() {
            delayCont = 0;
        })
        .setTween(TweenMax.to(group, 0.5, {css: {opacity: 1}, delay: delayCont, ease: Power2.easeInOut}))
        .addTo(controller);
    delayCont += 0.3;
});

var mapScene = new ScrollMagic.Scene({
    triggerElement: '.contacts-section',
    offset: 300,
    reverse: true
})
    .setTween(TweenMax.to('#contactMap', 0.5, {css: {opacity: 1, translateY: 0}, ease: Power2.easeInOut}))
    .addTo(controller);
