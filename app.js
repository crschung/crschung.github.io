function open(){
    var targetElement = document.getElementById("main");
    targetElement.className = "fade-in";

    var targetElement_2 = document.getElementById("start_button");
    targetElement_2.className = "fade-out";
}

document.querySelector(" .start").onclick = open;