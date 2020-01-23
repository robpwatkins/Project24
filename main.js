document.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = 'Hi there.'
  div.classList.add('clicked');
  document.querySelector('body').appendChild(div);
}))