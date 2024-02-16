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
            $('#productsContainer').load('../blouse.html');
        });

        const tShirt = document.querySelector(".Shirt");
        tShirt.addEventListener("click", () => {
            $('#productsContainer').load('../t-shirt.html');
        });

        const shoes = document.querySelector(".shoes");
        shoes.addEventListener("click", () => {
            $('#productsContainer').load('../shoes.html');
        });

        const accessories = document.querySelector(".accessories");
        accessories.addEventListener("click", () => {
            $('#productsContainer').load('../accessories.html');
        });
    });
});



