document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('drawCanvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;

    // Set up initial canvas styles
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = '#000';

    // Event listeners for mouse actions
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Event listeners for touch actions (for touchscreen devices)
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // Function to start drawing
    function startDrawing(e) {
        isDrawing = true;
        context.beginPath();
        // Set the starting point of the line to the current mouse/touch position
        setPosition(e);
    }

    // Function to draw a line
    function draw(e) {
        if (!isDrawing) return;
        context.lineTo(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY);
        context.stroke();
        // Update the current position as the line is drawn
        setPosition(e);
    }

    // Function to stop drawing
    function stopDrawing() {
        isDrawing = false;
        context.closePath();
    }

    // Function to set the position of the drawing
    function setPosition(e) {
        context.moveTo(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY);
    }
});
