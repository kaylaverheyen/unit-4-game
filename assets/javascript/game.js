//global variables
var wins = 0;
var losses = 0;
var totalScore = 0;

//random number function for the random number, define variable 

$(document).ready(function () {
  var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
  console.log(randomNumber);
  $("#random-number").text("RANDOM NUMBER:" + " " + randomNumber);

  //gems or crystals


  //need to make the crystals a random number !!
  var crystalsPoints = [4, 6, 7, 9];

  for (var i = 0; i < crystalsPoints.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystalRuby = $("<img>");
    var imageCrystalEmerald = $("<img>");
    var imageCrystalCarnary = $("<img>");
    var imageCrystalDiamond = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystalRuby.addClass("crystal-image");
    imageCrystalEmerald.addClass("crystal-image");
    imageCrystalCarnary.addClass("crystal-image");
    imageCrystalDiamond.addClass("crystal-image");


    // Each imageCrystal will be given a src link to the crystal image
    imageCrystalRuby.attr("src", "./assets/images/gemstone-143303-ruby-oval-red-62043.jpg");
    imageCrystalEmerald.attr("src", "./assets/images/in-detail-gemstone-emerald-06-740x493.jpg");
    imageCrystalCarnary.attr("src", "./assets/images/loose-yellow-diamonds-fancy-yellow-diamond-ring-canary-yellow-diamond-fancy-vivid.jpg");
    imageCrystalDiamond.attr("src", "./assets/images/Round-cut-diamond.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystalRuby.attr("data-crystalvalue", crystalsPoints[0]);
    imageCrystalEmerald.attr("data-crystalvalue", crystalsPoints[1]);
    imageCrystalCarnary.attr("data-crystalvalue", crystalsPoints[2]);
    imageCrystalDiamond.attr("data-crystalvalue", crystalsPoints[3]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals1").html(imageCrystalRuby);
    $("#crystals2").html(imageCrystalEmerald);
    $("#crystals3").html(imageCrystalCarnary);
    $("#crystals4").html(imageCrystalDiamond);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    totalScore += crystalValue;
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.


    $("#u_score").text(totalScore);
    //alert("New score: " + totalScore);

    if (totalScore === randomNumber) {
      wins++;
      $("#win").text(wins);
      $("#u_score").text("");
      //alert("You win!");
    }

    if (totalScore > randomNumber) {
      losses++;
      $("#loss").text(losses);
      $("#u_score").text("");
      //alert("You lose!!");
    }

  });

});



//game function ie adding crystals equating to random number

    //update total score or (user score)
    //if total score is equal to random number RETURN WINNER
        //update wins counter ie wins++
        //picture of treasure chest appears on click event
    //if else score is more than > random number RETURN NOT QUITE RIGHT, KEEP TRYING!
        //update losses counter ie losses++
        //picture of X out treasure chest appears

//reset function 
    //update new random number
    //keep track of wins and losses


