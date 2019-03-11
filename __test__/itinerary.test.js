const Itinerary = require('../src/itinerary')

describe('itinerary', () => {  
    /*let itinerary
      beforeEach(() => {
        itinerary = new Itinerary (ports)
  })
  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object) 
          }); */
    it('can have ports property', () => {
        const dover = jest.fn()
        const hull = jest.fn()
        const itinerary = new Itinerary([dover, hull])

        expect(itinerary.ports).toEqual([dover, hull])
    });
    })    