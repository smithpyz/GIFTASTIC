

$("button").on("click", function() {
    var cartoon = $(this).attr("data-cartoon");

    // var topics = ['my-little-pony', 'casper', 'yogi-bear'];
    // console.log(0);
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=sQJ9QXwFofx9uPc5ddV0AA7qpJejXuEX&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
        .then(function(response) {
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

              if (results[i].data-state === "_s")
  
              // Creating and storing a div tag
              var cartoonDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + topics[i].rating);

              // Creating and storing an image tag
              var cartoonImage = $("<img>");

              // Setting the src attribute of the image to a property pulled off the result item
              cartoonImage.attr("src", topics[i].images.fixed_height.url);
              cartoonImage.attr
              //***!!!!HERE still attribute here!!!!**************/
  
              // Appending the paragraph and image tag to the animalDiv
              cartoonDiv.append(p);
              cartoonDiv.append(cartoonImage);
              // Prependng the cartoon to the HTML page in the "#gifs-appear-here" div
              $("#gifs-appear-here").prepend(cartoonDiv);
            }
          })
        });

  //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  //   cartoon + "&api_key=z4Itbe0XPPUfhw2YvtL9igMQ1jQIT1Na&limit=10";
  //       $.ajax({
  //           url: queryURL,
  //           method: "GET"
  //         })
  //           // After data comes back from the request
  //         .then(function(response) {
  //             console.log(queryURL);
    
  //             console.log(response);
    
  //               var state = $(this).attr("data-state");
  //                 if (state === "still") {
  //                   $(this).attr("src", $("cartoonImage").attr("data-animate"));
  //                   $(this).attr("data-state", "animate");
  //                   $(this).html("<img>");
  //                 } else {
  //                   $(this).attr("src", $("cartoonImage").attr("data-still"));
  //                   $(this).attr("data-state", "still");
  //                   $(this).html("<img>");
  //                 }
  //               });
  //             }