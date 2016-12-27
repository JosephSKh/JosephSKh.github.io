  var config = {
    databaseURL: "https://rack-17d88.firebaseio.com/"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

$(document).ready(function(){
  firebase.database().ref('/Cards/').once('value').then(function(snapshot) {
  var cardCount = snapshot.val()["Card_1"];

$("#CardsCount").text(cardCount);

});

  });