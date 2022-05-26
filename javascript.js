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

        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("gayc1") === "0") {
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
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
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
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
    }
    Money = Number(localStorage.getItem("moneyxd"));
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
}
if (localStorage.getItem("gayc1") === "0") {
    document.location.reload(true);
}

setInterval(Upgradecps, 1000)
setInterval(renderMoney, 0)
setInterval(saveData, 500)
setInterval(renderBackground, 50)

function saveData() {
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
}

function renderMoney() {
    document.getElementById("upgrade1").innerHTML = " Gay upgrade + 1 cps<br>[cost " + Upgradecost + "]<br> [" + Upgradeint + "cps]";
    document.getElementById("upgrade2").innerHTML = " Gay upgrade2 + 3 cps<br>[cost " + Upgradecost2 + "]<br> [" + Upgradeint2 * 3 + "cps]";
    document.getElementById("upgrade3").innerHTML = " Gay upgrade3 + 9 cps<br>[cost " + Upgradecost3 + "]<br> [" + Upgradeint3 * 9 + "cps]";
    document.getElementById("upgrade4").innerHTML = " Gay upgrade4 + 18 cps<br>[cost " + Upgradecost4 + "]<br> [" + Upgradeint4 * 18 + "cps]";
    document.getElementById("upgrade5").innerHTML = " Gay upgrade5 + 36 cps<br>[cost " + Upgradecost5 + "]<br> [" + Upgradeint5 * 36 + "cps]";
    document.getElementById("moneyCounter").innerHTML = Money;

}

function tlacitko() {
    Money = Money + 1;
}

function Upgradecps() {
    Money = Money + Upgradeint;
    Money = Money + Upgradeint2 * 3;
    Money = Money + Upgradeint3 * 9;
    Money = Money + Upgradeint4 * 18;
    Money = Money + Upgradeint5 * 36;
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
        document.location.reload(true);
    } else {
        return;
    }
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