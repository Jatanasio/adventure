// Story data using an array
const storySteps = [
    { text: "You wake up in a dark forest. Do you want to go left or right?", options: ["Left", "Right"] },
    { text: "You find a path. Do you want to follow it or head into the woods?", options: ["Follow", "Into the woods"] },
    { text: "A wild creature appears! Do you fight it or run away?", options: ["Fight", "Run"] },
    { text: "You find a treasure chest! Do you open it or leave it?", options: ["Open", "Leave"] }
];

// Function to display story steps
function displayStory(stepIndex) {
    const storyContainer = document.getElementById('story');
    const buttonContainer = document.getElementById('buttonContainer');

    // Base case: If no more story steps, end the game
    if (stepIndex >= storySteps.length) {
        storyContainer.innerText = "The adventure ends here. Thanks for playing!";
        buttonContainer.innerHTML = '';  // Clear any remaining buttons
        return;
    }

    // Display current story step and options
    const step = storySteps[stepIndex];
    storyContainer.innerText = step.text;

    // Clear previous buttons
    buttonContainer.innerHTML = '';

    // Use Array.prototype.map (native ES6) to create option buttons dynamically
    step.options.map(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.addEventListener('click', () => nextStep(stepIndex));
        buttonContainer.appendChild(btn);  // Append button to the container
    });
}

// Move to the next step, use recursion to move through steps
function nextStep(currentIndex) {
    displayStory(currentIndex + 1);
}

// Start button event listener
document.getElementById('startBtn').addEventListener('click', () => {
    displayStory(0);
    document.getElementById('startBtn').style.display = 'none'; // Hide start button
});

// Example usage of a third-party library (Lodash)
console.log(_.shuffle([1, 2, 3, 4, 5])); // Demonstrating Lodash's shuffle function
