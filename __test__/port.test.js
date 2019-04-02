const Port = require('../src/port');


describe('Port', () => {
  let port 
  beforeEach(() => {
    port = new Port ('Dover');
  });
  it('returns Port object', () => {
    expect(new Port()).toBeInstanceOf(Object) 
  });
  it('set name property for port', () => {
    expect(port.name).toBe('Dover')
  })
  it('adds a ship to port', () => {
    const storeShip = {}
    port.addShip(storeShip)
    expect(port.ships).toContain(storeShip)
  })
  it('removes a ship from port', () => {
    const oasis = jest.fn()
    const titanic = jest.fn()
    //const ship = {name: 'ship 0'}
    //const ship1 = {name:'ship 1'}

    port.addShip(oasis);
    port.addShip(titanic)
    port.removeShip(titanic)
    expect(port.ships).toEqual([oasis])
  })
});
