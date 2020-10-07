const toChange = document.querySelectorAll('.toChange');

toChange.forEach((change) => {
  change.addEventListener('click', () => {
    /*change.classList.add('bgclicked');
    change.classList.remove('bg');*/
    change.style.opacity = 0;
  });
});