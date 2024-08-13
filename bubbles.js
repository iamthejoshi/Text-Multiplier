// Function to create bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.width = `${Math.random() * 100 + 20}px`; // Random size between 20px and 120px
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random animation duration between 5s and 15s
    document.getElementById('bubbles').appendChild(bubble);

    // Remove the bubble after animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Function to generate bubbles continuously
function generateBubbles() {
    setInterval(createBubble, 500); // Create a new bubble every 500ms
}

// Start generating bubbles when the page loads
window.onload = function() {
    generateBubbles();
};
