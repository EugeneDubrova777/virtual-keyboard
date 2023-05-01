const body = document.querySelector('body');

// title

const title = document.createElement('h1');
title.textContent = 'Virtual Keyboard';
title.classList.add('title');

body.append(title);

// textarea

const textareaWrapper = document.createElement('div');
textareaWrapper.classList.add('textarea-wrapper');

const textarea = document.createElement('textarea');
textarea.id = 'text-area';
textarea.classList.add('textarea');
textarea.rows = 7;
textarea.cols = 70;

body.append(textareaWrapper);
textareaWrapper.append(textarea);

// keysWrapper

const keysWrapper = document.createElement('div');
keysWrapper.classList.add('keysWrapper');

body.append(keysWrapper);

const row1 = document.createElement('div');
row1.classList.add('row1');
const row2 = document.createElement('div');
row2.classList.add('row2');
const row3 = document.createElement('div');
row3.classList.add('row3');
const row4 = document.createElement('div');
row4.classList.add('row4');
const row5 = document.createElement('div');
row5.classList.add('row5');

keysWrapper.append(row1, row2, row3, row4, row5);

// keys

// row1

const keyYo = document.createElement('div');
const key1 = document.createElement('div');
const key2 = document.createElement('div');
const key3 = document.createElement('div');
const key4 = document.createElement('div');
const key5 = document.createElement('div');
const key6 = document.createElement('div');
const key7 = document.createElement('div');
const key8 = document.createElement('div');
const key9 = document.createElement('div');
const key0 = document.createElement('div');
const keyMin = document.createElement('div');
const keyPlus = document.createElement('div');
const backspace = document.createElement('div');

keyYo.classList.add('key');
key1.classList.add('key');
key2.classList.add('key');
key3.classList.add('key');
key4.classList.add('key');
key5.classList.add('key');
key6.classList.add('key');
key7.classList.add('key');
key8.classList.add('key');
key9.classList.add('key');
key0.classList.add('key');
keyMin.classList.add('key');
keyPlus.classList.add('key');
backspace.classList.add('key');
backspace.classList.add('backspace');

keyYo.textContent = '`';
key1.textContent = '1';
key2.textContent = '2';
key3.textContent = '3';
key4.textContent = '4';
key5.textContent = '5';
key6.textContent = '6';
key7.textContent = '7';
key8.textContent = '8';
key9.textContent = '9';
key0.textContent = '0';
keyMin.textContent = '-';
keyPlus.textContent = '=';
backspace.textContent = 'Backspace';

row1.append(keyYo, key1, key2, key3, key4, key5, key6, key7, key8, key9, key0, keyMin, keyPlus, backspace);

// row2

const keyTab = document.createElement('div');
const keyQ = document.createElement('div');
const keyW = document.createElement('div');
const keyE = document.createElement('div');
const keyR = document.createElement('div');
const keyT = document.createElement('div');
const keyY = document.createElement('div');
const keyU = document.createElement('div');
const keyI = document.createElement('div');
const keyO = document.createElement('div');
const keyP = document.createElement('div');
const leftSquareQuote = document.createElement('div');
const rightSquareQuote = document.createElement('div');
const backSlash = document.createElement('div');
const keyDelete = document.createElement('div');

keyTab.classList.add('key');
keyQ.classList.add('key');
keyW.classList.add('key');
keyE.classList.add('key');
keyR.classList.add('key');
keyT.classList.add('key');
keyY.classList.add('key');
keyU.classList.add('key');
keyI.classList.add('key');
keyO.classList.add('key');
keyP.classList.add('key');
leftSquareQuote.classList.add('key');
rightSquareQuote.classList.add('key');
backSlash.classList.add('key');
keyDelete.classList.add('key');

keyTab.textContent = 'Tab';
keyQ.textContent = 'q';
keyW.textContent = 'w';
keyE.textContent = 'e';
keyR.textContent = 'r';
keyT.textContent = 't';
keyY.textContent = 'y';
keyU.textContent = 'u';
keyI.textContent = 'i';
keyO.textContent = 'o';
keyP.textContent = 'p';
leftSquareQuote.textContent = '[';
rightSquareQuote.textContent = ']';
backSlash.textContent = '\\';
keyDelete.textContent = 'Del';

row2.append(keyTab, keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP, leftSquareQuote, rightSquareQuote, backSlash, keyDelete);












