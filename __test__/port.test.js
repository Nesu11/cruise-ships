const Port = require('../src/port');


describe('Port', () => {
  let port 
  beforeEach(() => {
    port = new Port ('Dover');
  });
  xit('returns Port object', () => {
    expect(new Port()).toBeInstanceOf(Object) 
  });
  xit('set name property for port', () => {
    expect(port.name).toBe('Dover')
  })
  xit('adds a ship to port', () => {
    const storeShip = {}
    port.addShip(storeShip)
    expect(port.ships).toContain(storeShip)
  })
  xit('removes a ship from port', () => {
    const oasis = jest.fn()
    const titanic = jest.fn()

    port.addShip(oasis);
    port.addShip(titanic)
    port.removeShip(titanic)
    expect(port.ships).toEqual([oasis])
  })
});
