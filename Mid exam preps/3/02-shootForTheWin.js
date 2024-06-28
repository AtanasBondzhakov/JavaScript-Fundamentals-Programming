function shootForTheWin(data) {
    let targets = data.shift()
        .split(' ')
        .map(Number);
    let index = data.shift();
    let shoots = 0;

    while (index !== 'End') {
        index = Number(index);
        const currentTarget = targets[index];

        if (index >= 0 && index < targets.length && targets[index] !== -1) {
            targets[index] = -1;
            shoots++;

            for (let i = 0; i < targets.length; i++) {
                if(targets[i] <= currentTarget && targets[i] > -1) {
                    targets[i] += currentTarget;
                } else if (targets[i] > currentTarget) {
                    targets[i] -= currentTarget;
                }
            }     
        }
        index = data.shift();
    }
    
    console.log(`Shot targets: ${shoots} -> ${targets.join(' ')}`);
}