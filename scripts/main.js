
document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.innerText = 'Toggle Dark Mode';
    themeToggleBtn.id = 'theme-toggle';
    
    // Style the button dynamically
    themeToggleBtn.style.position = 'fixed';
    themeToggleBtn.style.bottom = '20px';
    themeToggleBtn.style.right = '20px';
    themeToggleBtn.style.padding = '10px 15px';
    themeToggleBtn.style.backgroundColor = 'var(--accent-color)';
    themeToggleBtn.style.color = '#fff';
    themeToggleBtn.style.border = 'none';
    themeToggleBtn.style.borderRadius = '5px';
    themeToggleBtn.style.cursor = 'pointer';
    themeToggleBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    themeToggleBtn.style.zIndex = '1000';
    themeToggleBtn.style.transition = 'background-color 0.3s ease';

    document.body.appendChild(themeToggleBtn);

    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        
        document.documentElement.style.setProperty('--background-color', '#1a1a2e');
        document.documentElement.style.setProperty('--surface-color', '#16213e');
        document.documentElement.style.setProperty('--text-color', '#e9ecef');
        document.documentElement.style.setProperty('--text-light', '#ced4da');
        document.documentElement.style.setProperty('--primary-color', '#e9ecef');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        
        // Revert to original CSS variables
        document.documentElement.style.setProperty('--background-color', '#f8f9fa');
        document.documentElement.style.setProperty('--surface-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#333333');
        document.documentElement.style.setProperty('--text-light', '#555555');
        document.documentElement.style.setProperty('--primary-color', '#2b2d42');
    }
});