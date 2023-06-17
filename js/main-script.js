var isLargeScreen = window.matchMedia("(min-width: 768px)").matches;

if (isLargeScreen) {
    console.log('you are on desktop');
}
else {
    console.log('You are on mobile');
}


var headerBlock = document.getElementById('headerBlock');
var headerText = document.getElementById('headerText');
var avatar = document.getElementById('avatarPic');

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

function playAvatarAnimation() {
    disableScroll();
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

playAvatarAnimation();

// Scroll Animation
const controller = new ScrollMagic.Controller();

var tweenAbout = TweenMax.to("#aboutBlock", 0.7, {css: {opacity: 1, rotationZ: 0}, ease: Power2.easeInOut});

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
    
var tweenEducationCollege = TweenMax.to('#educationCollege', 0.7, {css: {opacity: 1, translateX: 0}, ease: Power2.easeInOut})

const sceneEducationColege = new ScrollMagic.Scene({
    triggerElement: '.education-dci',
    triggerHook: 0.9,
    reverse: true
})

    .setTween(tweenEducationCollege)
    .addTo(controller);

var tweenEducationDci = TweenMax.to('#educationDci', 0.7, {css: {opacity: 1, translateX: 0}, ease: Power2.easeInOut})

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

var tweenExperience = TweenMax.to('#experienceBlock', 0.7, {css: {opacity: 1, translateX: 0}, ease: Power2.easeInOut})

const sceneExperience = new ScrollMagic.Scene({
    triggerElement: '.experience-section',
    triggerHook: 0.3,
    reverse: true
})

    .setTween(tweenExperience)
    .addTo(controller);
    
var tweenExperienceCollege = TweenMax.to('#experienceCbo', 0.7, {css: {opacity: 1, translateX: 0}, ease: Power2.easeInOut})

const sceneExperienceColege = new ScrollMagic.Scene({
    triggerElement: '.experience-dci',
    triggerHook: 0.9,
    reverse: true
})

    .setTween(tweenExperienceCollege)
    .addTo(controller);

var tweenExperienceDci = TweenMax.to('#experienceDci', 0.7, {css: {opacity: 1, translateX: 0}, ease: Power2.easeInOut})

const sceneExperienceDci = new ScrollMagic.Scene({
    triggerElement: '.filler-experience',
    triggerHook: 0.7,
    reverse: true
})

    .setTween(tweenExperienceDci)
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