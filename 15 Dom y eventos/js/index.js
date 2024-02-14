//console.log("hello world!");

//---------Seleccionar elementos
const title = document.getElementById("txt");
//console.log(title);

const image = document.getElementsByClassName("logo");
//console.log(image[1]);

const tags = document.getElementsByTagName("section");
//console.log(tags[6]);

const elem = document.querySelectorAll(".logo")
//console.log(elem);


//--------Crear elemento y agregar attribute
const parent = document.querySelector(".products");
const newElem = document.createElement("section");
newElem.setAttribute("class","new");

parent.append(newElem);


//------Attributes
const logo = document.querySelector(".logo");
//logo.setAttribute("src", "img/mexico.jpeg");
//console.log(logo.getAttribute("src"));
//console.log(logo.hasAttribute("src"));
//logo.removeAttribute("src");

if(logo.hasAttribute("src")) {
    //alert("tiene src!")
}


//-------CSS Classes
const parent2 = document.querySelector(".products");
const parent3 = parent2.firstElementChild;
const price = parent3.lastElementChild;

price.classList.add("red");
price.classList.replace("red","blue");
price.classList.remove("blue");

//----- Modificar Texto
const button = document.getElementsByTagName("button");
//console.log(button[0].innerText);

button[0].innerText = "BUY";

//-----Modificar Style
//console.log(button[0].style);
//button[0].style.backgroundColor = "gray";


//--------Eventos 

const elemButton = button[0];
//console.log({elemButton});
elemButton.addEventListener('click', () => {
    elemButton.classList.toggle("toggle");
});

const iconRemove = document.querySelectorAll(".remove");
//console.log(iconRemove);

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

product.addEventListener("mouseenter", () => {
    product.style.opacity = ".5";
})

product.addEventListener("mouseleave", () => {
    product.style.opacity = "1";
})

const menuIcon = header.firstElementChild;
const closeIcon = document.querySelector(".close");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.add("show");
})

closeIcon.addEventListener("click", () => {
    menu.classList.remove("show");
})

const badgeNumber = document.querySelector(".notify-badge");
const addProducts = document.querySelectorAll(".addProduct");
const comprarButton = document.querySelector(".cart button.toggle");

addProducts.forEach(addProduct => {
    addProduct.addEventListener("click", () => {
        badgeNumber.textContent = parseInt(badgeNumber.textContent,10) + 1;

        const productSection = addProduct.closest("section");
        const productName = productSection.querySelector("h2").textContent;
        const productPrice = productSection.querySelector("p").textContent;
        const imgProduct = productSection.querySelector("img").src;

        const cartItem = document.createElement("section");

        cartItem.innerHTML = `
                            <img src="${imgProduct}" />
                            <h3>${productName}</h3>
                            <p>${productPrice}</p>
                            <i class="remove"><img src="img/remove.svg" /></i>`
        cart.insertBefore(cartItem,comprarButton);

        const iconRemove = document.querySelectorAll(".remove");
        const elem = iconRemove[iconRemove.length-1];

        console.log(elem);

        elem.addEventListener("click", () => {
            const elemParent = elem.parentElement;
            badgeNumber.textContent = parseInt(badgeNumber.textContent,10) - 1;
            elemParent.remove();
        })
    });
});