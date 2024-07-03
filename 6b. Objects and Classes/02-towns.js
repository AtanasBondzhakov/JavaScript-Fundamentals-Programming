function towns(rows) {
    for (let row of rows) {
        let [town, latitude, longitude] = row.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        const obj = {
            town,
            latitude,
            longitude,
        };
        
        console.log(obj);
    }
}