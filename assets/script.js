// Burguer NavBar
var screenSize = screen.width;
var sections = document.querySelector("#menu-view");

window.addEventListener("resize", ()=>{
    screenSize = screen.width
    if(screenSize > 800)  sections.style.display === 'block'
})

    
    function handleClickMenu() {
        if(screenSize <= 800){
            if (sections.style.display === "block") {
                sections.style.transition = "0.2s linear";
                sections.style.display = "none";
            } else {
                sections.style.transition = "0.2s linear";
                sections.style.display = "block";
            }
        }   
    }
    
    sections.addEventListener("click", ()=>{
        if(screenSize <= 800){
            if (sections.style.display === "block") {
                sections.style.display = "none";
            } else {
                sections.style.display = "block";
            }
        }
    })

function smoothScroll(target){
    var targetOffsetTop = document.querySelector(target).offsetTop;
    var heigthNav = document.querySelector("nav").offsetHeight;
    var targetValue = targetOffsetTop - heigthNav;

    console.log(targetValue)
    window.scroll({
        top: targetValue
    })
}
