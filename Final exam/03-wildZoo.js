function wildZoo(data) {
    const animals = {};
    const areasHungryAnimals = {};

    let command = data.shift();

    while (command !== 'EndDay') {
        const [action, ...params] = command.split(': ');
        if (action === 'Add') {
            let [animalName, neededFood, area] = params.join('').split('-');
            neededFood = Number(neededFood);

            if (!animals.hasOwnProperty(animalName)) {
                animals[animalName] = { neededFood: 0, area };
            }

            animals[animalName].neededFood += neededFood;

        } else if (action === 'Feed') {
            let [animalName, food] = params.join('').split('-');
            food = Number(food);

            if (animals.hasOwnProperty(animalName)) {
                animals[animalName].neededFood -= food;

                if (animals[animalName].neededFood <= 0) {
                    delete animals[animalName];
                    console.log(`${animalName} was successfully fed`);
                }
            }
        }

        command = data.shift();
    }

    console.log('Animals:');
    for (let animal in animals) {
        console.log(` ${animal} -> ${animals[animal].neededFood}g`);
    }

    Object.values(animals).forEach(x => {
        if (!areasHungryAnimals.hasOwnProperty(x.area)) {
            areasHungryAnimals[x.area] = 0;
        }
        areasHungryAnimals[x.area]++;
    })

    console.log('Areas with hungry animals:');
    for (let area in areasHungryAnimals) {
        console.log(` ${area}: ${areasHungryAnimals[area]}`);
    }
}