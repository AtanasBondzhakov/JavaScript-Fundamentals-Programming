function pointsValidation([x1, y1, x2, y2]) {

    function isDistanceInt(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance % 1 === 0 ? 'valid' : 'invalid'
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isDistanceInt(x1, y1, 0, 0)} `);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isDistanceInt(x2, y2, 0, 0)} `);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isDistanceInt(x1, y1, x2, y2)} `);
}
