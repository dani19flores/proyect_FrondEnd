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
                    addProductToCart(addProducts,"blouse");
                }
                const lessProducts = document.querySelectorAll(".lessProduct");
                if(lessProducts.length > 0){
                    lessProductToCart(lessProducts, "blouse");
                }
                currentMenu("blouse");
                ShoppingCatalogMatch();
            });
        });

        const tShirt = document.querySelector(".Shirt");
        tShirt.addEventListener("click", () => {
            $('#productsContainer').load('../t-shirt.html', function () {
                const addProducts = document.querySelectorAll(".addProduct");
                if(addProducts.length > 0)
                {
                    addProductToCart(addProducts,"shirt");
                }
                const lessProducts = document.querySelectorAll(".lessProduct");
                if(lessProducts.length > 0){
                    lessProductToCart(lessProducts, "shirt");
                }
                currentMenu("shirt");
                ShoppingCatalogMatch();
            });
        });

        const shoes = document.querySelector(".shoes");
        shoes.addEventListener("click", () => {
            $('#productsContainer').load('../shoes.html', function () {
                const addProducts = document.querySelectorAll(".addProduct");
                if(addProducts.length > 0)
                {
                    addProductToCart(addProducts,"shoes");
                }
                const lessProducts = document.querySelectorAll(".lessProduct");
                if(lessProducts.length > 0){
                    lessProductToCart(lessProducts, "shoes");
                }
                currentMenu("shoes");
                ShoppingCatalogMatch();
            });
        });

        const accessories = document.querySelector(".accessories");
        accessories.addEventListener("click", () => {
            $('#productsContainer').load('../accessories.html', function () {
                const addProducts = document.querySelectorAll(".addProduct");
                if(addProducts.length > 0)
                {
                    addProductToCart(addProducts,"accessories");
                }
                const lessProducts = document.querySelectorAll(".lessProduct");
                if(lessProducts.length > 0){
                    lessProductToCart(lessProducts, "accessories");
                }
                currentMenu("accessories");
                ShoppingCatalogMatch();
            });
        });
    });
});

function updateLocalStorageShoppingCart() {
    const cartUpdate = document.querySelector(".cart");
    const sectionProducts = cartUpdate.querySelectorAll("section");
    if(sectionProducts){
        const cartData = Array.from(sectionProducts).map(section => {
            const productName = section.querySelector("h3").textContent;
            const productPrice = section.querySelector("p").textContent;
            const imgProduct = section.querySelector("img").src;
            const input_txt = section.querySelector("input[name='name']").value;
            const remove = section.querySelector("i");

            return { productName, productPrice, imgProduct, remove, input_txt};
        });
        localStorage.setItem("ShoppingCartSections", JSON.stringify(cartData));
    } else {
        localStorage.removeItem("ShoppingCartSections");
    }
}

function updateLocalStorageQuantityProducts(quantityProduct,productKey){
    /*if(quantityProduct = "0"){
        localStorage.removeItem(productKey);
    } else {*/
        localStorage.setItem(productKey, quantityProduct);
    //}
}

function currentMenu(menu){
    localStorage.setItem("currentMenu", menu);
}

function addProductToCart(addProducts,productType){
    const buyButton = document.querySelector(".cart button.toggle");

    addProducts.forEach(addProduct => {
        addProduct.addEventListener("click", () => {
            
            const productSection = addProduct.closest(".product_cart");
            const productName = productSection.querySelector("h2").textContent;
            const productPrice = productSection.querySelector("p").textContent;
            const imgProduct = productSection.querySelector("img").src;
            const quantityProduct = productSection.querySelector("input[name='name']");

            const existingCartItem = Array.from(cart.querySelectorAll("section")).find(cartItem => {
                return cartItem.querySelector("h3").textContent === productName;
            });
            quantityProduct.value = parseInt(quantityProduct.value, 10) + 1;

            updateLocalStorageQuantityProducts(quantityProduct.value,productType+"|"+productName)

            const matchingH2Elements = Array.from(document.querySelectorAll('section h3'))
                .filter(h2Element => h2Element.textContent.includes(productName));
            
            if (matchingH2Elements.length > 0) {
                const productContainer = matchingH2Elements[0].closest('section');
                const quantityInput = productContainer.querySelector('input[name="name"]');
                quantityInput.value = quantityProduct.value;
                updateLocalStorageShoppingCart();
            }

            if(!existingCartItem){
                badgeNumber.textContent = parseInt(badgeNumber.textContent,10) + 1;
                const cartItem = document.createElement("section");

                cartItem.innerHTML = `
                                    <img src="${imgProduct}" />
                                    <h3>${productName}</h3>
                                    <p>${productPrice}</p>
                                    <input type="text" name="name" value="1">
                                    <i class="remove"><img src="img/Icon/remove.svg" /></i>`;
                cart.insertBefore(cartItem,buyButton);
                updateLocalStorageShoppingCart();
                const iconRemove = document.querySelectorAll(".remove");
                const elem = iconRemove[iconRemove.length-1];

                elem.addEventListener("click", () => {
                    const elemParent = elem.parentElement;
                    badgeNumber.textContent = parseInt(badgeNumber.textContent,10) - 1;
                    quantityProduct.value = "0";
                    elemParent.remove();
                    updateLocalStorageShoppingCart();
                    updateLocalStorageQuantityProducts("0",productType+"|"+productName);
                })
            }
        });
    });
}

function lessProductToCart(addProducts,productType){
    const buyButton = document.querySelector(".cart button.toggle");

    addProducts.forEach(addProduct => {
        addProduct.addEventListener("click", () => {
            
            const productSection = addProduct.closest(".product_cart");
            const productName = productSection.querySelector("h2").textContent;
            const productPrice = productSection.querySelector("p").textContent;
            const imgProduct = productSection.querySelector("img").src;
            const quantityProduct = productSection.querySelector("input[name='name']");

            const existingCartItem = Array.from(cart.querySelectorAll("section")).find(cartItem => {
                return cartItem.querySelector("h3").textContent === productName;
            });
            
            if(parseInt(quantityProduct.value, 10) > 0){
                quantityProduct.value = parseInt(quantityProduct.value, 10) - 1;
            }

            const matchingH2Elements = Array.from(document.querySelectorAll('section h3'))
                .filter(h2Element => h2Element.textContent.includes(productName));
            if (matchingH2Elements.length > 0) {
                const productContainer = matchingH2Elements[0].closest('section');
                const quantityInput = productContainer.querySelector('input[name="name"]');
                quantityInput.value = quantityProduct.value;
            }

            if (parseInt(quantityProduct.value, 10) <= 0) {
                const existingCartItem = Array.from(cart.querySelectorAll("section")).find(cartItem => {
                    return cartItem.querySelector("h3").textContent === productName;
                });

                if (existingCartItem) {
                    badgeNumber.textContent = parseInt(badgeNumber.textContent, 10) - 1;
                    existingCartItem.remove();
                    updateLocalStorageShoppingCart();
                    updateLocalStorageQuantityProducts("0", productType + "|" + productName);
                }
            }

            updateLocalStorageQuantityProducts(quantityProduct.value,productType+"|"+productName)
        });
    });
}

window.addEventListener('load', () => {
    ShoppingCart();
});


function ShoppingCatalogMatch(){  
    const currentMenu = localStorage.getItem("currentMenu"); 
    if (currentMenu) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
    
            if (key.startsWith(currentMenu)) {
                const productNameKey = key.split("|");
                const productName = productNameKey[1];
                const value = localStorage.getItem(key);

                const matchingH2Elements = Array.from(document.querySelectorAll('.product_cart h2'))
                .filter(h2Element => h2Element.textContent.includes(productName));
                if (matchingH2Elements.length > 0) {
                    const productContainer = matchingH2Elements[0].closest('.product_cart');
                    const quantityInput = productContainer.querySelector('input[name="name"]');
                    quantityInput.value = value;
                }
            }
        }
    }


}

function ShoppingCart(){
    const savedSectionsHTML = localStorage.getItem("ShoppingCartSections");
    const buyButton = document.querySelector(".cart button.toggle"); 
    if (savedSectionsHTML) {
        const sectionsData = JSON.parse(savedSectionsHTML);
        sectionsData.forEach(data => {
            const cartItem = document.createElement("section");
            cartItem.innerHTML = `
                <img src=${data.imgProduct}/>
                <h3>${data.productName}</h3>
                <p>${data.productPrice}</p>
                <input type="text" name="name" value=${data.input_txt}>
                <i class="remove"><img src="img/Icon/remove.svg" /></i>`;
                console.log(cartItem.innerHTML)
            cart.insertBefore(cartItem,buyButton);
        });      

        const iconRemoveList = document.querySelectorAll(".remove");
        iconRemoveList.forEach(elem => {
            elem.addEventListener("click", () => {
                const elemParent = elem.parentElement;
                badgeNumber.textContent = parseInt(badgeNumber.textContent, 10) - 1;
                elemParent.remove();
                updateLocalStorageShoppingCart();
            });
        });
        badgeNumber.textContent = sectionsData.length;
    }
}

