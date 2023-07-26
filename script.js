const body = document.querySelector('body');
const start = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const copyCSS = document.querySelector('#copyCSS');
const copySuccess = document.querySelector('#copySuccess');
const gradientColors = document.querySelector('.gradientColors');
const colorInput1 = document.querySelector('#color1');
const colorInput2 = document.querySelector('#color2');
const percent1 = document.querySelector('#percent1');
const percent2 = document.querySelector('#percent2');


colorInput1.value = 'pink';
colorInput2.value = 'magenta';

let intervalId;
var colorCode;

const startChangingBG = () => {
    // start.style.opacity = 0.8;
    colorCode = null;
    const changeBG = () => {
        let inputValue1 = colorInput1.value;
        let inputValue2 = colorInput2.value;
        let percentValue1 = percent1.value;
        let percentValue2 = percent2.value;

        percent1.style.accentColor = inputValue1;
        percent2.style.accentColor = inputValue2;
        colorCode = generateLinearGradientColors(inputValue1, inputValue2, percentValue1, percentValue2);
        gradientColors.style.backgroundImage = colorCode;
    }
    start.disabled = true;
    stopButton.disabled = false;
    intervalId = setInterval(changeBG, 1500);
}

function rangeColor(element) {
    element.style.accentColor = element.style.accentColor;
}
function generateLinearGradientColors(color1,color2, percent1, percent2){
    return `linear-gradient(${generateRandomDegree()}deg, ${color1} ${percent1}%, ${color2} ${percent2}%)`;
}

function gennerateRandomPercent(){
    return `${Math.ceil(Math.random()*100)}`
}

function generateRandomDegree(){
    // Generate random number between -360 and +360 degrees inclusive of both ends
    return Math.round((Math.random()*720)-360) ;
}

startChangingBG(); 

start.addEventListener('click', startChangingBG)

stopButton.addEventListener('click', function clear() {
    start.disabled = false;
    stopButton.disabled = true;
    clearInterval(intervalId);
});


copyCSS.addEventListener("click", (event) => {
    backgroundImageCSS = `background : ${colorCode};`
    navigator.clipboard.writeText(backgroundImageCSS);
    copySuccess.style.visibility = 'visible';
    setTimeout(()=>{
        copySuccess.style.visibility = 'hidden';
    },700)
    event.preventDefault();
});




