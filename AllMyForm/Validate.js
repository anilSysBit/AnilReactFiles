const validate = (element) => {
    let errors = [true, ''];

    if (element.validation.required) {
        let valid = element.value.trim() != '';
        let message = `${!valid ? 'This feild is required' : ''}`;
        errors = !valid ? [valid, message] : errors;
    }
    return errors;
}

export default validate;