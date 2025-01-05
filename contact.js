const firebaseConfig = {
    apiKey: "AIzaSyBhLdP5xOK-Un2Jzq7cASfWdh7EVM-CWF4",
    authDomain: "contactform-connectlocal.firebaseapp.com",
    databaseURL: "https://contactform-connectlocal-default-rtdb.firebaseio.com",
    projectId: "contactform-connectlocal",
    storageBucket: "contactform-connectlocal.appspot.com",
    messagingSenderId: "992382628098",
    appId: "1:992382628098:web:9c75a41cbb5b229467d21b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the contact form database
var contactFormDB = firebase.database().ref('contactForm');

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var firstname = getElementVal('firstname');
    var lastname = getElementVal('lastname');
    var emailInfo = getElementVal('emailInfo');
    var PhoneNumber = getElementVal('PhoneNumber');
    var Comments = getElementVal('Comments');

    // Save message and show success toast
    saveMessages(firstname, lastname, emailInfo, PhoneNumber, Comments);
    showToast('successToast');

    // Reset the form
    document.getElementById('contactForm').reset();

    // Redirect to index.html after 5 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 5000);
}

const saveMessages = (firstname, lastname, emailInfo, PhoneNumber, Comments) => {
    // Generate a new unique key and create a new entry
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        FirstName: firstname,
        LastName: lastname,
        EmailId: emailInfo,
        PhoneNumber: PhoneNumber,
        Comments: Comments,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const showToast = (id) => {
    const toast = document.getElementById(id);
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
