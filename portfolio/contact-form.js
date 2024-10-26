const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  };
//init
  firebase.initializeApp(firebaseConfig);
//referance object
  var contactFormDB = firebase.database().ref("contactForm");
//calling submitform function on submitting form
  document.getElementById('contactform').addEventListener("submit",submitform);
//function submitform
function submitform(e){
    e.preventDefault();
  var name = GetEleId("name");
  var email = GetEleId("email");
  var msg = GetEleId("message");
  
  savdat(name,email,msg);
  document.querySelector('.alert').style.display = 'block'
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none'
  },3000);
  document.getElementById("contactform").reset();
}
//method for pushing data.
const savdat =(name,email,msg)=>{
    var datcontactform = contactFormDB.push();

    datcontactform.set({
        name: name,
        email: email,
        mssg: msg
    })
}
//method for extratcing data from form.
const GetEleId =(id) =>{
    return document.getElementById(id).value;
};

