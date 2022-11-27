const aboutButton = document.getElementById('aboutButton');
const baseButton = document.getElementById('baseButton');
const evolutionButton = document.getElementById('evolutionButton');
const movesButton = document.getElementById('movesButton');
const about = document.getElementById('about');
const base = document.getElementById('base');
const evolution = document.getElementById('evolution');
const moves = document.getElementById('moves');

aboutButton.addEventListener('click', () => changeButtonStyle(aboutButton, about));
baseButton.addEventListener('click', () => changeButtonStyle(baseButton, base));
evolutionButton.addEventListener('click', () => changeButtonStyle(evolutionButton, evolution));
movesButton.addEventListener('click', () => changeButtonStyle(movesButton, moves));

function changeButtonStyle(buttonClick, tabButton) {
    const t = document.getElementsByClassName("detailsContainer");
    const b = document.getElementsByClassName("button");
    Array.from(t).forEach((element) => element.style.display = 'none');
    Array.from(b).forEach((element) => {         
       element.style.font = 'unset';
       element.style.backgroundColor = 'transparent';
    });
    tabButton.style.display = 'block';
    buttonClick.style.fontWeight = 'bold';
    buttonClick.style.backgroundColor = '#DDD';
}