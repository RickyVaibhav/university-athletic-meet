document.addEventListener('DOMContentLoaded', () => {
    const participantForm = document.getElementById('participant-form');

    participantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add participant logic here
        alert('Participant added successfully!');
        hideForm('participant-form');
    });

    // Fetch and display events and announcements
    fetchEvents();
    fetchAnnouncements();
    fetchParticipants();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.captain-section');
    sections.forEach(section => section.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
}

function showParticipantForm() {
    const form = document.getElementById('participant-form');
    form.style.display = 'block';
}

function hideForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = 'none';
}

function fetchEvents() {
    // Dummy data for demonstration
    const events = [
        { name: '100m Dash', date: '2024-07-10' },
        { name: 'Long Jump', date: '2024-07-11' },
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
        { title: 'New Rules', content: 'New rules have been added for the track events.' },
    ];

    const announcementsList = document.getElementById('announcements-list');
    announcements.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.innerHTML = `<strong>${announcement.title}</strong><p>${announcement.content}</p>`;
        announcementsList.appendChild(announcementItem);
    });
}

function fetchParticipants() {
    // Dummy data for demonstration
    const participants = [
        { name: 'John Doe', event: '100m Dash' },
        { name: 'Jane Smith', event: 'Long Jump' },
    ];

    const participantsList = document.getElementById('participants-list');
    participants.forEach(participant => {
        const participantItem = document.createElement('div');
        participantItem.innerHTML = `${participant.name} - ${participant.event} <button onclick="removeParticipant('${participant.name}')">Remove</button>`;
        participantsList.appendChild(participantItem);
    });
}

function removeParticipant(name) {
    // Remove participant logic here
    alert(`Participant ${name} removed successfully!`);
    // Refresh participants list
    fetchParticipants();
}
// Function to logout (replace with your actual logout functionality)
function logout() {
    // Perform logout actions here (e.g., clear session, redirect to login page)
    alert('Logout successful! ');
    window.location.href = 'index.html'; // Replace with your login page URL
}
