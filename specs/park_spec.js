const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park

  beforeEach(function () {
    park = new Park('Isla', 50, [])
    roberta = new Dinosaur('t-rex', 'carnivore', 50);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Isla');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(roberta);
    const actual = park.dinosaurs();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
