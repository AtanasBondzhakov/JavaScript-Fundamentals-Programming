function pirates(arr) {
    const cities = {};
    let command = arr.shift();

    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(city)) {
            cities[city] = { population: 0, gold: 0 };
        }

        cities[city].population += population;
        cities[city].gold += gold;

        command = arr.shift();
    }

    command = arr.shift();

    while (command !== 'End') {
        const [action, town, ...tokens] = command.split('=>');

        if (action === 'Plunder') {
            const people = Number(tokens[0]);
            const gold = Number(tokens[1]);

            cities[town].population -= people;
            cities[town].gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[town].population === 0 || cities[town].gold === 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (action === 'Prosper') {
            const gold = Number(tokens[0]);

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }

        command = arr.shift();
    }

    const citiesEntries = Object.entries(cities);

    if (citiesEntries.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
        return;
    }

    console.log(`Ahoy, Captain! There are ${citiesEntries.length} wealthy settlements to go to:`);
    citiesEntries.forEach(city => {
        console.log(`${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`);
    })
}