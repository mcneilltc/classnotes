/*
the output for the sheep:
BaaBaa BlackSheep have you any wool"
yes sir, yes sir 3 bags full
one for my master
one for my dame
one for the little boy that lives down the lane
*/

var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
  ];
  
  var boy = Object.keys(woolOwners[2]);
  var littleBoy = boy[0];
  
  var whereHeLives = woolOwners[2].location;

  
  var haveYouAnyWool = function() {
      for (var i = 0; i < woolOwners.length; i++) {
      var totalBags = totalBags + i;
      }
      return (i);
  };
  var bags = haveYouAnyWool();
  
  function baabaaBlackSheep() {
      console.log("BaaBaa BlackSheep have you any wool?");
      if (bags > 0) {
          console.log("yes sir, yes sir " + bags + " bags full");
    }
  }
  baabaaBlackSheep();

  function oneForMy() {
      for (var i = 0; i < 2; i++) {
          person = Object.keys(woolOwners);
          //var person = people.toString();
          console.log("one for my " + person);
      }
  }
  oneForMy();
  
  console.log("one for the " + "little boy" + " that lives " + whereHeLives);