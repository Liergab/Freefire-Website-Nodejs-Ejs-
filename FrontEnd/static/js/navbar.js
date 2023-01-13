const iconTrigger = document.querySelector('.icontrigger-container')
const icon = document.querySelector('#icon')
const menu = document.querySelector('.nav-container')

iconTrigger.addEventListener('click', () =>{

    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-xmark')

        menu.classList.add('show')
        menu.classList.remove('hide')
    }else{
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-xmark')

        menu.classList.remove('show')
        menu.classList.add('hide')
    }
})