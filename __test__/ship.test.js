const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Cruise Ship', () => {  
let ship 
let port
  beforeEach(() => {
    port = new Port('Dover')
    ship = new Ship (port);
})    

  it('returns a cruise ship object', ()=> {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('name of starting port', ()=> {
    expect(ship.currentPort).toBe(port);
  });

  it('can set sail', () => {
    ship.setSail();
    
    expect(ship.currentPort).toBeFalsy();
  });
  it('ship can dock at a diff port', ()=> {
    const whitby = new Port('Whitby')
    ship.dock(whitby);
    expect(ship.currentPort).toBe(whitby)
  });
});
