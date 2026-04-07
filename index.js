/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

function closeModal() {
    overlay.classList.remove('active');
}

function openModal() {
    overlay.classList.add('active');
}

overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
};

openBtn.onclick = () => openModal();
closeBtn.onclick = () => closeModal();

document.onkeydown = (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
    }
};