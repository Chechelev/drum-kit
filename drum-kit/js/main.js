//функция для взаимодействия с клавиатурой
function playsound(event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);    
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio)return;
    audio.currentTime = 0.0;
    audio.play();
    key.classList.toggle('is-active');
    };


//функция для взаимодействия с мышью

function addClick() {
    this.classList.toggle('is-active');
    let audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`); 
    audio.currentTime = 0.0;
    audio.play();
}

//функция чтобы убрать активный класс
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('is-active');
} 

    let keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
    keys.forEach(key => key.addEventListener('click', addClick)); 
    window.addEventListener('keydown', playsound);
 

    
