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
const Backspace = document.createElement('div');

keyYo.classList.add('key');












