const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#E7E7E7';
        body.style.color = '#202020';
        body.style.transition = '1s';
    }else{
        body.style.background = '#202020';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
});
