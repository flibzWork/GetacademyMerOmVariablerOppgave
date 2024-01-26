function changeBackground() {
    var bodybkg = document.body;
    bodybkg.classList.toggle('dark-mode');
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
            border: 5px solid red;
            }
        `;

        const orangeBkgDiv = document.querySelector('.orangeDiv');

            orangeDiv.style.cssText = orangeDivChange2;

    }