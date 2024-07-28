function plantDiscovery(arr) {
    const count = Number(arr.shift());
    const plantsList = {};

    for (let i = 1; i <= count; i++) {
        let [plant, rarity] = arr.shift().split('<->');
        rarity = Number(rarity)

        if (!plantsList.hasOwnProperty(plant)) {
            plantsList[plant] = { rarity: 0, rating: [] };
        }
        plantsList[plant].rarity = rarity;
    }

    let command = arr.shift();

    while (command !== 'Exhibition') {
        let [action, info] = command.split(': ');
        let [plantName, param] = info.split(' - ');

        if (!plantsList.hasOwnProperty(plantName)) {
            console.log('error');
            command = arr.shift();
            continue;
        }

        if (action === 'Rate') {
            plantsList[plantName].rating.push(Number(param));
        } else if (action === 'Update') {
            plantsList[plantName].rarity = Number(param);
        } else {
            plantsList[plantName].rating = [];
        }

        command = arr.shift();
    }

    const entries = Object.entries(plantsList);

    console.log('Plants for the exhibition:');
    entries.forEach(ent => {
        let [plantName, stats] = ent;
        let { rarity, rating } = stats;
        const totalRating = rating.reduce((acc, val) => acc + val, 0);
        let avgRating = 0;

        if (totalRating > 0) {
            avgRating = totalRating / rating.length
        }

        console.log(`- ${plantName}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
    })
}