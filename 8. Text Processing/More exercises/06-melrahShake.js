function melrahShake([str, pattern]) {
    while (pattern.length > 0) {
        let firstIndex = str.indexOf(pattern);
        let lastIndex = str.lastIndexOf(pattern);

        if (firstIndex !== -1 && lastIndex !== -1 && firstIndex !== lastIndex) {
            str = str.split('');
            str.splice(lastIndex, pattern.length);
            str.splice(firstIndex, pattern.length);
            str = str.join('');

            let patternMiddleIdx = Math.floor(pattern.length / 2);
            pattern = pattern.split('');
            pattern.splice(patternMiddleIdx, 1);
            pattern = pattern.join('');

            console.log('Shaked it.');
        } else {
            break;
        }
    }

    console.log('No shake.');
    console.log(str);
}