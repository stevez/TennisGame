var assert = require("chai").assert;
var TennisGame = require("../src/TennisGame");

describe('Tennis Score', function() {
    
     var tests = [
      [0, 0, "Love-All"],
  ];  
  
    
   function checkScore(pointPlayer1,pointPlayer2) {
      var game = new TennisGame("player1","player2");  
      updateScore(game,"player1", pointPlayer1);
      updateScore(game,"player2", pointPlayer2);
      
      return game.getScore();
      
   }
   
   function updateScore(game,name,point) {
       for(var i=0; i<point; i++) {
           game.wonPoint(name);
       }
       
      
   }
   
   tests.forEach(function(test) {
    it(test[0] + ':' + test[1] + '-> ' + test[2], function() {
      var result = checkScore(test[0], test[1]);
      assert.equal(result, test[2]);
    });
  });
  
});