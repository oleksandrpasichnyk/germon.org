const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const nav = document.querySelector("#tf-menu");

hamburger.addEventListener("click", mobileMenu);

for (let item of navMenu.children) {
    item.addEventListener("click", () => {
        if(navMenu.classList.contains("active")){
            mobileMenu();
        }
    });
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}