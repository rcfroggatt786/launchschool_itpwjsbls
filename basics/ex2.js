number = 4936;
console.log(number);
ones = number % 10;
tens = Math.trunc(number / 10) % 10;
hundreds = Math.trunc(number / 100) % 10;
thousands = Math.trunc(number / 1000);
console.log(thousands + ' ' + hundreds + ' ' + tens + ' ' + ones);
