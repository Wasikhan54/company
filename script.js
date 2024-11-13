function showContent(contentClass) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    
    // Show the selected content
    const activeContent = document.querySelector(`.${contentClass}`);
    if (activeContent) {
        activeContent.style.display = 'block';
    }
}
