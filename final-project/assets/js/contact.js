function sendEmail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_5a6713k", "template_jw7dsha", params).then(alert("Email Sent"));

};