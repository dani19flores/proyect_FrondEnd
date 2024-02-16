const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const menuIcon = header.firstElementChild;
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.add("show");
})

const badgeNumber = document.querySelector(".notify-badge");