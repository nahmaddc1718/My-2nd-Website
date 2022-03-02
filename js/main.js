hamburger = document.querySelector('.hamburger')
navMenu_close = document.querySelector('.navMenu_close')
nav_menus = document.querySelector('.nav_menus')



hamburger.addEventListener('click', ()=>{
    nav_menus.classList.toggle('resp_nav_toggle')
})

navMenu_close.addEventListener('click', ()=>{
    nav_menus.classList.toggle('resp_nav_toggle')
})

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.navbar');
    scroll.classList.toggle("scrollDown", window.scrollY > 400)
})

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 600)
})


function scroll_To_Top (){
    window.scrollTo({
        top: 0,
    })
}


