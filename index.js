const mobileButton = document.querySelector('.mobile-button');

mobileButton.addEventListener('click', () => {
  const buttonList = document.getElementById('buttonDiv');

  buttonList.classList.toggle('display-buttons');
});