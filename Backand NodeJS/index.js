const dateFormat = require('./dateFormat');
;
const currentDate = new Date();

const dataFormatada = dateFormat(currentDate);

console.log(dataFormatada);
