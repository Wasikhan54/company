function showContent(contentClass) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    
    // Show the selected content
    const activeContent = document.querySelector(`.${contentClass}`);
    if (activeContent) {
        activeContent.style.display = 'block';
    }
    
    // Remove 'active' class from all links
    const links = document.querySelectorAll('.list li a');
    links.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    const activeLink = document.querySelector(`.list li a[onclick="showContent('${contentClass}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
window.onload = () => {
    showContent('logo');
};
