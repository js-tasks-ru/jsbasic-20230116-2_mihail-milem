function hideSelf() {
  const buttonHide = document.querySelector('.hide-self-button');

  buttonHide.addEventListener('click', () => {
    buttonHide.hidden = 'true'
  })
}
