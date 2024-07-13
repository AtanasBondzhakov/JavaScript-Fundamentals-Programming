function travelTime(arr) {
    const routes = {};

    for (const line of arr) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        if (!routes.hasOwnProperty(country)) {
            routes[country] = {};
        }

        if (!routes[country].hasOwnProperty(town)) {
            routes[country][town] = cost;
        } else {
            if (routes[country][town] > cost) {
                routes[country][town] = cost;
            }
        }
    }

    const sortedRoutes = Object.entries(routes).sort((a, b) => a[0].localeCompare(b[0]))

    for (const [country, towns] of sortedRoutes) {
        const result = [];

        const sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        sortedTowns.forEach(t => result.push(`${t[0]} -> ${t[1]}`));

        console.log(`${country} -> ${result.join(' ')}`);
    }
}