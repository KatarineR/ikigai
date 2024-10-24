function MenuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src ="img/lista.png";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src ="img/botao-fechar.png";
    }
}