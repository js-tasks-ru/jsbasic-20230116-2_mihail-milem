function toggleText() {
  const toggleBtn = document.querySelector('.toggle-text-button');
  const toggleTextBtn = document.querySelector('#text')

  toggleBtn.addEventListener('click', () => { 
    return (toggleTextBtn.hasAttribute('hidden')) ? toggleTextBtn.hidden = '' : toggleTextBtn.hidden = 'true'
    
  })
}
