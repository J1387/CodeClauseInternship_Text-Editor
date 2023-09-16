document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const textInput = document.getElementById("text-input");
    const fontSizeSelect = document.getElementById("fontSize");
    const fontNameSelect = document.getElementById("fontName");
    const foreColorInput = document.getElementById("foreColor");
    const formatBlockSelect = document.getElementById("formatBlock");

    // Function to execute a command on the selected text
    function executeCommand(command, value = null) {
        document.execCommand(command, false, value);
    }

    // Event listeners for various buttons
    document.getElementById("bold").addEventListener("click", () => {
        executeCommand("bold");
    });

    document.getElementById("italic").addEventListener("click", () => {
        executeCommand("italic");
    });

    document.getElementById("underline").addEventListener("click", () => {
        executeCommand("underline");
    });

    document.getElementById("strikethrough").addEventListener("click", () => {
        executeCommand("strikethrough");
    });

    document.getElementById("superscript").addEventListener("click", () => {
        executeCommand("superscript");
    });

    document.getElementById("subscript").addEventListener("click", () => {
        executeCommand("subscript");
    });

    document.getElementById("insertOrderedLisr").addEventListener("click", () => {
        executeCommand("insertOrderedList");
    });

    document.getElementById("insertUnOrderedLisr").addEventListener("click", () => {
        executeCommand("insertUnorderedList");
    });

    document.getElementById("undo").addEventListener("click", () => {
        executeCommand("undo");
    });

    document.getElementById("redo").addEventListener("click", () => {
        executeCommand("redo");
    });

    document.getElementById("justifyLeft").addEventListener("click", () => {
        executeCommand("justifyLeft");
    });

    document.getElementById("justifyCentre").addEventListener("click", () => {
        executeCommand("justifyCenter");
    });

    document.getElementById("justifyRight").addEventListener("click", () => {
        executeCommand("justifyRight");
    });

    document.getElementById("justifyFull").addEventListener("click", () => {
        executeCommand("justifyFull");
    });

    document.getElementById("indent").addEventListener("click", () => {
        executeCommand("indent");
    });

    document.getElementById("outdent").addEventListener("click", () => {
        executeCommand("outdent");
    });

    // Event listener for changing font size
    fontSizeSelect.addEventListener("change", () => {
        const selectedSize = fontSizeSelect.value;
        executeCommand("fontSize", selectedSize);
    });

    // Event listener for changing font family
    fontNameSelect.addEventListener("change", () => {
        const selectedFont = fontNameSelect.value;
        executeCommand("fontName", selectedFont);
    });

    // Event listener for changing text color
    foreColorInput.addEventListener("change", () => {
        const selectedColor = foreColorInput.value;
        executeCommand("foreColor", selectedColor);
    });

    // Event listener for changing heading level (H1 to H6)
    formatBlockSelect.addEventListener("change", () => {
        const selectedHeading = formatBlockSelect.value;
        executeCommand("formatBlock", selectedHeading);
    });
});
