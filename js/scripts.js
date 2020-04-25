$(document).ready(function() {
  $("#booking").submit(function(event) {
    event.preventDefault();

    // VARIABLES TO HOLD USER INPUT
    let nameInput = $("#name").val();
    let descriptionInput = $("#description").val();
    let dateInput = $("#date").val();
    let startInput = $("#start").val();
    let endInput = $("#end").val();

    // INSERT USER INPUT INTO CONFIRMATION
    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $(".confirmation").show();
    $("#booking").hide();

  });
});