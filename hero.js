// Kisios
var move = function(gameData, helpers) {
  var myHero = gameData.activeHero;

  console.log(gameData)

  var healthWellStats = helpers.findNearestObjectDirectionAndDistance(gameData.board, myHero, function(boardTile) {
    if (boardTile.type === 'HealthWell') {
      return true;
    }
  });
  var distanceToHealthWell = healthWellStats.distance;
  var directionToHealthWell = healthWellStats.direction;
  

  if (myHero.health < 60) {
    return helpers.findNearestHealthWell(gameData);
  } else if (myHero.health < 80 && distanceToHealthWell === 1) {
    return helpers.findNearestHealthWell(gameData);
  } else if (helpers.findNearestWeakerEnemy(gameData)) {    
    return helpers.findNearestWeakerEnemy(gameData);
  } else {
    return helpers.findNearestUnownedDiamondMine(gameData);
  }
};

module.exports = move;
