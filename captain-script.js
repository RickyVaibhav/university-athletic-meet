// Function to show the section by id
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the specified section
    document.getElementById(sectionId).style.display = 'block';
}
function showHome() {
    // Hide all sections except for the home section
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('events-section').style.display = 'none';
    document.getElementById('announcements-section').style.display = 'none';
    document.getElementById('captains-section').style.display = 'none';
}


// Function to fetch and render events from local storage
function fetchEvents() {
    console.log('Fetching events...');
    renderEvents();
    showSection('events-section');
}

// Function to render events
function renderEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventsList = document.getElementById('events-list');
    
    // Clear previous content
    eventsList.innerHTML = '';

    // Render each event with participants
    events.forEach(event => {
        const eventContainer = document.createElement('div');
        eventContainer.classList.add('event-item');
        
        const eventHeader = document.createElement('h3');
        eventHeader.textContent = `${event.name} - ${event.date}`;
        eventContainer.appendChild(eventHeader);
        
        // Render participants
        if (event.participants && event.participants.length > 0) {
            const participantsList = document.createElement('ul');
            event.participants.forEach(participant => {
                const participantItem = document.createElement('li');
                participantItem.textContent = participant.name;
                
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.onclick = () => editParticipant(event.name, participant.name);
                participantItem.appendChild(editButton);
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteParticipant(event.name, participant.name);
                participantItem.appendChild(deleteButton);
                
                participantsList.appendChild(participantItem);
            });
            eventContainer.appendChild(participantsList);
        }
        
        // Add "Add Participant" button
        const addParticipantButton = document.createElement('button');
        addParticipantButton.textContent = 'Add Participant';
        addParticipantButton.onclick = () => addParticipant(event.name);
        eventContainer.appendChild(addParticipantButton);
        
        eventsList.appendChild(eventContainer);
    });
}

// Function to add participant to an event
function addParticipant(eventName) {
    const participantName = prompt('Enter participant name:');
    if (participantName) {
        let events = JSON.parse(localStorage.getItem('events')) || [];
        const eventToUpdate = events.find(event => event.name === eventName);
        if (eventToUpdate) {
            if (!eventToUpdate.participants) {
                eventToUpdate.participants = [];
            }
            eventToUpdate.participants.push({ name: participantName });
            localStorage.setItem('events', JSON.stringify(events));
            renderEvents();
        } else {
            alert(`Event "${eventName}" not found.`);
        }
    } else {
        alert('Participant name cannot be empty.');
    }
}

// Function to edit participant in an event
function editParticipant(eventName, participantName) {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventToUpdate = events.find(event => event.name === eventName);
    if (eventToUpdate) {
        const participantToUpdate = eventToUpdate.participants.find(participant => participant.name === participantName);
        if (participantToUpdate) {
            const updatedName = prompt(`Enter new name for participant "${participantName}":`);
            if (updatedName) {
                participantToUpdate.name = updatedName;
                localStorage.setItem('events', JSON.stringify(events));
                renderEvents();
            }
        } else {
            alert(`Participant "${participantName}" not found.`);
        }
    } else {
        alert(`Event "${eventName}" not found.`);
    }
}

// Function to delete participant from an event
function deleteParticipant(eventName, participantName) {
    if (confirm(`Are you sure you want to delete participant "${participantName}" from event "${eventName}"?`)) {
        let events = JSON.parse(localStorage.getItem('events')) || [];
        const eventToUpdate = events.find(event => event.name === eventName);
        if (eventToUpdate) {
            eventToUpdate.participants = eventToUpdate.participants.filter(participant => participant.name !== participantName);
            localStorage.setItem('events', JSON.stringify(events));
            renderEvents();
        } else {
            alert(`Event "${eventName}" not found.`);
        }
    }
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
    announcementsList.innerHTML = announcements.map(announcement => `<p>${announcement.title} - ${announcement.content}</p>`).join('');
}

// Function to fetch and render captains from local storage
function fetchCaptains() {
    console.log('Fetching captains...');
    renderCaptains();
    showSection('captains-section');
}

// Function to render captains
function renderCaptains() {
    const captains = JSON.parse(localStorage.getItem('captains')) || [];
    const captainsList = document.getElementById('captains-list');
    captainsList.innerHTML = captains.map(captain => `<p>${captain.name} - ${captain.hostel}</p>`).join('');
}

// Function to handle editing a captain
function editCaptain(captainName) {
    const captains = JSON.parse(localStorage.getItem('captains')) || [];
    const updatedName = prompt(`Enter new name for captain "${captainName}":`);
    if (updatedName) {
        const captainToUpdate = captains.find(captain => captain.name === captainName);
        if (captainToUpdate) {
            captainToUpdate.name = updatedName;
            localStorage.setItem('captains', JSON.stringify(captains));
            renderCaptains();
        } else {
            alert(`Captain "${captainName}" not found.`);
        }
    }
}

// Function to handle deleting a captain
function deleteCaptain(captainName) {
    if (confirm(`Are you sure you want to delete captain "${captainName}"?`)) {
        let captains = JSON.parse(localStorage.getItem('captains')) || [];
        captains = captains.filter(captain => captain.name !== captainName);
        localStorage.setItem('captains', JSON.stringify(captains));
        renderCaptains();
    }
}

// Initial render on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, rendering initial data...');
    fetchEvents();
    fetchAnnouncements();
    fetchCaptains();
});

// Function to handle logout
function logout() {
    console.log('Logging out...');
    // Redirect to login page (assuming index.html is your login page)
    window.location.href = 'index.html';
}
