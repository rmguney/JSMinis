const pages = [document.getElementById('page1'), document.getElementById('page2'), document.getElementById('page3')];
const buttons = [document.getElementById('button1'), document.getElementById('button2'), document.getElementById('button3')];

function toggleVisibility(pages, index) {
  for (let i = 0; i < pages.length; i++) {
    if (i === index) {
      pages[i].classList.remove('hidden');
      buttons[i].classList.add('bg-white');
      buttons[i].classList.add('text-cyan-400');
    } else {
      pages[i].classList.add('hidden');
      buttons[i].classList.add('bg-cyan-400');
      buttons[i].classList.add('text-white');
      buttons[i].classList.remove('bg-white');
      buttons[i].classList.remove('text-cyan-400');
    }
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    toggleVisibility(pages, i);
  });
}