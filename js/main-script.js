var isLargeScreen = window.matchMedia("(min-width: 768px)").matches;

if (isLargeScreen) {
    console.log('you are on desktop');
}
else {
    console.log('You are on mobile');
}


var headerText = document.getElementById('headerText');
var avatar = document.getElementById('avatarPic');
var headerBlock = document.getElementById('headerBlock');

var avatarAppear = anime({
    autoplay: false,
    targets: '.header-block-avatar',
    duration: 2000,
    opacity: 1
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