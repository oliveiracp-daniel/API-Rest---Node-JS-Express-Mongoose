'use strict'

let erros = [];

function validationContract() {
    erros = [];
}

validationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
    erros.push({message: message});
}

validationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
    erros.push({message: message});
}

validationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
    erros.push({message: message});
}

validationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
    erros.push({message: message});
}

validationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp();
    if (!reg.test(value))
    erros.push({message: message});
}

validationContract.prototype.errors = () => {
    return erros;
}

validationContract.prototype.clear = () => {
    errors = [];
}

validationContract.prototype.isValid = () => {
    return erros.length ==  0;
}

module.exports = validationContract;