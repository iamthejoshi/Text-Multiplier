function repeatText() {
    // Get the text and repeat count from the input fields
    const textInput = document.getElementById('textInput').value;
    const repeatCount = parseInt(document.getElementById('repeatCount').value, 10);

    // Validate the inputs
    if (!textInput) {
        alert('Please enter some text.');
        return;
    }

    if (isNaN(repeatCount) || repeatCount < 1) {
        alert('Please enter a valid number greater than 0.');
        return;
    }

    // Generate the repeated text
    let resultText = '';
    for (let i = 0; i < repeatCount; i++) {
        resultText += textInput + '<br>';
    }

    // Display the result in the 'result' div
    document.getElementById('result').innerHTML = resultText;
}
