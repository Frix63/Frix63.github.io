# Frix63.github.io

To add new upgrade you need to;

IN style.css write:
.upgradeStyle[number of upgrade] {
    background-color: #0bac9c;
    border: none;
    color: white;
    padding: 10px 20px;
    top: 41%;
    left: 1%;
    position: absolute;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    margin: 0 0;
    cursor: pointer;
}

IN index.html write:
        <a href="#" id="upgrade[number of upgrade]" class="upgradeStyle[number of upgrade]" onclick="Upgrade[number of upgrade]()"></a>

javascript.js
        localStorage.setItem("gayi[number of upgrade]", Number(localStorage.getItem("gayi[number of upgrade]")));
        localStorage.setItem("gayc[number of upgrade]", Number(localStorage.getItem("gayc[number of upgrade]")));
        
        localStorage.setItem("gayi[number of upgrade]", 0);
        localStorage.setItem("gayc[number of upgrade]", 500);
        
        Upgradeint[number of upgrade] = 0;
        Upgradecost[number of upgrade] = 500;

        
        Upgradeint[number of upgrade] = Number(localStorage.getItem("gayi[number of upgrade]"));
        Upgradecost[number of upgrade] = Number(localStorage.getItem("gayc[number of upgrade]"));

        
        localStorage.setItem("gayi[number of upgrade]", Upgradeint[number of upgrade]);
        localStorage.setItem("gayi[number of upgrade]", Upgradecost[number of upgrade]);

        
        document.getElementById("upgrade[number of upgrade]").innerHTML = "[cost " + Upgradecost[number of upgrade] + "] Gay upgrade[number of upgrade] + 9 cps [" + upgrade[number of upgrade] * 9 + "cps]";

        
        Money = Money + Upgradeint[number of upgrade] * 9;

        
        localStorage.setItem("gayi[number of upgrade]", 0);
        localStorage.setItem("gayc[number of upgrade]", 500);
        Upgradeint[number of upgrade] = 0;
        Upgradecost[number of upgrade] = 500;

        
function Upgrade[number of upgrade]() {
    if (Money >= Upgradecost[number of upgrade]) {
        Money = Money - Upgradecost[number of upgrade];
        Upgradecost[number of upgrade] = Upgradecost[number of upgrade] * 1.2;
        Upgradecost[number of upgrade] = Math.round(Upgradecost[number of upgrade]);
        Upgradeint[number of upgrade] = Upgradeint[number of upgrade] + 1;
        return;
    }







