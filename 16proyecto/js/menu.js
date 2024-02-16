$(document).ready(function () {
    $('#menuContainer').load('../menu.html', function () {
        const closeIcon = $('#menuContainer .close');
        closeIcon.on("click", function () {
            $('#menuContainer').removeClass("show");
        });

        const home = document.querySelector(".homeMenu");
        home.addEventListener("click", () => {
            $('#productsContainer').load('../home.html');
        });

        const blouse = document.querySelector(".blouse");
        blouse.addEventListener("click", () => {
            $('#productsContainer').load('../blouse.html', function () {
                const addProducts = document.querySelectorAll(".addProduct");
                if(addProducts.length > 0)
                {
                    addProductToCart(addProducts);
                }
            });
        });

        const tShirt = document.querySelector(".Shirt");
        tShirt.addEventListener("click", () => {
            $('#productsContainer').load('../t-shirt.html', function () {
                const addProducts = document.querySelectorAll(".addProduct");
                if(addProducts.length > 0)
                {
                    addProductToCart(addProducts);
                }
            });
        });

        const shoes = document.querySelector(".shoes");
        shoes.addEventListener("click", () => {
            $('#productsContainer').load('../shoes.html', function () {
                const addProducts = document.querySelectorAll(".addProduct");
                if(addProducts.length > 0)
                {
                    addProductToCart(addProducts);
                }
            });
        });

        const accessories = document.querySelector(".accessories");
        accessories.addEventListener("click", () => {
            $('#productsContainer').load('../accessories.html', function () {
                const addProducts = document.querySelectorAll(".addProduct");
                if(addProducts.length > 0)
                {
                    addProductToCart(addProducts);
                }
            });
        });
    });
});


function addProductToCart(addProducts){
    const buyButton = document.querySelector(".cart button.toggle");

    addProducts.forEach(addProduct => {
        addProduct.addEventListener("click", () => {
            
            const productSection = addProduct.closest(".product_cart");
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
}



