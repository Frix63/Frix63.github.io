switcher = false;
switcher1 = false;

function opensidebar() {
    if (switcher == false) {
        switcher = true;
        document.getElementById("SB3").style.width = "160px";
        document.getElementById("SB2").style.width = "150px";
        document.getElementsByClassName("text").style.color = "#8154BF";
    } else if (switcher == true) {
        switcher = false;
        document.getElementById("SB3").style.width = "50px";
        document.getElementById("SB2").style.width = "0px";
        document.getElementsByClassName("text").style.color = "#4F238C";
    }
}

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);