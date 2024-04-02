document.addEventListener('DOMContentLoaded', () => {
    const copyTextSpans = document.getElementsByClassName("copytext"); 
    [...copyTextSpans].forEach(copyTextSpan => {
        copyTextSpan.addEventListener("click", () => {
            const copiedText = copyTextSpan.innerText;
            navigator.clipboard.writeText(copiedText)
        });
    });
});