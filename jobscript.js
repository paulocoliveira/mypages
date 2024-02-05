document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').textContent = 'Submission successful!';
});
