// Custom cursor and interactive effects
document.addEventListener('DOMContentLoaded', () => {
  // create cursor element
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  // track mouse positions for trailing effect
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;
  const speed = 0.2;

  // update actual mouse position
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // animate cursor movement
  function animate() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;
    cursor.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // subtle parallax effect on main section
  const main = document.querySelector('main');
  if (main) {
    main.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;
      main.style.transform = `perspective(1000px) rotateX(${offsetY * 5}deg) rotateY(${offsetX * -5}deg)`;
    });
    main.addEventListener('mouseleave', () => {
      main.style.transform = '';
    });
  }
});
