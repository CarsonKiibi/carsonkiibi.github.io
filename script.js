function updateText(textElement) {
    let delay = 200;

    // Get the text content from the element
    let text = textElement.textContent;

    textElement.innerHTML = text
        .split("")
        .map(letter => {
            return `<span>` + letter + `</span>`;
        })
        .join("");

    Array.from(textElement.children).forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("wavy");
        }, index * 60 + delay);
    });
}

// Select all elements with the class 'wave-animation'
document.querySelectorAll('.wave-animation').forEach(element => {
    updateText(element);
});
