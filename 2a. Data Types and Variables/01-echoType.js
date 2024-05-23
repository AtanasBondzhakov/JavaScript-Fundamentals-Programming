function echoType(param) {
    const paramType = typeof param;
    console.log(paramType);

    if (paramType === 'string' || paramType === 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
// echoType(18);
// echoType(null);