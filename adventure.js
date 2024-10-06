// Story data with branching paths
const storySteps = [
    {
        text: "You are going on an adventure, are you a knight or a wizard?",
        options: [
            { text: "Knight", nextStep: 1 },
            { text: "Wizard", nextStep: 1 }
        ]
    }, // 0
    {
        text: "You are heading off into a dungeon, do you enter in the front gate or through the sewers?",
        options: [
            { text: "Front gate", nextStep: 2 },
            { text: "Sewers", nextStep: 3 }
        ]
    },// 1
    {
        text: "A goblin guards the gate! Do you fight it or run away?",
        options: [
            { text: "Fight", nextStep: 4 },
            { text: "Run", nextStep: 6 }
        ]
    },// 2
    {
        text: "A rat guards the sewers! Do you fight it or run away?",
        options: [
            { text: "Fight", nextStep: 5 },
            { text: "Run", nextStep: 7 }
        ]
    },// 3
    {
        text: "After vanquishing the goblin, you discover a dark staircase going deeper into the dungeon, do you enter?",
        options: [
            { text: "Enter", nextStep: 8 },
            { text: "Leave", nextStep: 9 }
        ]
    },// 4
    {
        text: "After vanquishing the rat, you discover a dark staircase going deeper into the dungeon, do you enter?",
        options: [
            { text: "Enter", nextStep: 8 },
            { text: "Leave", nextStep: 9 }
        ]
    },// 5
    {
        text: "You fled the goblin and wandered back to the forest. The adventure ends.",
        options: []
    },// 6
    {
        text: "You fled the rat and wandered back to the forest. The adventure ends.",
        options: []
    },// 7
    {
        text: "At the bottom of the staircase, you find a locked door. Do you search for a key or break it down with your sword?",
        options: [
            { text: "Search", nextStep: 10 },
            { text: "Break open", nextStep: 11 }
        ]
    },// 8
    {
        text: "You decide to leave the dungeon, returning to the forest. The adventure ends.",
        options: []
    },// 9
    {
        text: "After searching for a while, you find a key on a nearby table.",
        options: [
            { text: "Unlock door", nextStep: 12 },
        ]
    },// 10
    {
        text: "After breaking open the door, you are greeted by a dragon spewing fire. You are dead.",
        options: []
    },// 11
    {
        text: "You unlock the door and encounter a sleeping dragon guarding a treasure chest. Do you go for the chest or slay the dragon?",
        options: [
            { text: "Chest", nextStep: 13 },
            { text: "Dragon", nextStep: 14 }
        ]
    },// 12
    {
        text: "You manage to open the chest without waking the dragon. You find a purse of gold coins!",
        options: [
            { text: "Leave", nextStep: 15 }
        ]
    },// 13
    {
        text: "You successfully slay the dragon, the dragon spews fire before dying and burns the chest!",
        options: [
            { text: "Leave", nextStep: 16 }
        ]
    },// 14
    {
        text: "You walk away rich with gold! The adventure ends.",
        options: []
    },// 15
    {
        text: "You march off a dragon-slaying legend! The adventure ends.",
        options: []
    }// 16
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

    // Create option buttons dynamically
    step.options.map(option => {
        const btn = document.createElement('button');
        btn.innerText = option.text;
        btn.addEventListener('click', () => displayStory(option.nextStep)); // Use nextStep from the option
        buttonContainer.appendChild(btn);  // Append button to the container
    });
}

// Start button event listener
document.getElementById('startBtn').addEventListener('click', () => {
    displayStory(0);
    document.getElementById('startBtn').style.display = 'none'; // Hide start button
});
