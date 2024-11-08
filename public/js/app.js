document.getElementById('registration-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    const user = { username, email, phone };
    
    // Send POST request to add the user
    const response = await fetch('http://localhost:3000/api/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    
    const result = await response.json();
    alert(result.message);
});
