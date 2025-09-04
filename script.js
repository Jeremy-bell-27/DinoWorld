
  /*FOND ANIME PAGE ACCUEIL*/
  
  let lastScrollY = window.scrollY;
  let currentOffset = 0;

  window.addEventListener("scroll", () => {
    const newScrollY = window.scrollY;
    const delta = newScrollY - lastScrollY;

    // Appliquer une vitesse différente selon la direction
    if (delta > 0) {
      // Scroll vers le bas (fond monte)
      currentOffset -= delta * 0.1; // vitesse normale
    } else {
      // Scroll vers le haut (fond descend)
      currentOffset -= delta * 0.05; // plus lent
    }

    // Appliquer la nouvelle position de fond
    document.body.style.transition = "background-position 0.5s ease-out";
    document.body.style.backgroundPosition = `center ${currentOffset}px`;

    lastScrollY = newScrollY;

    // Réinitialisation douce après une pause
    clearTimeout(window.resetScrollTimeout);
    window.resetScrollTimeout = setTimeout(() => {
      document.body.style.transition = "background-position 2s ease-out";
      currentOffset = 0;
      document.body.style.backgroundPosition = "center center";
    }, 400);
  });

  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('nav ul');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('expanded');
    navMenu.classList.toggle('collapsed');
  });