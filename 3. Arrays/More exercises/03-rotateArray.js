function rotateArray(data) {
    const rotatesCount = Number(data.pop());
    let result = data.slice();

    for (let i = 1; i <= rotatesCount; i++) {
        const lastEl = result.pop();
        result.unshift(lastEl);
    }

    console.log(result.join(' '));
}
