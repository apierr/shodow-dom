var host = document.querySelector('#shadowHost');
var shadowRoot = host.attachShadow({ mode: 'open' });
var div = document.createElement('div');

div.textContent = 'Can you see me';
div.className = 'x';
shadowRoot.appendChild(div);
