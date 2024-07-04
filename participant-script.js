// Function to show the section by id
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the specified section
    document.getElementById(sectionId).style.display = 'block';

    // Fetch and render data for the selected section if needed
    if (sectionId === 'all-participants-section') {
        fetchAllParticipants();
    }
}

function fetchEvents() {
    console.log('Fetching events...');
    renderEvents();
    showSection('events-section');
}

// Function to render events
function renderEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';

    events.forEach(event => {
        const eventContainer = document.createElement('div');
        eventContainer.classList.add('event-item');
        
        const eventHeader = document.createElement('h3');
        eventHeader.textContent = `${event.name} - ${event.date}`;
        eventContainer.appendChild(eventHeader);
        
        eventsList.appendChild(eventContainer);
    });
}

// Function to fetch and render announcements from local storage
function fetchAnnouncements() {
    console.log('Fetching announcements...');
    renderAnnouncements();
    showSection('announcements-section');
}

// Function to render announcements
function renderAnnouncements() {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    const announcementsList = document.getElementById('announcements-list');
    announcementsList.innerHTML = '';

    announcements.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.classList.add('announcement-item');
        announcementItem.innerHTML = `<h3>${announcement.title}</h3><p>${announcement.content}</p>`;
        announcementsList.appendChild(announcementItem);
    });
}

// Function to fetch and render all participants from local storage
function fetchAllParticipants() {
    console.log('Fetching all participants...');
    renderAllParticipants();
}

// Function to render all participants with events
function renderAllParticipants() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const allParticipantsList = document.getElementById('all-participants-list');
    allParticipantsList.innerHTML = '';

    events.forEach(event => {
        if (event.participants && event.participants.length > 0) {
            const eventContainer = document.createElement('div');
            eventContainer.classList.add('event-item');

            const eventHeader = document.createElement('h3');
            eventHeader.textContent = `${event.name} - ${event.date}`;
            eventContainer.appendChild(eventHeader);

            const participantsList = document.createElement('ul');
            event.participants.forEach(participant => {
                const participantItem = document.createElement('li');
                participantItem.textContent = `${participant.name}`;
                participantsList.appendChild(participantItem);
            });

            eventContainer.appendChild(participantsList);
            allParticipantsList.appendChild(eventContainer);
        }
    });
}

// Function to handle logout
function logout() {
    console.log('Logging out...');
    // Redirect to login page (assuming index.html is your login page)
    window.location.href = 'index.html';
}

// Initial render on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, rendering initial data...');
    fetchEvents();
    fetchAnnouncements();
});

// Event listeners for tab navigation
document.getElementById('events-tab').addEventListener('click', function() {
    fetchEvents();
});

document.getElementById('announcements-tab').addEventListener('click', function() {
    fetchAnnouncements();
});

document.getElementById('all-participants-tab').addEventListener('click', function() {
    fetchAllParticipants();
});
