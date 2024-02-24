$(document).ready(function () {
    $('#cartContainer').load('../shoppingCart.html', function () {
        const button = document.getElementsByTagName("button");
        button[0].innerText = "BUY";
        const elemButton = button[0];
        elemButton.addEventListener('click', () => {
            elemButton.classList.toggle("toggle");
        });

        const iconRemove = document.querySelectorAll(".remove");
        iconRemove.forEach(elem => {
            elem.addEventListener("click", () => {
                const elemParent = elem.parentElement;
                badgeNumber.textContent = parseInt(badgeNumber.textContent,10) - 1;
                elemParent.remove();
            })
        });
    });
});

