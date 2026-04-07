const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const progressBar = document.getElementById('progressBar');

function closeModal() {
    overlay.classList.remove('active');
}

function openModal() {
    overlay.classList.add('active');

    let startTime = null;
    const duration = 3000;

    progressBar.style.width = '0%';

    function animateProgress(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / duration;

        if (progress > 1) progress = 1;

        const easedProgress = Math.sin(progress * (Math.PI / 2));

        progressBar.style.width = (easedProgress * 100) + '%';

        if (progress < 1) {
            window.requestAnimationFrame(animateProgress);
        }
    }

    window.requestAnimationFrame(animateProgress);
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