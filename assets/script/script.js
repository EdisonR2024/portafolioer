let menu_nav = document.querySelector("#navbar");
let boton_menu = menu_nav.querySelector("button");

boton_menu.addEventListener('click', addRemoveMenu);

menu_nav.addEventListener('click', event=>{
    let elemento_nav = event.target;
    //Para que se aplique el evento click en todos los links de opciones del menu
    if (elemento_nav.classList.contains('opcion-menu')) {
        addRemoveMenu();
    }
});

function addRemoveMenu() {
    menu_nav.classList.toggle('open');
}

//Código para ocultar el menu cuando se haga un scroll de la página
document.addEventListener('scroll', () => {
    menu_nav.classList.remove('open');
});
