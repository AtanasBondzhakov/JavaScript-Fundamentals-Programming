function addAndRemove(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];
        if (command === 'add') {
            result.push(i + 1);
        } else if (command === 'remove') {
            result.pop();
        }
    }

    result.length > 0 ? console.log(result.join(' ')) : console.log('Empty');
}
