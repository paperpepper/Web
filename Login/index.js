document.addEventListener('DOMContentLoaded', function() {
    const your_username="admin";
    const your_password="123";
    const form = document.querySelector('form');
    const signUpForm = document.querySelector('form');
    const signUpButton = signUpForm.querySelector('button');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const username = document.getElementById('input').value;
        const password = document.getElementById('password').value;
        
        
        if (username === your_username && password === your_password) {
            alert('Login successful!');
            location.replace("resume.html")
           
        } else {
            alert('Invalid username or password. Please try again.');
           
        }
    });
    
    
});
