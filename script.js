const sidemenu = document.querySelector('#sidemenu');
const nav = document.querySelector("nav")
const navlinks = document.querySelector("nav ul")

function openmenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}

function closemenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        nav.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', "shadow-sm");
        navlinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
    }else{
        nav.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', "shadow-sm")
        navlinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
    }
})