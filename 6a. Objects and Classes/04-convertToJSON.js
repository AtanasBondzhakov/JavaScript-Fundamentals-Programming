function convertToJSON(name, lastName, hairColor) {
    const obj = {
        name,
        lastName,
        hairColor,
    }

    const jsonStr = JSON.stringify(obj);

    console.log(jsonStr);
}