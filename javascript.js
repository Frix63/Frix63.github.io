start();

function start() {

    if (localStorage.getItem("moneyxd") === "null") {
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);
        localStorage.setItem("gayi4", 0);
        localStorage.setItem("gayc4", 1500);
        localStorage.setItem("gayi5", 0);
        localStorage.setItem("gayc5", 5000);
        localStorage.setItem("gayi6", 0);
        localStorage.setItem("gayc6", 15000);
        localStorage.setItem("gayi7", 0);
        localStorage.setItem("gayc7", 40000);

        localStorage.setItem("ATM", 0);
        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("moneyxd") === "NaN") {
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);
        localStorage.setItem("gayi4", 0);
        localStorage.setItem("gayc4", 1500);
        localStorage.setItem("gayi5", 0);
        localStorage.setItem("gayc5", 5000);
        localStorage.setItem("gayi6", 0);
        localStorage.setItem("gayc6", 15000);
        localStorage.setItem("gayi7", 0);
        localStorage.setItem("gayc7", 40000);

        localStorage.setItem("ATM", 0);
        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("moneyxd") === "0" && localStorage.getItem("gayi1") === "0") {
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);
        localStorage.setItem("gayi4", 0);
        localStorage.setItem("gayc4", 1500);
        localStorage.setItem("gayi5", 0);
        localStorage.setItem("gayc5", 5000);
        localStorage.setItem("gayi6", 0);
        localStorage.setItem("gayc6", 15000);
        localStorage.setItem("gayi7", 0);
        localStorage.setItem("gayc7", 40000);

        localStorage.setItem("ATM", 0);
        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("gayc1") === "0" || localStorage.getItem("gayc2") === "0" || localStorage.getItem("gayc3") === "0" || localStorage.getItem("gayc4") === "0" || localStorage.getItem("gayc5") === "0" || localStorage.getItem("gayc6") === "0" || localStorage.getItem("gayc7") === "0") {
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
        localStorage.setItem("ATM", Number(localStorage.getItem("ATM")));
        localStorage.setItem("gayi1", Number(localStorage.getItem("gayi1")));
        localStorage.setItem("gayc1", Number(localStorage.getItem("gayc1")));
        localStorage.setItem("gayi2", Number(localStorage.getItem("gayi2")));
        localStorage.setItem("gayc2", Number(localStorage.getItem("gayc2")));
        localStorage.setItem("gayi3", Number(localStorage.getItem("gayi3")));
        localStorage.setItem("gayc3", Number(localStorage.getItem("gayc3")));
        localStorage.setItem("gayi4", Number(localStorage.getItem("gayi4")));
        localStorage.setItem("gayc4", Number(localStorage.getItem("gayc4")));
        localStorage.setItem("gayi5", Number(localStorage.getItem("gayi5")));
        localStorage.setItem("gayc5", Number(localStorage.getItem("gayc5")));
        localStorage.setItem("gayi6", Number(localStorage.getItem("gayi6")));
        localStorage.setItem("gayc6", Number(localStorage.getItem("gayc6")));
        localStorage.setItem("gayi7", Number(localStorage.getItem("gayi7")));
        localStorage.setItem("gayc7", Number(localStorage.getItem("gayc7")));
        document.location.reload(true);
    } else {
        Money = 0;
        Upgradeint = 0;
        Upgradecost = 10;
        Upgradeint2 = 0;
        Upgradecost2 = 100;
        Upgradeint3 = 0;
        Upgradecost3 = 500;
        Upgradeint4 = 0;
        Upgradecost4 = 1500;
        Upgradeint5 = 0;
        Upgradecost5 = 5000;
        Upgradeint6 = 0;
        Upgradecost6 = 15000;
        Upgradeint7 = 0;
        Upgradecost7 = 40000;
        AllTimeMoney = 0;
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
        localStorage.setItem("ATM", Number(localStorage.getItem("ATM")));
        localStorage.setItem("gayi1", Number(localStorage.getItem("gayi1")));
        localStorage.setItem("gayc1", Number(localStorage.getItem("gayc1")));
        localStorage.setItem("gayi2", Number(localStorage.getItem("gayi2")));
        localStorage.setItem("gayc2", Number(localStorage.getItem("gayc2")));
        localStorage.setItem("gayi3", Number(localStorage.getItem("gayi3")));
        localStorage.setItem("gayc3", Number(localStorage.getItem("gayc3")));
        localStorage.setItem("gayi4", Number(localStorage.getItem("gayi4")));
        localStorage.setItem("gayc4", Number(localStorage.getItem("gayc4")));
        localStorage.setItem("gayi5", Number(localStorage.getItem("gayi5")));
        localStorage.setItem("gayc5", Number(localStorage.getItem("gayc5")));
        localStorage.setItem("gayi6", Number(localStorage.getItem("gayi6")));
        localStorage.setItem("gayc6", Number(localStorage.getItem("gayc6")));
        localStorage.setItem("gayi7", Number(localStorage.getItem("gayi7")));
        localStorage.setItem("gayc7", Number(localStorage.getItem("gayc7")));
    }
    Money = Number(localStorage.getItem("moneyxd"));
    AllTimeMoney = Number(localStorage.getItem("ATM"));
    Upgradeint = Number(localStorage.getItem("gayi1"));
    Upgradecost = Number(localStorage.getItem("gayc1"));
    Upgradeint2 = Number(localStorage.getItem("gayi2"));
    Upgradecost2 = Number(localStorage.getItem("gayc2"));
    Upgradeint3 = Number(localStorage.getItem("gayi3"));
    Upgradecost3 = Number(localStorage.getItem("gayc3"));
    Upgradeint4 = Number(localStorage.getItem("gayi4"));
    Upgradecost4 = Number(localStorage.getItem("gayc4"));
    Upgradeint5 = Number(localStorage.getItem("gayi5"));
    Upgradecost5 = Number(localStorage.getItem("gayc5"));
    Upgradeint6 = Number(localStorage.getItem("gayi6"));
    Upgradecost6 = Number(localStorage.getItem("gayc6"));
    Upgradeint7 = Number(localStorage.getItem("gayi7"));
    Upgradecost7 = Number(localStorage.getItem("gayc7"));
}
if (localStorage.getItem("gayc1") === "0") {
    document.location.reload(true);
}
let Cps = 0;
let RawCPSInt = 0;
let RawCPSDisplayedRender = 0;
let perc = 0;
let PrestigeGoal = 10000;
let PrestigeMultiplier = 1;
let ATMMultiplier = 1;
RawCPSRender();
setInterval(RawCPSRender, 1000)
setInterval(changeStyle, 0);
setInterval(Upgradecps, 1000)
setInterval(renderMoney, 0)
setInterval(saveData, 500)
setInterval(AutoClicksPerSecond, 0)

function saveData() {
    localStorage.setItem("ATM", AllTimeMoney);
    localStorage.setItem("moneyxd", Money)
    localStorage.setItem("gayi1", Upgradeint);
    localStorage.setItem("gayc1", Upgradecost);
    localStorage.setItem("gayi2", Upgradeint2);
    localStorage.setItem("gayc2", Upgradecost2);
    localStorage.setItem("gayi3", Upgradeint3);
    localStorage.setItem("gayc3", Upgradecost3);
    localStorage.setItem("gayi4", Upgradeint4);
    localStorage.setItem("gayic4", Upgradecost4);
    localStorage.setItem("gayi5", Upgradeint5);
    localStorage.setItem("gayc5", Upgradecost5);
    localStorage.setItem("gayi6", Upgradeint6);
    localStorage.setItem("gayc6", Upgradecost6);
    localStorage.setItem("gayi7", Upgradeint7);
    localStorage.setItem("gayc7", Upgradecost7);
}

function renderMoney() {
    document.getElementById("upgrade1").innerHTML = " Gay upgrade + 1 cps<br>[cost " + Upgradecost + "]<br> [" + Upgradeint + "cps]";
    document.getElementById("upgrade2").innerHTML = " Gay upgrade2 + 3 cps<br>[cost " + Upgradecost2 + "]<br> [" + Upgradeint2 * 3 + "cps]";
    document.getElementById("upgrade3").innerHTML = " Gay upgrade3 + 9 cps<br>[cost " + Upgradecost3 + "]<br> [" + Upgradeint3 * 9 + "cps]";
    document.getElementById("upgrade4").innerHTML = " Gay upgrade4 + 18 cps<br>[cost " + Upgradecost4 + "]<br> [" + Upgradeint4 * 18 + "cps]";
    document.getElementById("upgrade5").innerHTML = " Gay upgrade5 + 36 cps<br>[cost " + Upgradecost5 + "]<br> [" + Upgradeint5 * 36 + "cps]";
    document.getElementById("upgrade6").innerHTML = " Gay upgrade6 + 72 cps<br>[cost " + Upgradecost6 + "]<br> [" + Upgradeint6 * 72 + "cps]";
    document.getElementById("upgrade7").innerHTML = " Gay upgrade7 + 144 cps<br>[cost " + Upgradecost7 + "]<br> [" + Upgradeint7 * 144 + "cps]";
    document.getElementById("PrestigeDisplay").innerHTML = AllTimeMoney + " / " + PrestigeGoal;
    document.getElementById("AllTimeMoneyID").innerHTML = AllTimeMoney + " All time money";
    document.getElementById("moneyCounter").innerHTML = Money + " $ ";

}

function tlacitko() {
    Money = Money + 1 * PrestigeMultiplier;
    AllTimeMoney = AllTimeMoney + 1 * PrestigeMultiplier;
    RawCPSInt = RawCPSInt + 1;
}

function AutoClicksPerSecond() {
    Cps = Upgradeint + (Upgradeint2 * 3) + (Upgradeint3 * 9) + (Upgradeint4 * 18) + (Upgradeint5 * 36) + (Upgradeint6 * 72) + (Upgradeint7 * 144);
    document.getElementById("CPSTextDisplay").innerHTML = Cps + " Generated/s";
}

function Upgradecps() {
    Money = Money + Upgradeint;
    Money = Money + Upgradeint2 * 3;
    Money = Money + Upgradeint3 * 9;
    Money = Money + Upgradeint4 * 18;
    Money = Money + Upgradeint5 * 36;
    Money = Money + Upgradeint6 * 72;
    Money = Money + Upgradeint7 * 144;
    AllTimeMoney = AllTimeMoney + Upgradeint;
    AllTimeMoney = AllTimeMoney + Upgradeint2 * 3;
    AllTimeMoney = AllTimeMoney + Upgradeint3 * 9;
    AllTimeMoney = AllTimeMoney + Upgradeint4 * 18;
    AllTimeMoney = AllTimeMoney + Upgradeint5 * 36;
    AllTimeMoney = AllTimeMoney + Upgradeint6 * 72;
    AllTimeMoney = AllTimeMoney + Upgradeint7 * 144;
}

function clearData() {
    let clearDataText = "Press OK button to delete all your progress!\nPress Cancel to cancel progress dump.";
    if (confirm(clearDataText) == true) {
        localStorage.setItem("moneyxd", 0);
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);
        localStorage.setItem("gayi4", 0);
        localStorage.setItem("gayc4", 1500);
        localStorage.setItem("gayi5", 0);
        localStorage.setItem("gayc5", 5000);
        localStorage.setItem("gayi6", 0);
        localStorage.setItem("gayc6", 15000);
        localStorage.setItem("gayi7", 0);
        localStorage.setItem("gayc7", 40000);
        Money = 0;
        AllTimeMoney = 0;
        Upgradeint = 0;
        Upgradecost = 10;
        Upgradeint2 = 0;
        Upgradecost2 = 100;
        Upgradeint3 = 0;
        Upgradecost3 = 500;
        Upgradeint4 = 0;
        Upgradecost4 = 1500;
        Upgradeint5 = 0;
        Upgradecost5 = 5000;
        Upgradeint6 = 0;
        Upgradecost6 = 15000;
        Upgradeint7 = 0;
        Upgradecost7 = 40000;
        document.location.reload(true);
    } else {
        return;
    }
}




function changeStyle() {
    perc = (AllTimeMoney / PrestigeGoal) * 100;
    document.getElementById("PPDisplay").innerHTML = "Clicks " + PrestigeMultiplier + "x";
    if (PrestigeGoal >= AllTimeMoney) {
        Math.round((perc + Number.EPSILON) * 100) / 100
        document.getElementById("ATMBarID").style.height = 5 + perc + "%";
        document.getElementById("ATMBarID").innerHTML = Math.round((perc + Number.EPSILON) * 100) / 100 + "%";
    } else {
        PrestigeMultiplier = PrestigeMultiplier * 2;
        PrestigeGoal = PrestigeGoal * 4;
    }
}


function RawCPSRender() {
    RawCPSDisplayedRender = RawCPSInt;
    RawCPSInt = 0;
    document.getElementById("RawCPSID").innerHTML = Math.round(RawCPSDisplayedRender) + "RawCPS";
}


//Gay upgrade 1
function Upgrade() {
    if (Money >= Upgradecost) {
        Money = Money - Upgradecost;
        Upgradecost = Upgradecost * 1.2;
        Upgradecost = Math.round(Upgradecost);
        Upgradeint = Upgradeint + 1;
        return;
    }
}

//Gay upgrade 2
function Upgrade2() {
    if (Money >= Upgradecost2) {
        Money = Money - Upgradecost2;
        Upgradecost2 = Upgradecost2 * 1.2;
        Upgradecost2 = Math.round(Upgradecost2);
        Upgradeint2 = Upgradeint2 + 1;
        return;
    }
}

//Gay upgrade 3
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