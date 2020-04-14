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

module.exports = Park;
