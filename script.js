// Sample data for messages
const messages = [];

// DOM elements
const groupDiv = document.querySelector(".group");
const chatDiv = document.querySelector(".chat");
const passwordInput = document.getElementById("passwordInput");
const joinButton = document.getElementById("joinButton");
const messagesDiv = document.querySelector(".messages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

// Event listeners
joinButton.addEventListener("click", joinGroup);
sendButton.addEventListener("click", sendMessage);

// Join the group when the password is correct
function joinGroup() {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === "csbs124") {
        groupDiv.style.display = "none";
        chatDiv.style.display = "block";
        loadMessages();
    } else {
        alert("Invalid group password. Please try again.");
        passwordInput.value = "";
    }
}

// Load existing messages
function loadMessages() {
    messagesDiv.innerHTML = messages.map(message => `<div>${message.text}</div>`).join("");
}

// Send a new message
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
        const message = { text: messageText, timestamp: Date.now() };
        messages.push(message);
        loadMessages();
        messageInput.value = "";

        // Automatically delete the message after 5 seconds
        setTimeout(() => {
            const index = messages.indexOf(message);
            if (index !== -1) {
                messages.splice(index, 1);
                loadMessages();
            }
        }, 5000);
    }
}