function radioCrystals(params) {
    let target = params.shift();

    const cut = (x) => x *= 0.25;
    const lap = (x) => x *= 0.8;
    const grind = (x) => x -= 20;
    const etch = (x) => x -= 2;
    const xRay = (x) => x += 1;
    const transportAndWash = (x) => x = Math.floor(x);

    for (let i = 0; i < params.length; i++) {
        let thickness = params[i];

        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xRayCounter = 0;

        while (thickness !== target && thickness > target) {
            if (thickness / 4 >= target) {
                thickness = cut(thickness);
                cutCounter++;
            } else if (thickness * 0.8 >= target) {
                thickness = lap(thickness);
                lapCounter++;
            } else if (thickness - 20 >= target) {
                thickness = grind(thickness);
                grindCounter++;
            } else {
                thickness = etch(thickness);
                etchCounter++;
            }

            thickness = transportAndWash(thickness);

            if (thickness < target) {
                if (xRayCounter === 0) {
                    thickness = xRay(thickness);
                    xRayCounter++;
                }
            }
        }

        console.log(`Processing chunk ${params[i]} microns`);
        if (cutCounter > 0) {
            print('Cut', cutCounter);
        }
        if (lapCounter > 0) {
            print('Lap', lapCounter);
        }
        if (grindCounter > 0) {
            print('Grind', grindCounter);
        }
        if (etchCounter > 0) {
            print('Etch', etchCounter);
        }
        if (xRayCounter > 0) {
            console.log('X-ray x1');;
        }

        console.log(`Finished crystal ${thickness} microns`);
    }

    function print(operation, count) {
        console.log(`${operation} x${count}`);
        console.log('Transporting and washing');
    }
}

// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
radioCrystals([1000, 800]);