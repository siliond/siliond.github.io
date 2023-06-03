function createCopyToClipboard(text) {
    /* <button class="btn" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">
    	Copy to clipboard
		</button>
	*/

    if (text) {
        const btn = document.createElement('button');
        btn.classList.add("copyButton");

        btn.setAttribute('data-clipboard-text', text);

        btn.style.position = 'absolute';
        btn.style.backgroundColor = 'lawngreen';
        btn.style.cursor = 'pointer';
        btn.style.zIndex = '2147483647';

        btn.style.left = '10px';
        btn.style.top = '10px';
        document.body.appendChild(btn);
        btn.innerText = "Copy";
    }
}

function copyOnLoad() {
    setTimeout(() => {
        var values = valueExpressions.map((value) => (typeof(value) == 'function' ? value() : eval(value)).trim());

        createCopyToClipboard(values.join("\t").trim());

        var clipboard = new ClipboardJS('.copyButton');
    }, 3000);
}