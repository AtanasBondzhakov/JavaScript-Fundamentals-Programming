function concatenateNames(firstName, secondName, delimiter) {
    console.log(`${firstName}${delimiter}${secondName}`);
}

concatenateNames('John', 'Smith', '->'); //John->Smith
concatenateNames('Jan', 'White', '<->'); //Jan<->White
concatenateNames('Linda', 'Terry', '=>'); //Linda=>Terry
