function worldTour(arr) {
    let stops = arr.shift();
    let command = arr.shift();

    while (command !== 'Travel') {
        let tokens = command.split(':');
        const action = tokens.shift();

        if (action === 'Add Stop') {
            const index = Number(tokens.shift());
            const str = tokens.shift();
            if (checkIdxValidation(index, stops)) {
                stops = stops.substring(0, index) + str + stops.substring(index);
            }

        } else if (action === 'Remove Stop') {
            const startIdx = Number(tokens.shift());
            const endIdx = Number(tokens.shift());
            if (checkIdxValidation(startIdx, stops) && checkIdxValidation(endIdx, stops)) {
                subStr = stops.substring(startIdx, endIdx + 1);
                stops = stops.replace(subStr, '');
            }

        } else if (action === 'Switch') {
            const [oldStr, newStr] = tokens;
            if (stops.includes(oldStr)) {
                stops = stops.split(oldStr).join(newStr);
            }
        }

        console.log(stops);
        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    function checkIdxValidation(idx, str) {
        return idx >= 0 && idx < str.length;
    }
}