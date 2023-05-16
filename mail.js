const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyAa0hgICSz5Hems46YLrxMNv93H-edoKvM",
  authDomain: "nivashini-assisted-care-cd232.firebaseapp.com",
  databaseURL:"https://nivashini-assisted-care-cd232-default-rtdb.firebaseio.com",
  projectId: "nivashini-assisted-care-cd232",
  storageBucket: "nivashini-assisted-care-cd232.appspot.com",
  messagingSenderId: "342905952378",
  appId: "1:342905952378:web:b640e9d468198134b603c3",
};

// initialize firebase
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("contact-your-name-5");
  var emailid = getElementVal("contact-email-5");
  var msgContent = getElementVal("contact-message-5");
  var ourservices = getElementVal("Select");
  var phone = getElementVal("contact-phone-5");
  // var msgContent = getElementVal("Select");
  var date = new Date();
  var Month=date.getMonth() + 1
  var dateset = date.getDate()+'-'+Month+'-'+date.getFullYear();

  saveMessages(name, emailid, msgContent,ourservices,phone,dateset);

  //   enable alert
//   document.querySelector(".alert").style.display = "block";

  //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent,ourservices,phone,dateIN) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    oursServices:ourservices,
    phone:phone,
    date:dateIN,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
