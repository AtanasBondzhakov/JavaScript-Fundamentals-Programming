function matchFullName(data) {
    const pattern = /\b([A-Z][a-z]+) ([A-Z][a-z]+)/g;
    const validNames = [];
    let matches = pattern.exec(data);

    while (matches !== null) {
        validNames.push(matches[0]);

        matches = pattern.exec(data);
    }

    console.log(validNames.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")