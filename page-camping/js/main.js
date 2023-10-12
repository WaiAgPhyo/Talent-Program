let head = document.querySelector('.l-head');
head.querySelector('.menu-bar').addEventListener('click',function(e){
    e.preventDefault();
    head.querySelector('.navi').classList.toggle('show-menu')
})
