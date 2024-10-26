
 const firebaseConfig = {
    apiKey: "AIzaSyBsRejFphzn6wOS4SX-w3sso7T34kkbnTk",
    authDomain: "portfolio-pardhu.firebaseapp.com",
    databaseURL: "https://portfolio-pardhu-default-rtdb.firebaseio.com",
    projectId: "portfolio-pardhu",
    storageBucket: "portfolio-pardhu.appspot.com",
    messagingSenderId: "500230517097",
    appId: "1:500230517097:web:78b8557b2f1e4fd6894df8"
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

