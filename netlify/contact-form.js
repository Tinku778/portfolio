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
