const iconRemove = document.querySelectorAll(".remove");
iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        badgeNumber.textContent = parseInt(badgeNumber.textContent,10) - 1;
        elemParent.remove();
    })
});

const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const product = document.querySelector(".mouse");

const menuIcon = header.firstElementChild;

const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.add("show");
})



const badgeNumber = document.querySelector(".notify-badge");
const addProducts = document.querySelectorAll(".addProduct");
const buyButton = document.querySelector(".cart button.toggle");

addProducts.forEach(addProduct => {
    addProduct.addEventListener("click", () => {
        
        const productSection = addProduct.closest("section");
        const productName = productSection.querySelector("h2").textContent;
        const productPrice = productSection.querySelector("p").textContent;
        const imgProduct = productSection.querySelector("img").src;

        const existingCartItem = Array.from(cart.querySelectorAll("section")).find(cartItem => {
            return cartItem.querySelector("h3").textContent === productName;
        });

        if(!existingCartItem){
            badgeNumber.textContent = parseInt(badgeNumber.textContent,10) + 1;
            const cartItem = document.createElement("section");

            cartItem.innerHTML = `
                                <img src="${imgProduct}" />
                                <h3>${productName}</h3>
                                <p>${productPrice}</p>
                                <i class="remove"><img src="img/Icon/remove.svg" /></i>`
            

            cart.insertBefore(cartItem,buyButton);

            const iconRemove = document.querySelectorAll(".remove");
            const elem = iconRemove[iconRemove.length-1];

            elem.addEventListener("click", () => {
                const elemParent = elem.parentElement;
                badgeNumber.textContent = parseInt(badgeNumber.textContent,10) - 1;
                elemParent.remove();
            })
        }
    });
});

