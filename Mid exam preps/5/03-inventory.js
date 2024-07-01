function inventory(data) {
    let journal = data.shift()
        .split(', ');
    let command = data.shift();

    while (command !== 'Craft!') {
        const [action, item] = command.split(' - ');

        if (action === 'Collect') {
            if (!journal.includes(item)) {
                journal.push(item);
            }

        } else if (action === 'Drop') {
            if (journal.includes(item)) {
                journal = journal.filter(el => el !== item);
            }

        } else if (action === 'Combine Items') {
            const [oldItem, newItem] = item.split([':'])

            if (journal.includes(oldItem)) {
                const index = journal.indexOf(oldItem);
                journal.splice(index + 1, 0, newItem);
            }

        } else if (action === 'Renew') {
            if (journal.includes(item)) {
                const index = journal.indexOf(item);
                const currentItem = journal.splice(index, 1);
                journal.push(currentItem);
            }
        }

        command = data.shift();
    }

    console.log(journal.join(', '));
}