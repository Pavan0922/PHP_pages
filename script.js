$(document).ready(function () {
  $("#registrationForm").on("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const formData = $(this).serialize();

    // Send data to PHP using AJAX
    $.post("php/submit.php", formData, function (response) {
      $("#successMessage").html(response).fadeIn(); // Display response
      $("#registrationForm")[0].reset(); // Reset form
    });
  });
});
