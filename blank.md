 localStorage.setItem("gayi5", Number(localStorage.getItem("gayi5")));
        localStorage.setItem("gayc5", Number(localStorage.getItem("gayc5")));
        
        localStorage.setItem("gayi5", 0);
        localStorage.setItem("gayc5", 5000);
        
        Upgradeint5 = 0;
        Upgradecost5 = 5000;

        
        Upgradeint5 = Number(localStorage.getItem("gayi5"));
        Upgradecost5 = Number(localStorage.getItem("gayc5"));

        
        localStorage.setItem("gayi5", Upgradeint5);
        localStorage.setItem("gayc5", Upgradecost5);

        
        document.getElementById("upgrade5").innerHTML = "[cost " + Upgradecost5 + "] Gay upgrade5 + 9 cps [" + upgrade5 * 9 + "cps]";

        
        Money = Money + Upgradeint5 * 9;

        
        localStorage.setItem("gayi5", 0);
        localStorage.setItem("gayc5", 5000);
        Upgradeint5 = 0;
        Upgradecost5 = 5000;

        
function Upgrade5() {
    if (Money >= Upgradecost5) {
        Money = Money - Upgradecost5;
        Upgradecost5 = Upgradecost5 * 1.2;
        Upgradecost5 = Math.round(Upgradecost5);
        Upgradeint5 = Upgradeint5 + 1;
        return;
    }