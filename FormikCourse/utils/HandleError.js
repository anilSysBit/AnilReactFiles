const validate = (elememnt)=>{
    let error= [true,''];

    if(elememnt.validation.required)
    {
        const valid =  elememnt.value.trim() != '';
        const message = `${!valid ? 'This feild is required': ''}`;
        error = !valid ? [valid,message] : error
    }

    return error;
}
export default validate;