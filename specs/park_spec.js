const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park

  beforeEach(function () {
    park = new Park('Isla', 50, [])
    blue = new Dinosaur('velociraptor', 'carnivore', 60)
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

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(roberta);
    park.addDinosaur(blue);
    park.removeDinosaur(blue);
    const expected = [roberta]
    const actual = park.collection;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(blue);
    park.addDinosaur(roberta);
    const actual = park.popular();
    assert.strictEqual(actual, blue)
  });


  xit('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(blue);
    const actual = dinosaur.species;
    const expected = ['velociraptor']
    assert.strictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(blue);
    park.addDinosaur(roberta);
    const actual = park.vistors();
    assert.strictEqual(actual, 110)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(blue);
    park.addDinosaur(roberta);
    const actual = park.yearly();
    assert.strictEqual(actual, 40150)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(blue);
    park.addDinosaur(roberta);
    const actual = park.revenue();
    assert.strictEqual(actual, 2007500)
  });

});
