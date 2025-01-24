// Initialize Telegram Web App
const telegram = window.Telegram.WebApp;

// Set up a click event listener for the button
document.getElementById("greetButton").addEventListener("click", function () {
    // Get the user's input from the text field
    const name = document.getElementById("nameInput").value.trim();

    // Check if a name was entered
    if (name) {
        // Display a personalized greeting message
        document.getElementById("greetingMessage").textContent = `Hello, ${name}! Welcome to Telegram Mini App!`;

        // Send data back to the bot (optional)
        telegram.sendData(JSON.stringify({ name: name }));

        // Close the app (optional)
        setTimeout(() => {
            telegram.close();
        }, 2000);
    } else {
        // Show an error if the name field is empty
        document.getElementById("greetingMessage").textContent = "Please enter your name!";
    }
});
