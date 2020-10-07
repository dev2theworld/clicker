const toChange = document.querySelectorAll('.toChange');

toChange.forEach((change) => {
  change.addEventListener('click', () => {
    
    change.style.opacity = 0;
  });
});