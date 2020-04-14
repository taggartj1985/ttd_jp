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
  const indexOfDinosaur = this.collection.indexOf(dinosaur)
  this.collection.splice(indexOfDinosaur, 1);
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

Park.prototype.vistors = function(){
  total = 0
  for (dinosaur of this.collection){
    total += dinosaur.guestsAttractedPerDay
  }
  return total
};

Park.prototype.yearly = function(){
  return this.vistors() * 365;
};

Park.prototype.revenue = function(){
  return this.yearly() * this.price;
}


module.exports = Park;
