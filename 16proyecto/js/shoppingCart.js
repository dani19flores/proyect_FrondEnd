$(document).ready(function () {
    $('#cartContainer').load('../shoppingCart.html', function () {
        const button = document.getElementsByTagName("button");
        button[0].innerText = "BUY";
        const elemButton = button[0];
        elemButton.addEventListener('click', () => {
            elemButton.classList.toggle("toggle");
        });
    });
});

