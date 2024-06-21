function theLift(data) {
    let queue = Number(data.shift());
    let wagonsState = data.shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < wagonsState.length; i++) {

        while (wagonsState[i] < 4 && queue > 0) {
            queue--;
            wagonsState[i]++;
        }

    }

    const emptySlot = wagonsState.some(w => w < 4);

    if (queue === 0 && emptySlot) {
        console.log('The lift has empty spots!')
        console.log(`${wagonsState.join(' ')}`);
    } else if (queue > 0 && !emptySlot) {
        console.log(`There isn\'t enough space! ${queue} people in a queue!`);
        console.log(wagonsState.join(' '));
    } else if (queue === 0 && !emptySlot) {
        console.log(wagonsState.join(' '));
    }
}

theLift([
    "20",
    "0 2 0"
   ]
   
)