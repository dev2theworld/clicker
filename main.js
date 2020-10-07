const one = document.getElementById('one');
const two = document.getElementById('two');

one.addEventListener('click', () => {
  one.classList.add('bgclicked');
  one.classList.remove('bg');
});

two.addEventListener('click', () => {
  two.classList.add('bgclicked');
  two.classList.remove('bg');
});