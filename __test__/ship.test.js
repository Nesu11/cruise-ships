const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary')

describe('Cruise Ship', () => {  
let ship
let dover
let hull 
let itinerary
  beforeEach(() => {
    dover = new Port('Dover')
    hull = new Port('Hull')
    itinerary = new Itinerary([dover, hull])
    ship = new Ship (itinerary);
  
})    

  it('returns a cruise ship object', ()=> {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('name of starting port', ()=> {
    expect(ship.currentPort).toBe(dover);
  });

  it('can set sail', () => {
    ship.setSail();
     expect(ship.currentPort).toBeFalsy();
     expect(dover.ships).not.toContain(ship);
  });
  it('ship can dock at a diff port', ()=> {
    //const whitby = new Port('Whitby')

    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(hull)
    expect(hull.ships).toContain(ship);
  });
  xit('gets added to port on instantiation', ()=> {
  
    expect(hull.ships).toContain(ship)
  })

});
