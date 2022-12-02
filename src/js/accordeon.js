export function accordion() {

    const accordeon = document.querySelectorAll(".accordeon");

    accordeon.forEach(function (accordeon) {
        const btn = accordeon.querySelector(".accordeon-box__btn");
        // console.log(btn);

        btn.addEventListener("click", function () {
            // console.log(accordeon);

            accordeon.classList.toggle("show-text");
        });
    });
}