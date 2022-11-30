switcher = false;
switcher1 = false;
numImages = 50;

function PhotoGeneration() {
    var x;
    for (x = 2; x <= numImages; x++) {
        let elem = document.getElementById("duphotos1");
        let clone = elem.cloneNode(true);
        elem.id = "duphotos" + 1;
        elem.after(clone);
        document.getElementById('photo' + 1).src = "../imgs/Photos/Thumbnails/(" + x + ").jpg";
    }
}
PhotoGeneration();

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

function ImageEnlargeFunction() {
    var element = document.getElementsByClassName('ImageViewBackgroundDiv').style;
    element.height = "0px";
}