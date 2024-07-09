function inventory(data) {
    const heroes = [];

    for (const line of data) {
        let [name, level, items] = line.split(' / ');
        const hero = {
            name,
            level,
            items,
        }
        heroes.push(hero);
    }

    const sortedInfo = heroes.sort((a, b) => a.level - b.level);

    sortedInfo.forEach(hero => {
        let message = [];
        message.push(`Hero: ${hero.name}`, `level => ${hero.level}`, `items => ${hero.items}`);
        console.log(message.join('\n'));
    });
}
