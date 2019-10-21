let menuIcon = document.getElementById('menuIcon');
let menuList = document.getElementById('menuList')

menuIcon.addEventListener('click', openAndCloseMenu);
menuList.addEventListener('click', hideMenuIfClickOnItem)

function openAndCloseMenu(){
    if(menuList.className == 'navbar__list hide'){
        menuList.className = 'navbar__list';
    } else {
        menuList.className = 'navbar__list hide';
    } 
}

function hideMenuIfClickOnItem(){
    menuList.className = 'navbar__list hide';
}

