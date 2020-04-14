const Park = function (name, price, collection){
  this.name = name;
  this.price = price;
  this.collection = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.collection.push(dinosaur);
};

Park.prototype.dinosaurs = function () {
  return this.collection.length;
};

Park.prototype.removeDinosaur = function(dinosaur) {
  this.collection.splice(dinosaur);
};

Park.prototype.popular = function (){
  let mostPopular = 0;
  for ( dinosaur of this.collection){
  if (dinosaur.guestsAttractedPerDay >= mostPopular || dinosaur.guestsAttractedPerDay >=
    mostPopular.guestsAttractedPerDay){
      mostPopular = dinosaur
    }
  }
  return mostPopular
};

module.exports = Park;
