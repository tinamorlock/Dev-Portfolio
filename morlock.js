const sectionSelect = document.getElementById('section-select');
const contentSections = document.querySelectorAll('.content-section');

sectionSelect.addEventListener('change', function() {
    const selectedSection = this.value;

    // Hide all sections
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(selectedSection).style.display = 'block';
});
