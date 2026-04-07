/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.onclick = () => overlay.classList.add('active');
closeBtn.onclick = () => overlay.classList.remove('active');
overlay.onclick = (e) => { if (e.target === overlay) overlay.classList.remove('active'); };