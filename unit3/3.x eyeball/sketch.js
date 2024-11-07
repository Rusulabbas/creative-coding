// Runs when the mouse moves
document.onmousemove = (event) => {
    // get the mouse position as a percentage of the window's width and height
    const x = (event.clientX / window.innerWidth) * 100 + "%"; // Horizontal position
    const y = (event.clientY / window.innerHeight) * 100 + "%"; // Vertical position

    // get all elements in 'ball' which is only the pupil 
    const balls = document.querySelectorAll('.ball'); // I didnt know about this until now! pretty cool
    
    // move each pupil to the mouse position
    balls.forEach(ball => {
        ball.style.left = x;  // move horizontally
        ball.style.top = y;   // move vertically
        
        // keep the pupil centered inside the eye
        ball.style.transform = "translate(-" + x + ", -" + y + ")";
    });
}