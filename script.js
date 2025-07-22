const button = document.getElementById('changeBtn');
const message = document.getElementById('message');
const countSpan = document.getElementById('count');

let count = 0;

button.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;

  if (count % 5 === 0) {
    message.textContent = `Wow! You've clicked ${count} times! 🎉`;
    message.style.color = '#28a745'; // green color on milestone
  } else {
    message.textContent = 'This is a simple interactive static website.';
    message.style.color = '#333';
  }
});

