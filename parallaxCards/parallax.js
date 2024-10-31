document.querySelectorAll('.card-wrap').forEach(cardWrap => {
  const card = cardWrap.querySelector('.card');
  const cardBg = card.querySelector('.card-bg');
  const imageUrl = card.getAttribute('data-image');

  cardBg.style.backgroundImage = `url(${imageUrl})`;

  cardWrap.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (mouseY - centerY) / centerY * 20;
    const rotateY = (mouseX - centerX) / centerX * -20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardBg.style.transform = `translateX(${(mouseX - centerX) / 10}px) translateY(${(mouseY - centerY) / 10}px)`;
  });

  cardWrap.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0) rotateY(0)`;
    cardBg.style.transform = `translateX(0) translateY(0)`;
  });
});