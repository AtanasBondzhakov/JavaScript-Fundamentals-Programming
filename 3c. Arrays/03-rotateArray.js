function rotateArray(data) {
    const rotatesCount = Number(data.pop());
    let result = data.slice();

    for (let i = 1; i <= rotatesCount; i++) {
        const lastEl = result.pop();
        result.unshift(lastEl);
    }

    console.log(result.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']); //3 4 1 2
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']); //Orange Coconut Apple Banana