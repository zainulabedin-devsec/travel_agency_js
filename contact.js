document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Display confirmation with contact info
  var confirmationDiv = document.getElementById("confirmation");
  confirmationDiv.style.display = "block";
  confirmationDiv.style.backgroundColor = "black";
  confirmationDiv.style.color = "white";
  confirmationDiv.style.padding = "20px";
  confirmationDiv.style.border = "2px solid white";
  confirmationDiv.style.borderRadius = "10px";
  confirmationDiv.style.maxWidth = "600px";
  confirmationDiv.style.margin = "20px auto";
  confirmationDiv.style.fontFamily = "Arial, sans-serif";
  confirmationDiv.className = "confirmation-box show";
  confirmationDiv.innerHTML = `
  <h3>Message Sent Successfully ✅</h3>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong> ${message}</p>
`;

  // Reset the form
  document.getElementById("form").reset();
    setTimeout(() => {
    confirmationDiv.classList.remove("show");
  }, 5000);
});
document.querySelector('.sendbtn').addEventListener('click', ()=> {
    alert('Thank you for contacting us! we will contact you soon.');
});