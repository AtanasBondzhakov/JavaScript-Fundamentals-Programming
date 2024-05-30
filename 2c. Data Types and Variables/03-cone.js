function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * radius ** 2 * height;
    let slantHeight = Math.sqrt(radius ** 2 + height ** 2);
    let surfaceArea = (Math.PI * radius ** 2) + (Math.PI * radius * slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3, 5); //volume = 47.1239
            //area = 83.2298
cone(3.3, 7.8); //volume = 88.9511
                //area = 122.0159