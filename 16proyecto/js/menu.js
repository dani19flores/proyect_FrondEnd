$(document).ready(function () {
    $('#menuContainer').load('../menu.html', function () {
        const closeIcon = $('#menuContainer .close');
        console.log(closeIcon);
        closeIcon.on("click", function () {
            $('#menuContainer').removeClass("show");
        });
    });
});