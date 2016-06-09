var assert = require("chai").assert;
var TennisGame = require("../src/TennisGame");


describe('Test tennis game score', function () {
    var game;
    
    beforeEach(function() {
        game = new TennisGame("player1","player2");  
    });
        
    it('should be Love-All when 0:0', function () {
         assert.equal( game.getScore(),"Love-All");
    });
    
    
});


    



    
