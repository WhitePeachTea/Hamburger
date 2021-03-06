// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourButton").on("click", function(event) {
    console.log(event.target);

      // Send the PUT request.
      $.ajax("/api/burgers/"+event.target.value,{
        type: "PUT",
      }).then(
        function() {
          $(`.${event.target.className}`).remove();
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerName").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
    // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  