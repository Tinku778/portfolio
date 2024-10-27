const toggle = document.getElementById('darkModeToggle');
        const icon = document.getElementById('icon');
        
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Toggle the icon between sun and moon
            if (icon.classList.contains('bi-sunrise')) {
                icon.classList.remove('bi-sunrise');
                icon.classList.add('bi-moon');
                icon.style.color = '#0d6efd'; // Optional: Change icon color in dark mode
            } else {
                icon.classList.remove('bi-moon');
                icon.classList.add('bi-sunrise');
                icon.style.color = 'white'; // Optional: Change icon color in light mode
            }
        });