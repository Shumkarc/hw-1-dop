document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращаем отправку формы

    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Регулярное выражение для проверки email
    const emailRegex = /\w+@+\w+\.+\w+/;

    if (emailRegex.test(email)) {
        errorMessage.textContent = '';
        alert('Email is valid');
    } else {
        errorMessage.textContent = 'Invalid email format. Please check your email and try again.';
    }
});