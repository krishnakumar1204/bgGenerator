const backgroundColorPicker = document.getElementById('background-color');
const textColorPicker = document.getElementById('text-color');
const container = document.querySelector('.container');

backgroundColorPicker.addEventListener('input', () => {
  container.style.backgroundColor = backgroundColorPicker.value;
});

textColorPicker.addEventListener('input', () => {
  container.style.color = textColorPicker.value;
});
