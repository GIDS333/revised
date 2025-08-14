// Fun pulse effect for the mascot glow
setInterval(() => {
    const mascot = document.querySelector('.mascot');
    mascot.style.filter = `drop-shadow(0 0 ${Math.random() * 40 + 10}px rgba(255,255,255,0.9))`;
}, 500);
