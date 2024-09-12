const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    window.location.href = "https://open.spotify.com/intl-pt/track/4D2rEIyYw0meeh8AOXqfxK?si=c13f58d42c2e4d22";
});
