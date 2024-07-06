function loadingBar(num) {

    function barCreator(num) {
        const percentCount = num / 10;
        const dotsCount = 10 - percentCount;

        const percent = '%'.repeat(percentCount);
        const dots = '.'.repeat(dotsCount);
        const bar = `[${percent}${dots}]`

        return bar;
    }

    const barResult = barCreator(num); 

    if (num === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${num}% ${barResult}`);
        console.log('Still loading...');
    }
}
