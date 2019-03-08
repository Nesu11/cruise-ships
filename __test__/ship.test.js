const Ship = require('../src/ship');

describe('Cruise Ship', () => {  
let cruiseShip 

  beforeEach(() => {
    cruiseShip = new Ship ('Oasis');
    }) 
       

  it('returns a cruise ship object', ()=> {
   

    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('name of starting port', ()=> {
 
    expect(this.startingPort).toBe('Dover')
  })
});
