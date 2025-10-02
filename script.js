
const userContainer = document.getElementById('user-container');
const reloadBtn = document.getElementById('reload-btn');
const errorMessage = document.getElementById('error-message');

function displayUsers(users) {
    userContainer.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.zipcode})</p>
        `;
        userContainer.appendChild(card);
    });
}

function fetchUsers() {
    userContainer.innerHTML = '';
    errorMessage.textContent = 'Loading...';
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(users => {
            displayUsers(users);
            errorMessage.textContent = '';
        })
        .catch(error => {
            errorMessage.textContent = 'Failed to fetch user data. ' + error.message;
        });
}

// Initial fetch
fetchUsers();

// Reload button event
reloadBtn.addEventListener('click', fetchUsers);
