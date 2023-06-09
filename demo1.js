// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);
        
        var name = nameInput.value;
        var email = emailInput.value;

        // // Store the user details in localStorage
        // localStorage.setItem('name', name);
        // localStorage.setItem('email', email);


        // Create an object to store the user details
        var userDetails = {
            name: name,
            email: email
        };

        // Store the user details with the unique key in localStorage
        localStorage.setItem('user', JSON.stringify(userDetails));
        
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}