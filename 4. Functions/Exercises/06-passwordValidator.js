function passwordValidator(password) {

    function passwordLengthCheck(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        }
        console.log('Password must be between 6 and 10 characters');
        return false;
    }

    function onlyAlphanumericCheck(password) {
        const pattern = /^[A-Za-z0-9]+$/;
        if (pattern.test(password)) {
            return true;
        }
        console.log('Password must consist only of letters and digits');
        return false;
    }

    function atLeastTwoDigitsCheck(password) {
        const pattern = /[0-9]{2,}/;
        if (pattern.test(password)) {
            return true;
        }
        console.log('Password must have at least 2 digits');
        return false;
    }

    const isValidLength = passwordLengthCheck(password);
    const isOnlyAlphanumeric = onlyAlphanumericCheck(password);
    const hasTwoDigits = atLeastTwoDigitsCheck(password);

    if (isValidLength && isOnlyAlphanumeric && hasTwoDigits) {
        console.log('Password is valid');
    }
}
