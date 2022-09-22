const bar = document.getElementById('bar1');
const list =document.querySelector('.list');
const navbar = document.querySelector('.navbar');
bar.onclick = () => {
  list.classList.toggle('showbar')  ;
}
// scrol
const navbarheight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navbarheight) {
      navbar.classList.add("fix-nav");
    } else {
      navbar.classList.remove("fix-nav");
    }
  });
// theme
const icons = [...document.querySelectorAll(".themeicon")];

icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        icon.innerHTML = '<i class="bx bx-sun"></i>';
        icon.style.color = "white";
      } else {
        icon.innerHTML = '<i class="bx bx-moon"></i>';
        icon.style.color = "#293241";
      }
    });
  }
});
// scrol to top
let btn = document.querySelector('#btn');
window.onscroll = function(){
    if(window.scrollY >= 600){
 btn.style.display = 'block';
 
    }else{
        btn.style.display = 'none';
  
    }
}
btn.onclick = function(){
    window.scrollTo({
left :0,
top : 0,
behavior:"smooth"

    })
}
