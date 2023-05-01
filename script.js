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
textarea.id = 'textarea';
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

// row3

const keyCaps = document.createElement('div');
const keyA = document.createElement('div');
const keyS = document.createElement('div');
const keyD = document.createElement('div');
const keyF = document.createElement('div');
const keyG = document.createElement('div');
const keyH = document.createElement('div');
const keyJ = document.createElement('div');
const keyK = document.createElement('div');
const keyL = document.createElement('div');
const semicolon = document.createElement('div');
const mark = document.createElement('div');
const enter = document.createElement('div');

keyCaps.classList.add('key');
keyCaps.classList.add('key-caps');
keyA.classList.add('key');
keyS.classList.add('key');
keyD.classList.add('key');
keyF.classList.add('key');
keyG.classList.add('key');
keyH.classList.add('key');
keyJ.classList.add('key');
keyK.classList.add('key');
keyL.classList.add('key');
semicolon.classList.add('key');
mark.classList.add('key');
enter.classList.add('key');
enter.classList.add('enter');

keyCaps.textContent = 'Caps';
keyA.textContent = 'a';
keyS.textContent = 's';
keyD.textContent = 'd';
keyF.textContent = 'f';
keyG.textContent = 'g';
keyH.textContent = 'h';
keyJ.textContent = 'j';
keyK.textContent = 'k';
keyL.textContent = 'l';
semicolon.textContent = ';';
mark.textContent = `'`;
enter.textContent = 'Enter';

row3.append(keyCaps, keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, semicolon, mark, enter);

// row4

const leftShift = document.createElement('div');
const keyZ = document.createElement('div');
const keyX = document.createElement('div');
const keyC = document.createElement('div');
const keyV = document.createElement('div');
const keyB = document.createElement('div');
const keyN = document.createElement('div');
const keyM = document.createElement('div');
const comma = document.createElement('div');
const point = document.createElement('div');
const slash = document.createElement('div');
const arrUp = document.createElement('div');
const rightShift = document.createElement('div');

leftShift.classList.add('key');
leftShift.classList.add('left-shift');
keyZ.classList.add('key');
keyX.classList.add('key');
keyC.classList.add('key');
keyV.classList.add('key');
keyB.classList.add('key');
keyN.classList.add('key');
keyM.classList.add('key');
comma.classList.add('key');
point.classList.add('key');
slash.classList.add('key');
arrUp.classList.add('key');
rightShift.classList.add('key');


leftShift.textContent = 'Shift';
keyZ.textContent = 'z';
keyX.textContent = 'x';
keyC.textContent = 'c';
keyV.textContent = 'v';
keyB.textContent = 'b';
keyN.textContent = 'n';
keyM.textContent = 'm';
comma.textContent = ',';
point.textContent = '.';
slash.textContent = '/';
arrUp.textContent = '↑';
rightShift.textContent = 'Shift';

row4.append(leftShift, keyZ, keyX, keyC, keyV, keyB, keyN, keyM, comma, point, slash, arrUp, rightShift);

// row5

const leftCtrl = document.createElement('div');
const fn = document.createElement('div');
const win = document.createElement('div');
const leftAlt = document.createElement('div');
const space = document.createElement('div');
const rightAlt = document.createElement('div');
const rightCtrl = document.createElement('div');
const arrLeft = document.createElement('div');
const arrDown = document.createElement('div');
const arrRight = document.createElement('div');

leftCtrl.classList.add('key');
fn.classList.add('key');
win.classList.add('key');
leftAlt.classList.add('key');
space.classList.add('key');
space.classList.add('space');
rightAlt.classList.add('key');
rightCtrl.classList.add('key');
arrLeft.classList.add('key');
arrDown.classList.add('key');
arrRight.classList.add('key');

leftCtrl.textContent = 'Ctrl';
fn.textContent = 'Fn';
win.textContent = 'Win';
leftAlt.textContent = 'Alt';
space.textContent = '';
rightAlt.textContent = 'Alt';
rightCtrl.textContent = 'Ctrl';
arrLeft.textContent = '←';
arrDown.textContent = '↓';
arrRight.textContent = '→';

row5.append(leftCtrl, fn, win, leftAlt, space, rightAlt, rightCtrl, arrLeft, arrDown, arrRight);




keyYo.dataset.action = '192';
key1.dataset.action = '49';
key2.dataset.action = '50';
key3.dataset.action = '51';
key4.dataset.action = '52';
key5.dataset.action = '53';
key6.dataset.action = '54';
key7.dataset.action = '55';
key8.dataset.action = '56';
key9.dataset.action = '57';
key0.dataset.action = '48';
keyMin.dataset.action = '189';
keyPlus.dataset.action = '187';
backspace.dataset.action = '8';

keyTab.dataset.action = '9';
keyQ.dataset.action = '81';
keyW.dataset.action = '87';
keyE.dataset.action = '69';
keyR.dataset.action = '82';
keyT.dataset.action = '84';
keyY.dataset.action = '89';
keyU.dataset.action = '85';
keyI.dataset.action = '73';
keyO.dataset.action = '79';
keyP.dataset.action = '80';
leftSquareQuote.dataset.action = '219';
rightSquareQuote.dataset.action = '221';
backSlash.dataset.action = '220';
keyDelete.dataset.action = '46';

keyCaps.dataset.action = '20';
keyA.dataset.action = '65';
keyS.dataset.action = '83';
keyD.dataset.action = '68';
keyF.dataset.action = '70';
keyG.dataset.action = '71';
keyH.dataset.action = '72';
keyJ.dataset.action = '74';
keyK.dataset.action = '75';
keyL.dataset.action = '76';
semicolon.dataset.action = '186';
mark.dataset.action = '222';
enter.dataset.action = '13';

leftShift.dataset.action = '16';
keyZ.dataset.action = '90';
keyX.dataset.action = '88';
keyC.dataset.action = '67';
keyV.dataset.action = '86';
keyB.dataset.action = '66';
keyN.dataset.action = '78';
keyM.dataset.action = '77';
comma.dataset.action = '188';
point.dataset.action = '190';
slash.dataset.action = '191';
arrUp.dataset.action = '38';
rightShift.dataset.action = '16';

leftCtrl.dataset.action = '17';
fn.dataset.action = '';
win.dataset.action = '';
leftAlt.dataset.action = '17';
space.dataset.action = '32';
rightAlt.dataset.action = '';
rightCtrl.dataset.action = '17';
arrLeft.dataset.action = '37';
arrDown.dataset.action = '40';
arrRight.dataset.action = '39';





function mouseClick(event){
  const action = event.target.dataset.action;
  textarea.value += String.fromCharCode(action);
}
  
let keys = document.querySelectorAll('.key');
[...keys].forEach(item => item.addEventListener('click', mouseClick));



