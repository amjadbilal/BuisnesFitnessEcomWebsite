document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const moreContent = document.querySelectorAll('.more-content');

    toggleButton.addEventListener('click', () => {
        moreContent.forEach(content => {
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                toggleButton.textContent = 'Show Less';
            } else {
                content.style.display = 'none';
                toggleButton.textContent = 'Show More';
            }
        });
    });
});
