start();

function start() {
    if (localStorage.getItem("moneyxd") === "null") {
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);

        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("moneyxd") === "NaN") {
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);

        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("moneyxd") === "0" && localStorage.getItem("gayi1") === "0") {
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);

        localStorage.setItem("moneyxd", 0);
    } else if (localStorage.getItem("gayc1") === "0") {
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
        localStorage.setItem("gayi1", Number(localStorage.getItem("gayi1")));
        localStorage.setItem("gayc1", Number(localStorage.getItem("gayc1")));
        localStorage.setItem("gayi2", Number(localStorage.getItem("gayi2")));
        localStorage.setItem("gayc2", Number(localStorage.getItem("gayc2")));
        localStorage.setItem("gayi3", Number(localStorage.getItem("gayi3")));
        localStorage.setItem("gayc3", Number(localStorage.getItem("gayc3")));
        document.location.reload(true);
    } else {
        Money = 0;
        gayupgradeint = 0;
        gayupgradecost = 10;
        gayupgradeint2 = 0;
        gayupgradecost2 = 100;
        gayupgradeint3 = 0;
        gayupgradecost3 = 500;
        localStorage.setItem("moneyxd", Number(localStorage.getItem("moneyxd")));
        localStorage.setItem("gayi1", Number(localStorage.getItem("gayi1")));
        localStorage.setItem("gayc1", Number(localStorage.getItem("gayc1")));
        localStorage.setItem("gayi2", Number(localStorage.getItem("gayi2")));
        localStorage.setItem("gayc2", Number(localStorage.getItem("gayc2")));
        localStorage.setItem("gayi3", Number(localStorage.getItem("gayi3")));
        localStorage.setItem("gayc3", Number(localStorage.getItem("gayc3")));
    }
    Money = Number(localStorage.getItem("moneyxd"));
    gayupgradeint = Number(localStorage.getItem("gayi1"));
    gayupgradecost = Number(localStorage.getItem("gayc1"));
    gayupgradeint2 = Number(localStorage.getItem("gayi2"));
    gayupgradecost2 = Number(localStorage.getItem("gayc2"));
    gayupgradeint3 = Number(localStorage.getItem("gayi3"));
    gayupgradecost3 = Number(localStorage.getItem("gayc3"));
}
if (localStorage.getItem("gayc1") === "0") {
    document.location.reload(true);
}

setInterval(gayupgradecps, 1000)
setInterval(renderMoney, 0)
setInterval(saveData, 500)
setInterval(renderBackground, 50)

function saveData() {
    localStorage.setItem("moneyxd", Money)
    localStorage.setItem("gayi1", gayupgradeint);
    localStorage.setItem("gayc1", gayupgradecost);
    localStorage.setItem("gayi2", gayupgradeint2);
    localStorage.setItem("gayc2", gayupgradecost2);
    localStorage.setItem("gayi3", gayupgradeint3);
    localStorage.setItem("gayc3", gayupgradecost3);
}

function renderMoney() {
    document.getElementById("upgrade1").innerHTML = "[cost " + gayupgradecost + "] Gay upgrade + 1 cps [" + gayupgradeint + "cps]";
    document.getElementById("upgrade2").innerHTML = "[cost " + gayupgradecost2 + "] Gay upgrade2 + 3 cps [" + gayupgradeint2 * 3 + "cps]";
    document.getElementById("upgrade3").innerHTML = "[cost " + gayupgradecost3 + "] Gay upgrade3 + 9 cps [" + gayupgradeint3 * 9 + "cps]";
    document.getElementById("moneyCounter").innerHTML = Money;

}

function tlacitko() {
    Money = Money + 1;
}

function gayupgradecps() {
    Money = Money + gayupgradeint;
    Money = Money + gayupgradeint2 * 3;
    Money = Money + gayupgradeint3 * 9;
}

function clearData() {
    let clearDataText = "Press OK button to delete all your progress!\nPress Cancel to cancel progress dump.";
    if (confirm(clearDataText) == true) {
        localStorage.setItem("gayi1", 0);
        localStorage.setItem("gayc1", 10);
        localStorage.setItem("gayi2", 0);
        localStorage.setItem("gayc2", 100);
        localStorage.setItem("gayi3", 0);
        localStorage.setItem("gayc3", 500);
        localStorage.setItem("moneyxd", 0);
        Money = 0;
        gayupgradeint = 0;
        gayupgradecost = 10;
        gayupgradeint2 = 0;
        gayupgradecost2 = 100;
        gayupgradeint3 = 0;
        gayupgradecost3 = 500;
        document.location.reload(true);
    } else {
        return;
    }
}

//Gay upgrade 1
function gayUpgrade() {
    if (Money >= gayupgradecost) {
        Money = Money - gayupgradecost;
        gayupgradecost = gayupgradecost * 1.2;
        gayupgradecost = Math.round(gayupgradecost);
        gayupgradeint = gayupgradeint + 1;
        return;
    }
}

//Gay upgrade 2
function gayUpgrade2() {
    if (Money >= gayupgradecost2) {
        Money = Money - gayupgradecost2;
        gayupgradecost2 = gayupgradecost2 * 1.2;
        gayupgradecost2 = Math.round(gayupgradecost2);
        gayupgradeint2 = gayupgradeint2 + 1;
        return;
    }
}

//Gay upgrade 3
function gayUpgrade3() {
    if (Money >= gayupgradecost3) {
        Money = Money - gayupgradecost3;
        gayupgradecost3 = gayupgradecost3 * 1.2;
        gayupgradecost3 = Math.round(gayupgradecost3);
        gayupgradeint3 = gayupgradeint3 + 1;
        return;
    }
}