document.getElementById('contactform').addEventListener("submit", submitForm);

async function submitForm(e) {
    e.preventDefault();
    
    const name = GetEleId("name");
    const email = GetEleId("email");
    const message = GetEleId("message");

    try {
        const response = await fetch("/.netlify/functions/contactFormHandler", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });
        
        const result = await response.json();
        console.log(result.message);
        
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
