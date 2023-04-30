const body = document.querySelector('body');

// title

const title = document.createElement('h1');
title.textContent = 'Virtual Keyboard';
title.classList.add('title');

body.append(title);

// textarea

const textareaWrapper = document.createElement('div');
textareaWrapper.classList.add('text-area');

const textarea = document.createElement('textarea');
textarea.id = 'text-area';
textarea.rows = 10;
textarea.cols = 70;

body.append(textareaWrapper);
textareaWrapper.append(textarea);








