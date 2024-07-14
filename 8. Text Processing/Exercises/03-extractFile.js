function extractFile(str) {
    const result = str.split('\\').pop();
    const index = result.lastIndexOf('.');
    const extension = result.substring(index + 1);
    const name = result.substring(0, index);
    
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx.abv')