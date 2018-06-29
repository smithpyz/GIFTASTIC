$("button").on("click", function () {
  var cartoon = $(this).attr("data-cartoon");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=rIYK5Y4MKI1TsOBYJXrTGq5eJ02wqkOw&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(queryURL);
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var pOne = $("<p>").text("Rating: " + results[i].rating);
        var cartoonImage = $("<img>");
        cartoonImage.attr("src", results[i].images.fixed_height_still.url);


        gifDiv.append(pOne);
        gifDiv.append(cartoonImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});
$("#add-cartoon").on("click", function (event) {
  event.preventDefault();

  var cartoon = $("#cartoon-input").val().trim();

  cartoons.push(cartoon);

  renderButtons();
});

$(document).on("click", ".cartoon-btn", displayCartoonInfo);

renderButtons();