function phoneBook(data) {
    const phoneBook = {};

    for (const person of data) {
        const [name, number] = person.split(' ');
        phoneBook[name] = number;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
