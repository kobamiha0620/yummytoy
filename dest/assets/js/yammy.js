
var openBtn =  document.getElementById('openbtn');
var yummyLink01 =  document.getElementById('yummyLink01');
var yummyLink02 =  document.getElementById('yummyLink02');
var yummyLink03 =  document.getElementById('yummyLink03');
var yummyLink04 =  document.getElementById('yummyLink04');
var yummyLink05 =  document.getElementById('yummyLink04');
var target = document.getElementById('g-nav');

if(openBtn){
  openBtn.addEventListener('click', function(){
    openBtn.classList.toggle('active');
    target.classList.toggle('panelactive');
  }, false);

  yummyLink01.addEventListener('click', function() {
    console.log('clicked');
    openBtn.classList.remove('active');
    target.classList.remove('panelactive');
  });
  yummyLink02.addEventListener('click', function() {
    console.log('clicked');

    openBtn.classList.remove('active');
    target.classList.remove('panelactive');
  });
  yummyLink03.addEventListener('click', function() {
    openBtn.classList.remove('active');
    target.classList.remove('panelactive');
  });
  yummyLink04.addEventListener('click', function() {
    openBtn.classList.remove('active');
    target.classList.remove('panelactive');
  });
  yummyLink05.addEventListener('click', function() {
    openBtn.classList.remove('active');
    target.classList.remove('panelactive');
  });
}

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
     let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}
