document.addEventListener('DOMContentLoaded', () => {
    const userLoginForm = document.getElementById('captain-login-form');
    const adminLoginForm = document.getElementById('admin-login-form');
    const participantLoginForm = document.getElementById('participant-login-form'); // New participant login form

    // Admin credentials (for demonstration purposes)
    const adminCredentials = {
        username: 'admin',
        password: 'admin123'
    };

    // Captain credentials (for demonstration purposes)
    const captainCredentials = {
        username: 'captain',
        password: 'captain123'
    };

    // Participant credentials (for demonstration purposes)
    const participantCredentials = {
        username: 'participant',
        password: 'participant123'
    };

    userLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('captain-username').value;
        const password = document.getElementById('captain-password').value;

        if (username === captainCredentials.username && password === captainCredentials.password) {
            alert('Captain logged in successfully!');
            window.location.href = 'captain.html'; // Redirect to the captain dashboard
        } else {
            alert('Invalid captain credentials');
        }
    });

    adminLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        if (username === adminCredentials.username && password === adminCredentials.password) {
            alert('Admin logged in successfully!');
            window.location.href = 'admin.html'; // Redirect to the admin dashboard
        } else {
            alert('Invalid admin credentials');
        }
    });

    // Participant login form event listener
    participantLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('participant-username').value;
        const password = document.getElementById('participant-password').value;

        if (username === participantCredentials.username && password === participantCredentials.password) {
            alert('Participant logged in successfully!');
            window.location.href = 'participants.html'; // Redirect to the participant dashboard
        } else {
            alert('Invalid participant credentials');
        }
    });
});

function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
