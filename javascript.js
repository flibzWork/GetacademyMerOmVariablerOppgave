function changeBackground() {
    var bodybkg = document.body;
    bodybkg.classList.toggle('dark-mode');
}

function changeBackgroundRed() {
    var bodybkgred = document.body;
    bodybkgred.classList.toggle('red-mode');
}

function changeBackgroundYellow() {
    var bodybkgyellow = document.body;
    bodybkgyellow.classList.toggle('yellow-mode');
}

function changeBackgroundGreen() {
    var bodybkggreen = document.body;
    bodybkggreen.classList.toggle('green-mode');
}

function changeBackgroundBlue() {
    var bodybkgblue = document.body;
    bodybkgblue.classList.toggle('blue-mode');
}

function changeBackgroundPink() {
    var bodybkgpink = document.body;
    bodybkgpink.classList.toggle('pink-mode');
}

function changeBackgroundOrange() {
    var bodybkgorange = document.body;
    bodybkgorange.classList.toggle('orange-mode');
}

const redDivChange = document.querySelector('#red');
    redDivChange.addEventListener('click', divRedChange);

    function divRedChange(e) {
        const redDivChange2 = `
            background-color: red;
        `;

        const redBkgDiv = document.querySelector('.redDiv');

            redDiv.style.cssText = redDivChange2;
    }

const yellowDivChange = document.querySelector('#yellow');
    yellowDivChange.addEventListener('click', divYellowChange);

    function divYellowChange(e) {
        const yellowDivChange2 = `
            background-color: yellow;
            border: 5px dashed blue;
        `;

        const yellowBkgDiv = document.querySelector('.yellowDiv');

            yellowDiv.style.cssText = yellowDivChange2;
    }

const greenDivChange = document.querySelector('#green');
    greenDivChange.addEventListener('click', divGreenChange);

    function divGreenChange(e) {
        const greenDivChange2 = `
            background-color: green;
        `;

        const greenBkgDiv = document.querySelector('.greenDiv');

            greenDiv.style.cssText = greenDivChange2;
    }

const blueDivChange = document.querySelector('#blue');
    blueDivChange.addEventListener('click', divBlueChange);

    function divBlueChange(e) {
        const blueDivChange2 = `
            background-color: blue;
        `;

        const blueBkgDiv = document.querySelector('.blueDiv');

            blueDiv.style.cssText = blueDivChange2;
    }

const pinkDivChange = document.querySelector('#pink');
    pinkDivChange.addEventListener('click', divPinkChange);

    function divPinkChange(e) {
        const pinkDivChange2 = `
            background-color: pink;
        `;

        const pinkBkgDiv = document.querySelector('.pinkDiv');

            pinkDiv.style.cssText = pinkDivChange2;
    }

const orangeDivChange = document.querySelector('#orange');
    orangeDivChange.addEventListener('click', divOrangeChange);

    function divOrangeChange(e) {
        const orangeDivChange2 = `
            background-color: orange;
            }
        `;

        const orangeBkgDiv = document.querySelector('.orangeDiv');

            orangeDiv.style.cssText = orangeDivChange2;

    }