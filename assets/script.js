function handleClickMenu(){
    var list = document.querySelector(".sections");
    var listItem = document.querySelectorAll(".sections li");
    var toggle = document.querySelector(".toggleIcon");    

    toggle.addEventListener('click', toggleNav);
    listItem.forEach(e => e.addEventListener('click', closeNav))
    
    function toggleNav(){
        list.classList.toggle('open');
    }

    function closeNav(){
        if(list.classList.contains('open')){
            toggle.click()
        }
    }
}

function smoothScroll(target){
    var targetOffsetTop = document.querySelector(target).offsetTop;
    var heigthNav = document.querySelector("nav").offsetHeight;
    var targetValue = targetOffsetTop - heigthNav;

    window.scroll({
        top: targetValue
    })
}
