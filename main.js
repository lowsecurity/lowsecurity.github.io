document.addEventListener('DOMContentLoaded', () => {
  // create custom cursor element
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

  // cursor hover states on links and buttons
  const hoverTargets = document.querySelectorAll('a, button');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });

  // reveal animations for elements with .reveal class
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => {
      revealObserver.observe(el);
    });
  }
});
