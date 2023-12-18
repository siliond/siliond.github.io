function createCopyToClipboard(text) {
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
        btn.innerText = "Copy to Clipboard";
        btn.addEventListener('click', function() {
            if (window.ClipboardJS) {
                var clipboard = new ClipboardJS('.copyButton');
            } else {
                console.log("ClipboardJS is not defined, copying to console instead.");
                console.log(text);
                btn.innerText = "To Console";
            }
        });
    }
}

function copyOnLoad(separator = "\t") {
    setTimeout(() => {
        var values = valueExpressions.map((value) => {
            let result = typeof(value) == 'function' ? value() : eval(value);
            return typeof(result) === 'string' ? result.trim() : result;
        });

        createCopyToClipboard(values.join(separator).trim());
    }, 3000);
}
