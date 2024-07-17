function hardWord(arr) {
    let letter = arr[0];
    const letterWords = letter.split(' ');
    const emptySlots = letterWords.filter(w => w.includes('_'));
    const replacers = arr[1];

    for (let slot of emptySlots) {
        if (!slot.endsWith('_')) {
            slot = slot.substring(0, slot.length - 1);
        }

        const targetWord = replacers.find(w => w.length === slot.length);
        letter = letter.replace(slot, targetWord)
    }

    console.log(letter);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])