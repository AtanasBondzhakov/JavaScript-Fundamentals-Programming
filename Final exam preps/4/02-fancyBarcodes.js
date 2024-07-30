function fancyBarcodes(arr) {
    const pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
    const digitPattern = /[0-9]/g;
    const count = Number(arr.shift());

    for (let i = 1; i <= count; i++) {
        let text = arr.shift();
        let match = text.match(pattern);
           
        if (match) {
            let digitMatch = text.match(digitPattern);
            let group = '';

            if (!digitMatch) {
                group = '00';
            } else {
                for (let char of digitMatch) {
                   group += char
                }
            }

            console.log(`Product group: ${group}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}