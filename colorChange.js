
const button = document.getElementById('color-button');
const container = document.getElementById('color-container');
const colors = ['red', 'orange', 'purple', 'green', 'pink', 'yellow'];

container.style.backgroundColor = '#0089aa';

const changeBackground = () => {
    const colorIndex= parseInt(Math.random()*colors.length)
    container.style.backgroundColor = colors[colorIndex]
    };

button.addEventListener('click', changeBackground);
