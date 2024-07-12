function addressBook(data) {
    const addresses = {};

    for (const person of data) {
        const [name, address] = person.split(':');
        addresses[name] = address;
    }

    const sortedList = Object.keys(addresses).sort((a, b) => a.localeCompare(b));
    sortedList.forEach(p => console.log(`${p} -> ${addresses[p]}`))
}