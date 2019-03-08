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
   
});
