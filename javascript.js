/*
WORKING DO NOT TOUCH!!!
Frix63
*/

start();

function start() {

    if (localStorage.getItem("moneyxd") === "null") {
        localStorage.setItem("upgradei1", 0);
        localStorage.setItem("upgradec1", 10);
        localStorage.setItem("upgradei2", 0);
        localStorage.setItem("upgradec2", 110);
        localStorage.setItem("upgradei3", 0);
        localStorage.setItem("upgradec3", 1200);
        localStorage.setItem("upgradei4", 0);
        localStorage.setItem("upgradec4", 13000);
        localStorage.setItem("upgradei5", 0);
        localStorage.setItem("upgradec5", 140000);
        localStorage.setItem("upgradei6", 0);
        localStorage.setItem("upgradec6", 1500000);
        localStorage.setItem("upgradei7", 0);
        localStorage.setItem("upgradec7", 16000000);

        localStorage.setItem("ATM", 0);
        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("moneyxd") === "NaN") {
        localStorage.setItem("upgradei1", 0);
        localStorage.setItem("upgradec1", 10);
        localStorage.setItem("upgradei2", 0);
        localStorage.setItem("upgradec2", 110);
        localStorage.setItem("upgradei3", 0);
        localStorage.setItem("upgradec3", 1200);
        localStorage.setItem("upgradei4", 0);
        localStorage.setItem("upgradec4", 13000);
        localStorage.setItem("upgradei5", 0);
        localStorage.setItem("upgradec5", 140000);
        localStorage.setItem("upgradei6", 0);
        localStorage.setItem("upgradec6", 1500000);
        localStorage.setItem("upgradei7", 0);
        localStorage.setItem("upgradec7", 16000000);

        localStorage.setItem("ATM", 0);
        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("moneyxd") === "0" && localStorage.getItem("upgradei1") === "0") {
        localStorage.setItem("upgradei1", 0);
        localStorage.setItem("upgradec1", 10);
        localStorage.setItem("upgradei2", 0);
        localStorage.setItem("upgradec2", 110);
        localStorage.setItem("upgradei3", 0);
        localStorage.setItem("upgradec3", 1200);
        localStorage.setItem("upgradei4", 0);
        localStorage.setItem("upgradec4", 13000);
        localStorage.setItem("upgradei5", 0);
        localStorage.setItem("upgradec5", 140000);
        localStorage.setItem("upgradei6", 0);
        localStorage.setItem("upgradec6", 1500000);
        localStorage.setItem("upgradei7", 0);
        localStorage.setItem("upgradec7", 16000000);

        localStorage.setItem("ATM", 0);
        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("upgradec1") === "0" || localStorage.getItem("upgradec2") === "0" || localStorage.getItem("upgradec3") === "0" || localStorage.getItem("upgradec4") === "0" || localStorage.getItem("upgradec5") === "0" || localStorage.getItem("upgradec6") === "0" || localStorage.getItem("upgradec7") === "0") {
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
        localStorage.setItem("ATM", Number(localStorage.getItem("ATM")));
        localStorage.setItem("upgradei1", Number(localStorage.getItem("upgradei1")));
        localStorage.setItem("upgradec1", Number(localStorage.getItem("upgradec1")));
        localStorage.setItem("upgradei2", Number(localStorage.getItem("upgradei2")));
        localStorage.setItem("upgradec2", Number(localStorage.getItem("upgradec2")));
        localStorage.setItem("upgradei3", Number(localStorage.getItem("upgradei3")));
        localStorage.setItem("upgradec3", Number(localStorage.getItem("upgradec3")));
        localStorage.setItem("upgradei4", Number(localStorage.getItem("upgradei4")));
        localStorage.setItem("upgradec4", Number(localStorage.getItem("upgradec4")));
        localStorage.setItem("upgradei5", Number(localStorage.getItem("upgradei5")));
        localStorage.setItem("upgradec5", Number(localStorage.getItem("upgradec5")));
        localStorage.setItem("upgradei6", Number(localStorage.getItem("upgradei6")));
        localStorage.setItem("upgradec6", Number(localStorage.getItem("upgradec6")));
        localStorage.setItem("upgradei7", Number(localStorage.getItem("upgradei7")));
        localStorage.setItem("upgradec7", Number(localStorage.getItem("upgradec7")));
        document.location.reload(true);
    } else {
        Money = 0;
        Upgradeint = 0;
        Upgradecost = 10;
        Upgradeint2 = 0;
        Upgradecost2 = 110;
        Upgradeint3 = 0;
        Upgradecost3 = 1200;
        Upgradeint4 = 0;
        Upgradecost4 = 13000;
        Upgradeint5 = 0;
        Upgradecost5 = 140000;
        Upgradeint6 = 0;
        Upgradecost6 = 1500000;
        Upgradeint7 = 0;
        Upgradecost7 = 16000000;
        AllTimeMoney = 0;
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
        localStorage.setItem("ATM", Number(localStorage.getItem("ATM")));
        localStorage.setItem("upgradei1", Number(localStorage.getItem("upgradei1")));
        localStorage.setItem("upgradec1", Number(localStorage.getItem("upgradec1")));
        localStorage.setItem("upgradei2", Number(localStorage.getItem("upgradei2")));
        localStorage.setItem("upgradec2", Number(localStorage.getItem("upgradec2")));
        localStorage.setItem("upgradei3", Number(localStorage.getItem("upgradei3")));
        localStorage.setItem("upgradec3", Number(localStorage.getItem("upgradec3")));
        localStorage.setItem("upgradei4", Number(localStorage.getItem("upgradei4")));
        localStorage.setItem("upgradec4", Number(localStorage.getItem("upgradec4")));
        localStorage.setItem("upgradei5", Number(localStorage.getItem("upgradei5")));
        localStorage.setItem("upgradec5", Number(localStorage.getItem("upgradec5")));
        localStorage.setItem("upgradei6", Number(localStorage.getItem("upgradei6")));
        localStorage.setItem("upgradec6", Number(localStorage.getItem("upgradec6")));
        localStorage.setItem("upgradei7", Number(localStorage.getItem("upgradei7")));
        localStorage.setItem("upgradec7", Number(localStorage.getItem("upgradec7")));
    }
    Money = Number(localStorage.getItem("moneyxd"));
    AllTimeMoney = Number(localStorage.getItem("ATM"));
    Upgradeint = Number(localStorage.getItem("upgradei1"));
    Upgradecost = Number(localStorage.getItem("upgradec1"));
    Upgradeint2 = Number(localStorage.getItem("upgradei2"));
    Upgradecost2 = Number(localStorage.getItem("upgradec2"));
    Upgradeint3 = Number(localStorage.getItem("upgradei3"));
    Upgradecost3 = Number(localStorage.getItem("upgradec3"));
    Upgradeint4 = Number(localStorage.getItem("upgradei4"));
    Upgradecost4 = Number(localStorage.getItem("upgradec4"));
    Upgradeint5 = Number(localStorage.getItem("upgradei5"));
    Upgradecost5 = Number(localStorage.getItem("upgradec5"));
    Upgradeint6 = Number(localStorage.getItem("upgradei6"));
    Upgradecost6 = Number(localStorage.getItem("upgradec6"));
    Upgradeint7 = Number(localStorage.getItem("upgradei7"));
    Upgradecost7 = Number(localStorage.getItem("upgradec7"));
}
if (localStorage.getItem("upgradec1") === "0") {
    document.location.reload(true);
}
let Cps = 0;
let RawCPSInt = 0;
let RawCPSDisplayedRender = 0;
let perc = 0;
let PrestigeGoal = 10000;
let PrestigeMultiplier = 1;
let ATMMultiplier = 1;
let PrestigeScore = 1;
comboB = false;
RawCPSRender();


/* Intervals */
setInterval(RawCPSRender, 1000)
setInterval(Upgradecps, 100);
setInterval(saveData, 500);
setInterval(RepeatUpgradeCheckPrestigeIntervalRenderMoneyAutoClicksPerSecondComboMathIntervalComboIntervalSabloChanger, 0);


document.getElementById("UB2").style.display = "none";
document.getElementById("upgrade2").style.display = "none";
document.getElementById("UB3").style.display = "none";
document.getElementById("upgrade3").style.display = "none";
document.getElementById("UB4").style.display = "none";
document.getElementById("upgrade4").style.display = "none";
document.getElementById("UB5").style.display = "none";
document.getElementById("upgrade5").style.display = "none";
document.getElementById("UB5").style.display = "none";
document.getElementById("upgrade5").style.display = "none";
document.getElementById("UB6").style.display = "none";
document.getElementById("upgrade6").style.display = "none";
document.getElementById("UB7").style.display = "none";
document.getElementById("upgrade7").style.display = "none";

function RepeatUpgradeCheckPrestigeIntervalRenderMoneyAutoClicksPerSecondComboMathIntervalComboIntervalSabloChanger() {


    /* UpgradeCheck */
    if (Upgradeint >= 5) {
        document.getElementById("UB2").style.display = "block";
        document.getElementById("upgrade2").style.display = "block";
    }
    if (Upgradeint2 >= 5) {
        document.getElementById("UB3").style.display = "block";
        document.getElementById("upgrade3").style.display = "block";
    }
    if (Upgradeint3 >= 5) {
        document.getElementById("UB4").style.display = "block";
        document.getElementById("upgrade4").style.display = "block";
    }
    if (Upgradeint4 >= 5) {
        document.getElementById("UB5").style.display = "block";
        document.getElementById("upgrade5").style.display = "block";
    }
    if (Upgradeint5 >= 5) {
        document.getElementById("UB6").style.display = "block";
        document.getElementById("upgrade6").style.display = "block";
    }
    if (Upgradeint6 >= 5) {
        document.getElementById("UB7").style.display = "block";
        document.getElementById("upgrade7").style.display = "block";
    }



    /* PrestigeInterval */
    perc = (AllTimeMoney / PrestigeGoal) * 100;
    document.getElementById("PPDisplay").innerHTML = "Clicks " + PrestigeMultiplier + "x";
    if (PrestigeGoal >= AllTimeMoney) {
        Math.round((perc + Number.EPSILON) * 100) / 100
        document.getElementById("ATMBarID").style.height = 5 + perc + "%";
        document.getElementById("ATMBarID").innerHTML = Math.round((perc + Number.EPSILON) * 100) / 100 + "%";
    } else {
        PrestigeMultiplier = PrestigeMultiplier * 2;
        PrestigeGoal = PrestigeGoal * 3;
        PrestigeScore = PrestigeScore + 1;
    }

    /* RenderMoney */
    AllTimeMoney = Math.round(AllTimeMoney * 100) / 100;
    Money = Math.round(Money * 100) / 100;
    document.getElementById("upgrade1").innerHTML = "??? Active student + 0.1 cps<br>??? [cost " + Upgradecost + "]<br> ??? Owned [" + Upgradeint + "] [" + Math.round(Upgradeint * 0.1 * 10) / 10 + " money/s]";
    document.getElementById("upgrade2").innerHTML = "??? EU Grants + 1 cps<br>??? [cost " + Upgradecost2 + "]<br> ??? Owned [" + Upgradeint2 + "] [" + Upgradeint2 * 1 + " money/s]";
    document.getElementById("upgrade3").innerHTML = "??? Chem teacher + 6 cps<br>??? [cost " + Upgradecost3 + "]<br> ??? Owned [" + Upgradeint3 + "] [" + Upgradeint3 * 6 + " money/s]";
    document.getElementById("upgrade4").innerHTML = "??? 12min run + 33 cps<br>??? [cost " + Upgradecost4 + "]<br> ??? Owned [" + Upgradeint4 + "] [" + Upgradeint4 * 33 + " money/s]";
    document.getElementById("upgrade5").innerHTML = "??? Inflatable boat + 182 cps<br>??? [cost " + Upgradecost5 + "]<br> ??? Owned [" + Upgradeint5 + "] [" + Upgradeint5 * 182 + " money/s]";
    document.getElementById("upgrade6").innerHTML = "??? Reality++ ??? + 1001 cps<br>??? [cost " + Upgradecost6 + "]<br> ??? Owned [" + Upgradeint6 + "] [" + Upgradeint5 * 1001 + " money/s]";
    document.getElementById("upgrade7").innerHTML = "??? Moodle + 5505 cps<br>??? [cost " + Upgradecost7 + "]<br> ??? Owned [" + Upgradeint7 + "] [" + Upgradeint7 * 5505 + " money/s]";
    document.getElementById("PrestigeDisplay").innerHTML = AllTimeMoney + " / " + PrestigeGoal;
    document.getElementById("AllTimeMoneyID").innerHTML = AllTimeMoney + " All time money";
    document.getElementById("moneyCounter").innerHTML = Money + " $ ";
    document.getElementById("combo").innerHTML = combo + "x";
    if ((Money - Math.floor(Money * 10) / 10) === 0) {
        document.getElementById("moneyCounter").innerHTML = Money + "0 $ ";
    }
    if ((AllTimeMoney - Math.floor(AllTimeMoney * 10) / 10) === 0) {
        document.getElementById("AllTimeMoneyID").innerHTML = AllTimeMoney + "0 All time money";
        document.getElementById("PrestigeDisplay").innerHTML = AllTimeMoney + "0 / " + PrestigeGoal;
    }
    if ((Money - Math.floor(Money)) === 0) {
        document.getElementById("moneyCounter").innerHTML = Money + ".00 $ ";
    }
    if ((AllTimeMoney - Math.floor(AllTimeMoney)) === 0) {
        document.getElementById("AllTimeMoneyID").innerHTML = AllTimeMoney + ".00 All time money";
        document.getElementById("PrestigeDisplay").innerHTML = AllTimeMoney + ".00 / " + PrestigeGoal;
    }


    /* AutoClicksPerSecond */
    Cps = (Upgradeint * 0.01) + (Upgradeint2 * 1) + (Upgradeint3 * 6) + (Upgradeint4 * 33) + (Upgradeint5 * 182) + (Upgradeint5 * 1001) + (Upgradeint7 * 5505);
    document.getElementById("CPSTextDisplay").innerHTML = Math.round(Cps * 100) / 100 + " Generated/s";


    /* ComboMathInterval */
    if (combo > 0) {
        document.getElementById("combo").style.display = "block";
    } else {
        document.getElementById("combo").style.display = "none";
        comboB = false;
    }


    switch (Math.floor(combo / 10)) {
        case 1:
            document.getElementById('combo').style.color = '##fff7c9';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px ##fff7c9)';
            break;
        case 2:
            document.getElementById('combo').style.color = '#fff1a1';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #fff1a1)';
            break;
        case 3:
            document.getElementById('combo').style.color = '#ffe54f';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ffe54f)';
            break;
        case 4:
            document.getElementById('combo').style.color = '#ffde24';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ffde24)';
            break;
        case 5:
            document.getElementById('combo').style.color = '#ffd900';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ffd900)';
            break;
        case 6:
            document.getElementById('combo').style.color = '#ffbb00';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ffbb00)';
            break;
        case 7:
            document.getElementById('combo').style.color = '#ffb300';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ffb300)';
            break;
        case 8:
            document.getElementById('combo').style.color = '#ff9900';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ff9900)';
            break;
        case 9:
            document.getElementById('combo').style.color = '#ff8400';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ff8400)';
            break;
        case 10:
            document.getElementById('combo').style.color = '#ff5e00';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ff5e00)';
            break;
        case 11:
            document.getElementById('combo').style.color = '#ff3c00';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ff3c00)';
            break;
        case 12:
            document.getElementById('combo').style.color = '#ff2a00';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ff2a00)';
            break;
        case 13:
            document.getElementById('combo').style.color = '#ff0000';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ff0000)';
            break;
        case 14:
            comboB = true;
            break;
        default:
            document.getElementById('combo').style.color = 'white';
            document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px white)';
            break;
    }
    if (comboB === true) {
        document.getElementById('combo').style.color = '#ff0000';
        document.getElementById('combo').style.filter = 'drop-shadow(0 0 10px #ff0000)';
    }


    /* ComboInterval */
    if (combo >= 1) {
        setTimeout(comboreset, 1000)
    }


    /* SabloChanger */
    document.getElementById("PrestigeScoreDisplay").innerHTML = PrestigeScore + ". Prestige level";
    switch (PrestigeScore) {
        case 1:
            document.getElementById("SImage").src = "Sablos/sabloclick.png";
            document.getElementById("BackgroundIMG").src = "Background/Basement.jpg";
            break;
        case 2:
            document.getElementById("SImage").src = "Sablos/SabloRee.png";
            document.getElementById("BackgroundIMG").src = "Background/SHell.jpg";
            break;
        case 3:
            document.getElementById("SImage").src = "Sablos/RetroSablo.png";
            document.getElementById("BackgroundIMG").src = "Background/SRetB.jpg";
            break;
        case 4:
            document.getElementById("SImage").src = "Sablos/SabloDrip.png";
            document.getElementById("BackgroundIMG").src = "Background/SDripB.jpg";
            break;
        case 5:
            document.getElementById("SImage").src = "Sablos/Xiablo.png";
            document.getElementById("BackgroundIMG").src = "Background/XiabloB.jpg";
            break;
        case 6:
            document.getElementById("SImage").src = "Sablos/SabloDripWT.png";
            document.getElementById("BackgroundIMG").src = "Background/SabloCar.jpg";
            break;
        case 7:
            document.getElementById("SImage").src = "Sablos/SabloGun.png";
            document.getElementById("BackgroundIMG").src = "Background/SabloGunB.jpg";
            break;
        case 8:
            document.getElementById("SImage").src = "Sablos/SabloPenis.png";
            document.getElementById("BackgroundIMG").src = "Background/Kachlicky.jpg";
            break;
        default:
            document.getElementById("SImage").src = "Sablos/SabloDrip.png";
            document.getElementById("BackgroundIMG").src = "Background/SDripB.jpg";
            break;
    }
}

function comboreset() {
    if (RawCPSDisplayedRender === 0) {
        combo = 0;
    }
}



function saveData() {
    localStorage.setItem("ATM", AllTimeMoney);
    localStorage.setItem("moneyxd", Money)
    localStorage.setItem("upgradei1", Upgradeint);
    localStorage.setItem("upgradec1", Upgradecost);
    localStorage.setItem("upgradei2", Upgradeint2);
    localStorage.setItem("upgradec2", Upgradecost2);
    localStorage.setItem("upgradei3", Upgradeint3);
    localStorage.setItem("upgradec3", Upgradecost3);
    localStorage.setItem("upgradei4", Upgradeint4);
    localStorage.setItem("upgradeic4", Upgradecost4);
    localStorage.setItem("upgradei5", Upgradeint5);
    localStorage.setItem("upgradec5", Upgradecost5);
    localStorage.setItem("upgradei6", Upgradeint6);
    localStorage.setItem("upgradec6", Upgradecost6);
    localStorage.setItem("upgradei7", Upgradeint7);
    localStorage.setItem("upgradec7", Upgradecost7);
}


function tlacitko() {
    combo = combo + 1;
    document.getElementById("SImage").classList.toggle('SDef');
    document.getElementById("SImage").classList.toggle('Anim');
    Money = Money + 1 * PrestigeMultiplier;
    AllTimeMoney = AllTimeMoney + 1 * PrestigeMultiplier;
    RawCPSInt = RawCPSInt + 1;
}

function Upgradecps() {
    Money = Money + Upgradeint * 1 / 100;
    Money = Money + Upgradeint2 * 1 / 10;
    Money = Money + Upgradeint3 * 6 / 10;
    Money = Money + Upgradeint4 * 33 / 10;
    Money = Money + Upgradeint5 * 182 / 10;
    Money = Money + Upgradeint5 * 1001 / 10;
    Money = Money + Upgradeint7 * 5505 / 10;
    AllTimeMoney = AllTimeMoney + Upgradeint * 1 / 100;
    AllTimeMoney = AllTimeMoney + Upgradeint2 * 1 / 10;
    AllTimeMoney = AllTimeMoney + Upgradeint3 * 6 / 10;
    AllTimeMoney = AllTimeMoney + Upgradeint4 * 33 / 10;
    AllTimeMoney = AllTimeMoney + Upgradeint5 * 182 / 10;
    AllTimeMoney = AllTimeMoney + Upgradeint5 * 1001 / 10;
    AllTimeMoney = AllTimeMoney + Upgradeint7 * 5505 / 10;
}

function clearData() {
    let clearDataText = "Press OK button to delete all your progress!\nPress Cancel to cancel progress dump.";
    if (confirm(clearDataText) == true) {
        localStorage.setItem("moneyxd", 0);
        localStorage.setItem("upgradei1", 0);
        localStorage.setItem("upgradec1", 10);
        localStorage.setItem("upgradei2", 0);
        localStorage.setItem("upgradec2", 110);
        localStorage.setItem("upgradei3", 0);
        localStorage.setItem("upgradec3", 1200);
        localStorage.setItem("upgradei4", 0);
        localStorage.setItem("upgradec4", 13000);
        localStorage.setItem("upgradei5", 0);
        localStorage.setItem("upgradec5", 140000);
        localStorage.setItem("upgradei6", 0);
        localStorage.setItem("upgradec6", 1500000);
        localStorage.setItem("upgradei7", 0);
        localStorage.setItem("upgradec7", 16000000);
        Money = 0;
        AllTimeMoney = 0;
        Upgradeint = 0;
        Upgradecost = 10;
        Upgradeint2 = 0;
        Upgradecost2 = 110;
        Upgradeint3 = 0;
        Upgradecost3 = 1200;
        Upgradeint4 = 0;
        Upgradecost4 = 13000;
        Upgradeint5 = 0;
        Upgradecost5 = 140000;
        Upgradeint6 = 0;
        Upgradecost6 = 1500000;
        Upgradeint7 = 0;
        Upgradecost7 = 16000000;
        document.location.reload(true);
    } else {
        return;
    }
}

function HardReset() {
    localStorage.setItem("moneyxd", 0);
    localStorage.setItem("upgradei1", 0);
    localStorage.setItem("upgradec1", 10);
    localStorage.setItem("upgradei2", 0);
    localStorage.setItem("upgradec2", 110);
    localStorage.setItem("upgradei3", 0);
    localStorage.setItem("upgradec3", 1200);
    localStorage.setItem("upgradei4", 0);
    localStorage.setItem("upgradec4", 13000);
    localStorage.setItem("upgradei5", 0);
    localStorage.setItem("upgradec5", 140000);
    localStorage.setItem("upgradei6", 0);
    localStorage.setItem("upgradec6", 1500000);
    localStorage.setItem("upgradei7", 0);
    localStorage.setItem("upgradec7", 16000000);
    Money = 0;
    AllTimeMoney = 0;
    Upgradeint = 0;
    Upgradecost = 10;
    Upgradeint2 = 0;
    Upgradecost2 = 110;
    Upgradeint3 = 0;
    Upgradecost3 = 1200;
    Upgradeint4 = 0;
    Upgradecost4 = 13000;
    Upgradeint5 = 0;
    Upgradecost5 = 140000;
    Upgradeint6 = 0;
    Upgradecost6 = 1500000;
    Upgradeint7 = 0;
    Upgradecost7 = 16000000;
    document.location.reload(true);
}




function RawCPSRender() {
    RawCPSDisplayedRender = RawCPSInt;
    MPSInt = RawCPSInt * PrestigeMultiplier;
    RawCPSInt = 0;
    document.getElementById("RawCPSID").innerHTML = Math.round(RawCPSDisplayedRender) + " RawCPS";
    document.getElementById("MPS").innerHTML = Math.round(MPSInt) + " Money click/s";

    if (RawCPSDisplayedRender >= 18) {
        Money = 0;
        AllTimeMoney = AllTimeMoney - Math.round(MPSInt);
    }
}

AskTimer = 1;

function anticheatmove() {
    Anticheattime = 120;
    if (AskTimer === 1) {
        AskTimer = 0;
        setInterval(anticheatdecrease, 1000);
    }
}

function anticheatleave() {
    clearInterval(anticheatdecrease);
}

function anticheatdecrease() {
    Anticheattime = Anticheattime - 1;
    if (Anticheattime === 0) {
        anticheatASK();
    }
}

function anticheatASK() {
    askn1 = Math.floor(Math.random() * (100));
    askn2 = Math.floor(Math.random() * (100));
    asknsumm = askn1 + askn2;
    clearInterval(anticheatdecrease);
    asknsum = prompt('Are you still there?\n' + askn1 + ' + ' + askn2 + ' = ' + ' x ' + '\nWhat is the x?', "");
    if (asknsum == asknsumm) {
        alert('Correct answer\nPlease enjoy playing S??bloClicker');
    } else {
        anticheatASK();
    }
}


//upgrade 1
function Upgrade() {
    if (Money >= Upgradecost) {
        Money = Money - Upgradecost;
        Upgradecost = Upgradecost * 1.2;
        Upgradecost = Math.round(Upgradecost);
        Upgradeint = Upgradeint + 1;
        return;
    }
}

//upgrade 2
function Upgrade2() {
    if (Money >= Upgradecost2) {
        Money = Money - Upgradecost2;
        Upgradecost2 = Upgradecost2 * 1.2;
        Upgradecost2 = Math.round(Upgradecost2);
        Upgradeint2 = Upgradeint2 + 1;
        return;
    }
}

//upgrade 3
function Upgrade3() {
    if (Money >= Upgradecost3) {
        Money = Money - Upgradecost3;
        Upgradecost3 = Upgradecost3 * 1.2;
        Upgradecost3 = Math.round(Upgradecost3);
        Upgradeint3 = Upgradeint3 + 1;
        return;
    }
}

function Upgrade4() {
    if (Money >= Upgradecost4) {
        Money = Money - Upgradecost4;
        Upgradecost4 = Upgradecost4 * 1.2;
        Upgradecost4 = Math.round(Upgradecost4);
        Upgradeint4 = Upgradeint4 + 1;
        return;
    }
}

function Upgrade5() {
    if (Money >= Upgradecost5) {
        Money = Money - Upgradecost5;
        Upgradecost5 = Upgradecost5 * 1.2;
        Upgradecost5 = Math.round(Upgradecost5);
        Upgradeint5 = Upgradeint5 + 1;
        return;
    }
}

function Upgrade6() {
    if (Money >= Upgradecost6) {
        Money = Money - Upgradecost6;
        Upgradecost6 = Upgradecost6 * 1.2;
        Upgradecost6 = Math.round(Upgradecost6);
        Upgradeint6 = Upgradeint6 + 1;
        return;
    }
}

function Upgrade7() {
    if (Money >= Upgradecost7) {
        Money = Money - Upgradecost7;
        Upgradecost7 = Upgradecost7 * 1.2;
        Upgradecost7 = Math.round(Upgradecost7);
        Upgradeint7 = Upgradeint7 + 1;
        return;
    }
}

let combo = 0;

var followCursor = (
    function() {
        var s = document.getElementById('combo');
        s.style.position = 'absolute';
        s.style.color = 'white';
        s.style.pointerEvents = 'none';
        s.style.filter = 'drop-shadow(0 0 10px white)';

        return {
            init: function() {
                document.body.appendChild(s);
            },

            run: function(e) {
                var e = e || window.event;
                s.style.left = (e.clientX + 10) + 'px';
                s.style.top = (e.clientY + 10) + 'px';
                s.innerHTML = combo + "x";
            }
        };
    }());


window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
}