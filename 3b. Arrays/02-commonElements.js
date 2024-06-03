function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let currentStr = arr1[i]
        if (arr2.includes(currentStr)) {
            console.log(currentStr);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']); //hello, 4
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']); //o, i