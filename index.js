// Write your code here!
// Write your code here!

const mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}

const newHeader = document.createElement('h1');

newHeader.id = 'victory';


newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);