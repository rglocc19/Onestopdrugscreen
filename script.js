// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',()=>{
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
//End of Navabr

//Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i');
const bar = document.querySelector('.video-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
}

btn.addEventListener('click', () => {
  playPause()
})

video.addEventListener('timeupdate', () => {
    const barwidth = video.currentTime / video.duration
    bar.style.width = `${barwidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    } 
})
//End of Section 2 Video

//Section 3 Service cards
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows: true,
    },
  });
//End Section 3 Service cards