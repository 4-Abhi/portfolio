window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 30) {
        document.querySelector("#header").style.height = "89px";
        document.querySelector("#header").style.backgroundColor = "rgb(45, 62, 80)";
        document.querySelector("#header").style.boxShadow = "0  1px 25px 1px #1b2838";


    } else {
        document.querySelector("#header").style.height = "100px";
        document.querySelector("#header").style.backgroundColor = "transparent";
        document.querySelector("#header").style.boxShadow = "none";

    }
}