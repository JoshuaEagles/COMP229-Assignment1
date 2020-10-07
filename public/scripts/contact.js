/* contact.js - Joshua Eagles - 301078033 - 2020-10-07 */

let submitButton = document.getElementById("submit");

// Adds an event listener for the submit button that will print the form to the console and then redirect to the home page
submitButton.addEventListener("click", (event) => 
{
	event.preventDefault();

	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let contactNumber = document.getElementById("contactNumber").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;

	console.log("First Name: ", firstName);
	console.log("Last Name: ", lastName);
	console.log("Contact Number: ", contactNumber);
	console.log("Email: ", email);
	console.log("Message: ", message);

	window.location.href="/home";
});
