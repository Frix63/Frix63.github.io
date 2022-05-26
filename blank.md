javascript.js
        
        localStorage.setItem("gayi7", 0);
        localStorage.setItem("gayc7", 40000);

        localStorage.setItem("gayi7", Number(localStorage.getItem("gayi7")));
        localStorage.setItem("gayc7", Number(localStorage.getItem("gayc7")));
        
        Upgradeint7 = 0;
        Upgradecost7 = 40000;

        
        Upgradeint7 = Number(localStorage.getItem("gayi7"));
        Upgradecost7 = Number(localStorage.getItem("gayc7"));

        
        localStorage.setItem("gayi7", Upgradeint7);
        localStorage.setItem("gayc7", Upgradecost7);

        
    document.getElementById("upgrade7").innerHTML = " Gay upgrade7 + 144 cps<br>[cost " + Upgradecost7 + "]<br> [" + Upgradeint7 * 144 + "cps]";

        
         + (Upgradeint7 * 144)
         
        Money = Money + Upgradeint7 * 144;


        
        localStorage.setItem("gayi7", 0);
        localStorage.setItem("gayc7", 40000);
        Upgradeint7 = 0;
        Upgradecost7 = 40000;

        
function Upgrade7() {
    if (Money >= Upgradecost7) {
        Money = Money - Upgradecost7;
        Upgradecost7 = Upgradecost7 * 1.2;
        Upgradecost7 = Math.round(Upgradecost7);
        Upgradeint7 = Upgradeint7 + 1;
        return;
    }
}