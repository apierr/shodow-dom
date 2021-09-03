var host = document.querySelector('#shadowHost');
var shadowRoot = host.attachShadow({ mode: 'open' });

var div = document.createElement('div');
div.textContent = 'I am a shodow element';
div.className = 'x';
shadowRoot.appendChild(div);

shadowRoot.appendChild(document.querySelector('#tmpl').content);
