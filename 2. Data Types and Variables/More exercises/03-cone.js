function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * radius ** 2 * height;
    let slantHeight = Math.sqrt(radius ** 2 + height ** 2);
    let surfaceArea = (Math.PI * radius ** 2) + (Math.PI * radius * slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}
