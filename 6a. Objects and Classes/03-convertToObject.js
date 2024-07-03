function convertToObject(JSONstring) {
    const obj = JSON.parse(JSONstring);
    const entries = Object.entries(obj);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}