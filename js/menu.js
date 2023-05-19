const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");


// MENU ICON HAMBURGUER
hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("spread");
})

// MENU
window.addEventListener("click", e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
})