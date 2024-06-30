function guineaPig(data) {
    data = data.map(Number);
    let food = data.shift() * 1000;
    let hay = data.shift() * 1000;
    let cover = data.shift() * 1000;
    let pigWeight = data.shift() * 1000;

    for (let day = 1; day <= 30; day++) {
        food -= 300;

        if (day % 2 === 0) {
            hay -= food * 0.05;
        }

        if (day % 3 === 0) {
            cover -= pigWeight / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}