function shoppingList(data) {
    let dataCopy = data.slice();
    let list = dataCopy.shift().split('!');
    let line = dataCopy.shift();

    while (line !== 'Go Shopping!') {
        const [command, item, secondItem] = line.split(' ');

        if (command === 'Urgent') {
            if (!list.includes(item)) {
                list.unshift(item);
            }
        } else if (command === 'Unnecessary') {
            if (list.includes(item)) {
                const index = list.indexOf(item);
                list.splice(index, 1);
            }

        } else if (command === 'Correct') {
            if (list.includes(item)) {
                const index = list.indexOf(item);
                list[index] = secondItem;
            }
            
        } else if (command === 'Rearrange') {
            if (list.includes(item)) {
                const index = list.indexOf(item);
                let currentItem = list.splice(index, 1);
                list.push(currentItem);
            }
        }
        line = dataCopy.shift();
    }

    console.log(list.join(', '));
}