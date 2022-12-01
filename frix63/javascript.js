switcher = false;
switcher1 = false;
numImages = 50;

function PhotoGeneration() {
    var x;
    for (x = 2; x <= numImages; x++) {
        let elem = document.getElementById("duphotos1");
        let clone = elem.cloneNode(true);
        elem.id = "duphotos" + x;
        elem.after(clone);
        document.getElementById('photo1').src = "../imgs/Photos/Thumbnails/(" + x + ").jpg";
        document.getElementById('photo1').id = "photo" + x;
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
    document.getElementById('IVBD').style.display = "flex";
    var imgsrcelement = document.getElementById(event.srcElement.id).src;
    imgsrcelement = imgsrcelement.replace('Thumbnails', 'Enlarged');
    document.getElementById('enlargedIMG').src = imgsrcelement;
}

function ImageEnlargeFunctionClose() {
    document.getElementById('IVBD').style.display = "none";
}