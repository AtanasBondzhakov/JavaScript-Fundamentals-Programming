function heartDelivery(data) {
    let dataCopy = data.slice();
    let neighborhood = dataCopy.shift().split('@').map(Number);
    let line = dataCopy.shift();

    let index = 0;

    while (line !== 'Love!') {
        let [command, jumpLength] = line.split(' ');
        jumpLength = Number(jumpLength);

        index+= jumpLength;
        if (index >= neighborhood.length) {
            index = 0;
        }

        if (neighborhood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            neighborhood[index] -= 2;
            if (neighborhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }

        line = dataCopy.shift();
    }
    console.log(`Cupid's last position was ${index}.`);
    let housesLeft = neighborhood.filter(h => h > 0);

    if (housesLeft.length === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${housesLeft.length} places.`);
    }
}