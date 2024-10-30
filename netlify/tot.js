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
document.getElementById('contactform').addEventListener("submit", submitForm);

async function submitForm(e) {
        document.querySelector('.alert').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        }, 3000);
        
        document.getElementById("contactform").reset();
    } catch (error) {
        console.error("Error:", error);
    }
}

const GetEleId = (id) => document.getElementById(id).value;
