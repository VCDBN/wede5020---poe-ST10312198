//function to validate the form

//the event function is what allows user input interactions

 

function validateform (event){

    event.preventDefault();

    //this does not allow the form to be submitted without data}

 

//fetch form values

var name = document.getElementById('name').value;

var email = document.getElementById('email').value;

 

//clearing previous errors

document.getElementById('nameError').textContent = '';

document.getElementById('emailError').textContent = '';

 

//Validating name field

if (name ==='') {

    document.getElementById('nameError').textContent = 'Please enter your name';

    return;

 

}

 

//validating email field

if (email ==='') {

    document.getElementById('emailError').textContent = 'Please enter your email'

return;

}

 

//Display success message

alert('Form submitted successfully!');

 

}

 

var form = document.getElementById('regForm');

form.addEventListener('submit',validateform);