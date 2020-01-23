document.querySelector('button').addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = 'Hi there.'
  div.style.border = '1px solid black';
  document.querySelector('body').appendChild(div);
})