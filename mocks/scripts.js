document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('user-list');
        data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `<strong>${user.name} ${user.surname}</strong><p>Birth: ${user.birthdate}</p><p>City: ${user.city}</p>`;
            userList.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error loading user data:', error));
});
