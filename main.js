document.querySelector('button').addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = 'Hi there.'
  document.querySelector('body').appendChild(div);
})