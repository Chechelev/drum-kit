function playsound(event) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);    
    let note = document.querySelector(`.note[data-note="${event.keyCode}"]`);
    if(!audio)return;
    audio.currentTime = 0.0;
    audio.play();
    note.classList.toggle('is-active');
    };


//функция для взаимодействия с мышью

function addClick() {
    this.classList.toggle('is-active');
    let audio = document.querySelector(`audio[data-key="${this.dataset.note}"]`); 
    audio.currentTime = 0.0;
    audio.play();
}

//функция чтобы убрать активный класс
function removeTransition(event) {
    if (event.propertyName !== 'transform' && event.propertyName !== 'background' ) return;
    this.classList.remove('is-active');
} 

    let keys = document.querySelectorAll('.note');
    keys.forEach(note => note.addEventListener('transitionend', removeTransition)); 
    keys.forEach(note => note.addEventListener('click', addClick)); 
    window.addEventListener('keydown', playsound);