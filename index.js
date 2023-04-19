// Write your code here!
const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
// document.body.append(newHeader);
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'RAF-NICHOLSON is the champion';