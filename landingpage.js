const copyUrl = document.querySelector('li .btn-copy');
const copyUrl2 = document.querySelector('p+.btn-copy');

copyUrl.addEventListener('click', () => {
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
copyUrl2.addEventListener('click', () => {
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

const subscribeBtn = document.querySelector('.btn-subscribe');
const modal = document.querySelector('.subscribe-modal');

const modalBtn = document.querySelector('.modal-btn');

subscribeBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
