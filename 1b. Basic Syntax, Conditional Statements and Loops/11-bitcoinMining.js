function bitcoinMining(arr) {
    let bitcoinPrice = 11949.16;
    let goldGr = 67.51;
    let day = 0;
    let money = 0;
    let firstBitcoinDay = 0;

    for (let i = 0; i < arr.length; i++) {
        day++;
        let currentGold = arr[i];
        let currentMoney = currentGold * goldGr;
        if (day % 3 === 0) {
            money += currentMoney * 0.70;
        } else {
            money += currentMoney;
        }

        if (money >= bitcoinPrice && firstBitcoinDay === 0) {
            firstBitcoinDay = day;
        }
    }

    let totalBitcoins = Math.floor(money / bitcoinPrice);
    let moneyLeft = money - totalBitcoins * bitcoinPrice;
    console.log(`Bought bitcoins: ${totalBitcoins}`);

    if (firstBitcoinDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);