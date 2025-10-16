const iAm = document.getElementById("iAm");

const root = document.querySelector(":root");

setTimeout(typwerite, 3000);

const me = ["Rija Ramangalahy.", "a musician.", "a developper.", "a gamer.", "a pokemon fan.", "fine, thank you."];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typwerite() {
    let wordId = 0;
    const minTime = 100;
    const timeRange = 500;
    while (true) {
        for (i = 0; i < me[wordId].length; i++) {
            typeTime = Math.round(Math.random()*timeRange + minTime);
            await sleep(typeTime);
            const letter = (me[wordId][i] === ' ') ? '\u00A0' : me[wordId][i];
            iAm.appendChild(document.createTextNode(letter));
        }

        await sleep(2000);

        for (let i = 0; i < me[wordId].length; i++) {
            if (iAm.lastChild) iAm.removeChild(iAm.lastChild);
            await sleep(Math.round(Math.random() * 200));
        }

        await sleep(2000);

        wordId = (wordId + 1) % me.length;
    }
}

const pointer = document.getElementById("cards-nav-labels-pointer");
const labels = document.querySelectorAll("#cards-nav-labels-container > span");

const isHover = e => e.parentElement.querySelector(':hover') === e;    

const myDiv = document.getElementById('mydiv');

let clicked = false;

document.addEventListener('mousemove', function checkHover() {
    labels.forEach((element, index) => {
        const hovered = isHover(element);
        if (hovered !== checkHover.hovered) {
            if (hovered) {
                pointer.style.left = `calc((100% - 3rem)*${(index)/2} + ${index}rem)`;
            }
            checkHover.hovered = hovered;
        }
    });
});

const cards = document.getElementById("cards");


labels.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        cards.style.right = `${-50 + 100*index}%`;
        cards.scrollIntoView({ behavior: 'smooth'});
    });
});

const heroDiv = document.getElementById("hero-div");

window.addEventListener("scroll", event => {
    heroDiv.style.opacity = 1-(window.scrollY/window.innerHeight);
});
