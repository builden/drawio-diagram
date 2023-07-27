/* cSpell:disable */
const prefix = 'https://builden.tech/proxy/raw.githubusercontent.com/builden/drawio-diagram/main/';
const url = prefix + 'brands.drawio'; // <= Copy Relative Path

console.log(encodeURIComponent(url));
// => https%3A%2F%2Fbuilden.tech%2Fproxy%2Fraw.githubusercontent.com%2Fbuilden%2Fdrawio-diagram%2Fmain%2Fbrands.drawio
