const buttonBox = document.querySelector('.button-box');
const displaySmall = document.getElementById('display__small');
const displayLarge = document.getElementById('display__large');

buttonBox.addEventListener('click', (clickInfo)=> {
    if(!clickInfo.target.classList.contains('btn')){
        return;
    }
    let value = clickInfo.target.textContent;
    console.log(value);
    displayLarge.textContent = value;
    
    if(value === 'AC'){
        clearDisplay();
    }
});

clearDisplay = () =>{

}