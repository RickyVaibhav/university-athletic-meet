document.addEventListener('DOMContentLoaded', () => {
    const userLoginForm = document.getElementById('user-login-form');
    const adminLoginForm = document.getElementById('admin-login-form');
    const landingPage = document.getElementById('landing-page');

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

    userLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('user-username').value;
        const password = document.getElementById('user-password').value;

        if (username === captainCredentials.username && password === captainCredentials.password) {
            alert('Captain logged in successfully!');
            window.location.href = 'captain.html'; // Redirect to the captain dashboard
        } else {
            alert('Invalid user credentials');
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
});

function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
