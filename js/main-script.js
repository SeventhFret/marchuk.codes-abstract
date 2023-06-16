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

avatarAppear.play();
avatarAppear.finished.then(function() {
    headerText.style.display = 'flex';
    avatarToRightAnimation.play();
    headersToLeftAnimation.play();
})