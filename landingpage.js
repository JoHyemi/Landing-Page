const copyUrl = document.querySelectorAll('.btn-copy');

for(let i = 0; i < 3; i++){
  copyUrl[i].addEventListener('click', () => {
    let url = '';
    let urlText = document.createElement('textarea');
    document.body.appendChild(urlText);
    url = window.document.location.href;
    urlText.value = url;
    urlText.select();
    document.execCommand('copy');
    document.body.removeChild(urlText);
    alert('URL이 복사되었습니다:)')
})
}

const subscribeBtn = document.querySelector('.btn-subscribe');
const modal = document.querySelector('.subscribe-modal');

const modalBtn = document.querySelector('.modal-btn');

subscribeBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


const upBtn = document.querySelector('.btn-up');

upBtn.addEventListener('click', () => {
    scrollTo({ top: 0, behavior: 'smooth' });
});

const menuHome = document.querySelectorAll('.menu-home');
const menuAbout = document.querySelectorAll('.menu-about');
const menuSubscribe = document.querySelectorAll('.menu-subscribe');

for(let i = 0; i < 2;i++) {
  menuHome[i].addEventListener('click', () => {
    document.querySelector('.header').scrollIntoView();
  dropMenu.style.display = 'none'
})
}
for(let i = 0; i < 2;i++) {
menuAbout[i].addEventListener('click', () => {
    document.querySelector('main').scrollIntoView();
    dropMenu.style.display = 'none'
})
}
for(let i = 0; i < 2;i++) {
menuSubscribe[i].addEventListener('click', () => {
    document.querySelector('.sec-subscribe').scrollIntoView();
    dropMenu.style.display = 'none'
})
}
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.menu-close');
const dropMenu = document.querySelector('.drop-menu');

openMenu.addEventListener('click', () => {
  dropMenu.style.display = 'block'
})
closeMenu.addEventListener('click', ()=> {
  dropMenu.style.display = 'none'
})