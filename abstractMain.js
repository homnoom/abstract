const sheet1 = document.querySelector('.sheet-1');
const sheet2 = document.querySelector('.sheet-2');
const parallaxContainer = document.querySelector('.parallax-container');

parallaxContainer.addEventListener('scroll', () => {
  const scrollTop = parallaxContainer.scrollTop;
  sheet1.style.transform = `translateY(${scrollTop * 1}px)`;
  sheet2.style.transform = `translateY(${scrollTop * 1}px)`;
});
