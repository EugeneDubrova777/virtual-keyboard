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

// keys










