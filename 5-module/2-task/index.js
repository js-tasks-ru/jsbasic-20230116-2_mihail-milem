function toggleText() {
  const toggleBtn = document.querySelector('.toggle-text-button');
  const toggleTextBtn = document.querySelector('#text')

  toggleBtn.addEventListener('click', () => { 
<<<<<<< HEAD
   return  (toggleTextBtn.hasAttribute('hidden')) ? toggleTextBtn.hidden = '' : toggleTextBtn.hidden = 'true'
=======
    return (toggleTextBtn.hasAttribute('hidden')) ? toggleTextBtn.hidden = '' : toggleTextBtn.hidden = 'true'
>>>>>>> 21cbab03c236e62a2618de61a1d2a0e6b3232232
    
  })
}
