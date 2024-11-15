// Tombol Ya dan Tidak
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const animationArea = document.getElementById('animationArea');

// Logika ketika tombol Ya diklik
yesButton.addEventListener('click', () => {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💞'; // Emoji love
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heart.style.fontSize = `${Math.random() * 30 + 20}px`;
    animationArea.appendChild(heart);

    // Hapus elemen setelah animasi selesai
    heart.addEventListener('animationend', () => heart.remove());
  }
});

// Logika ketika tombol Tidak diklik
noButton.addEventListener('click', () => {
  noButton.style.animation = 'shake 0.5s';
  setTimeout(() => {
    noButton.style.animation = ''; // Hapus animasi setelah selesai
  }, 500);
});

// Tambahkan animasi love
const style = document.createElement('style');
style.innerHTML = `
  .heart {
    position: absolute;
    bottom: 0;
    animation: floatUp linear infinite;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
