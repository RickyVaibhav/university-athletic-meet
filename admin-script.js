// Function to show different sections
function showSection(sectionId) {
    document.querySelectorAll('.admin-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Function to show the form for adding/editing a captain
function showCaptainForm(captain = {}) {
    const { id = '', name = '', hostel = '' } = captain;
    document.getElementById('captain-id').value = id;
    document.getElementById('captain-name').value = name;
    document.getElementById('captain-hostel').value = hostel;
    document.getElementById('captain-form').style.display = 'block';
}

// Function to save a new captain to local storage
document.getElementById('captain-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('captain-id').value;
    const name = document.getElementById('captain-name').value;
    const hostel = document.getElementById('captain-hostel').value;
    let captains = JSON.parse(localStorage.getItem('captains')) || [];
    if (id) {
        // Edit existing captain
        captains = captains.map(captain => captain.id === id ? { id, name, hostel } : captain);
    } else {
        // Add new captain
        captains.push({ id: Date.now().toString(), name, hostel });
    }
    localStorage.setItem('captains', JSON.stringify(captains));
    renderCaptains();
    this.reset();
    document.getElementById('captain-form').style.display = 'none';
});

// Function to render captains from local storage
function renderCaptains() {
    const captains = JSON.parse(localStorage.getItem('captains')) || [];
    const captainsList = document.getElementById('captains-list');
    captainsList.innerHTML = captains.map(captain => 
        `<div>
            <p>${captain.name} - ${captain.hostel}</p>
            <button onclick="showCaptainForm(${JSON.stringify(captain)})">Edit</button>
            <button onclick="deleteCaptain('${captain.id}')">Delete</button>
        </div>`
    ).join('');
}

// Function to delete a captain from local storage
function deleteCaptain(id) {
    let captains = JSON.parse(localStorage.getItem('captains')) || [];
    captains = captains.filter(captain => captain.id !== id);
    localStorage.setItem('captains', JSON.stringify(captains));
    renderCaptains();
}

// Function to show the form for adding/editing an event
function showEventForm(event = {}) {
    const { id = '', name = '', date = '' } = event;
    document.getElementById('event-id').value = id;
    document.getElementById('event-name').value = name;
    document.getElementById('event-date').value = date;
    document.getElementById('event-form').style.display = 'block';
}

// Function to save a new event to local storage
document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('event-id').value;
    const name = document.getElementById('event-name').value;
    const date = document.getElementById('event-date').value;
    let events = JSON.parse(localStorage.getItem('events')) || [];
    if (id) {
        // Edit existing event
        events = events.map(evt => evt.id === id ? { id, name, date } : evt);
    } else {
        // Add new event
        events.push({ id: Date.now().toString(), name, date });
    }
    localStorage.setItem('events', JSON.stringify(events));
    renderEvents();
    this.reset();
    document.getElementById('event-form').style.display = 'none';
});

// Function to render events from local storage
function renderEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = events.map(event => 
        `<div>
            <p>${event.name} - ${event.date}</p>
            <button onclick="showEventForm(${JSON.stringify(event)})">Edit</button>
            <button onclick="deleteEvent('${event.id}')">Delete</button>
        </div>`
    ).join('');
}

// Function to delete an event from local storage
function deleteEvent(id) {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events = events.filter(event => event.id !== id);
    localStorage.setItem('events', JSON.stringify(events));
    renderEvents();
}

// Function to show the form for adding/editing an announcement
function showAnnouncementForm(announcement = {}) {
    const { id = '', title = '', content = '' } = announcement;
    document.getElementById('announcement-id').value = id;
    document.getElementById('announcement-title').value = title;
    document.getElementById('announcement-content').value = content;
    document.getElementById('announcement-form').style.display = 'block';
}

// Function to save a new announcement to local storage
document.getElementById('announcement-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('announcement-id').value;
    const title = document.getElementById('announcement-title').value;
    const content = document.getElementById('announcement-content').value;
    let announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    if (id) {
        // Edit existing announcement
        announcements = announcements.map(announcement => announcement.id === id ? { id, title, content } : announcement);
    } else {
        // Add new announcement
        announcements.push({ id: Date.now().toString(), title, content });
    }
    localStorage.setItem('announcements', JSON.stringify(announcements));
    renderAnnouncements();
    this.reset();
    document.getElementById('announcement-form').style.display = 'none';
});

// Function to render announcements from local storage
function renderAnnouncements() {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    const announcementsList = document.getElementById('announcements-list');
    announcementsList.innerHTML = announcements.map(announcement => 
        `<div>
            <p>${announcement.title} - ${announcement.content}</p>
            <button onclick="showAnnouncementForm(${JSON.stringify(announcement)})">Edit</button>
            <button onclick="deleteAnnouncement('${announcement.id}')">Delete</button>
        </div>`
    ).join('');
}

// Function to delete an announcement from local storage
function deleteAnnouncement(id) {
    let announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    announcements = announcements.filter(announcement => announcement.id !== id);
    localStorage.setItem('announcements', JSON.stringify(announcements));
    renderAnnouncements();
}
// Function to show participants with events
function showParticipants() {
    const events = JSON.parse(localStorage.getItem('events')) || [];

    let participantsList = 'Participants with Events:\n';
    events.forEach(event => {
        if (event.participants && event.participants.length > 0) {
            participantsList += `\nEvent: ${event.name} - Date: ${event.date}\n`;
            event.participants.forEach(participant => {
                participantsList += `- ${participant.name}\n`;
            });
        }
    });

    alert(participantsList);
}


// Function to handle logout
function logout() {
    console.log('Logging out...');
    
    // Redirect to login page (assuming index.html is your login page)
    window.location.href = 'index.html';
}

// Initial render on page load
document.addEventListener('DOMContentLoaded', function() {
    renderCaptains();
    renderEvents();
    renderAnnouncements();
});
