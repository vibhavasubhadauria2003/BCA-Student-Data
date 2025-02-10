async function sendStudentName(fullname) {
    try {
        const response = await fetch('http://localhost:7000/users/user-reseve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: fullname })
        });

        const data = await response.json();
        console.log('Response from server:', data);
    } catch (error) {
        console.error('Error sending student name:', error);
    }
}

let qu=document.querySelectorAll(".student-name");

qu.forEach(element => {
    element.addEventListener("click", function (event) {
        sendStudentName(element.textContent);
        event.preventDefault(); // Prevent immediate navigation
        console.log("Redirecting in 3 seconds...");
    
        setTimeout(() => {
            window.location.href = this.href; // Navigate after timeout
        }, 900); // 3-second delay
    });
});

document.getElementById("delayed-link").addEventListener("click", );



