// KISIOS The Killer
var move = function(gameData, helpers) {
   var KISIOS = gameData.activeHero;

   // Need hp to survive two blows
   if (KISIOS.health < 50) {
     return helpers.findNearestHealthWell(gameData);
   
   // Attack whoever is near
   } else if (helpers.findNearestEnemy(gameData)) {
     return helpers.findNearestEnemy(gameData);

   // Go get diamonds if everyone is dead
   } else {
    return helpers.findNearestNonTeamDiamondMine(gameData);
   }
};

module.exports = move;


cat names.table | awk '{ if ( NR > 1  ) print $1 " " $2 " " $7}'
cat names.table | tail -2 | awk 'if ( NR > 1  ){print $1 " " $2 " " $7}'
cat names.table | sed "1 d" | awk '{print $1 " " $2 " " $7}'