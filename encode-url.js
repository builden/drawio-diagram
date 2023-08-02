/* cSpell:disable */
const prefix = 'https://builden.tech/proxy/raw.githubusercontent.com/builden/drawio-diagram/main/';
const url = prefix + 'philosophy/proposition.drawio'; // <= Copy Relative Path

console.log('https://viewer.builden.tech/#U' + encodeURIComponent(url));
// => https%3A%2F%2Fbuilden.tech%2Fproxy%2Fraw.githubusercontent.com%2Fbuilden%2Fdrawio-diagram%2Fmain%2Fbrands.drawio
