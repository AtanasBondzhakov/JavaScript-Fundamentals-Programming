function buildAWall(sections) {
    let totalConcrete = 0;
    let daily = [];

    while (sections.length > 0) {
        sections = sections.filter(x => x !== 30).map(x => x + 1);

        if (sections.length > 0) {
            const dailyConcrete = sections.length * 195;
            daily.push(dailyConcrete);
        }
    }

    totalConcrete = daily.reduce((acc, val) => acc + val, 0);
    const totalSpend = totalConcrete * 1900;

    console.log(daily.join(', '));
    console.log(`${totalSpend} pesos`);
}
