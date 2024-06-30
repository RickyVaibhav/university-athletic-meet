document.addEventListener('DOMContentLoaded', () => {
    const captainForm = document.getElementById('captain-form');
    const eventForm = document.getElementById('event-form');
    const announcementForm = document.getElementById('announcement-form');

    captainForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Captain saved successfully!');
        hideForm('captain-form');
    });

    eventForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Event saved successfully!');
        hideForm('event-form');
    });

    announcementForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Announcement saved successfully!');
        hideForm('announcement-form');
    });

    fetchCaptains();
    fetchEvents();
    fetchAnnouncements();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => section.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
}

function logout() {
    alert('Logged out successfully!');
    window.location.href = 'index.html'; // Redirect to the login page
}

function showCaptainForm() {
    document.getElementById('captain-form').style.display = 'block';
}

function showEventForm() {
    document.getElementById('event-form').style.display = 'block';
}

function showAnnouncementForm() {
    document.getElementById('announcement-form').style.display = 'block';
}

function hideForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function fetchCaptains() {
    // Dummy data for demonstration
    const captains = [
        { name: 'John Doe', hostel: 'Hostel A' },
        { name: 'Jane Smith', hostel: 'Hostel B' }
    ];

    const captainsList = document.getElementById('captains-list');
    captains.forEach(captain => {
        const captainItem = document.createElement('div');
        captainItem.textContent = `${captain.name} - ${captain.hostel}`;
        captainsList.appendChild(captainItem);
    });
}

function fetchEvents() {
    // Dummy data for demonstration
    const events = [
        { name: '100m Dash', date: '2024-07-10' },
        { name: 'Long Jump', date: '2024-07-11' }
    ];

    const eventsList = document.getElementById('events-list');
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.textContent = `${event.name} - ${event.date}`;
        eventsList.appendChild(eventItem);
    });
}

function fetchAnnouncements() {
    // Dummy data for demonstration
    const announcements = [
        { title: 'Event Schedule Released', content: 'The schedule for the events has been released.' },
        { title: 'New Rules', content: 'New rules have been added for the track events.' }
    ];

    const announcementsList = document.getElementById('announcements-list');
    announcements.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.innerHTML = `<strong>${announcement.title}</strong><p>${announcement.content}</p>`;
        announcementsList.appendChild(announcementItem);
    });
}
// Function to logout (replace with your actual logout functionality)
function logout() {
    // Perform logout actions here (e.g., clear session, redirect to login page)
    alert('Logout successful! ');
    window.location.href = 'index.html'; // Replace with your login page URL
}

