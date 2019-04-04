/* eslint-disable func-names */
(function exportController() {
  function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();

    document.querySelector('#sailButton').addEventListener('click', () => {
      this.setSail();
    });
  }

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = [

      './images/water0.png',

      './images/water1.png',

    ];

    let backgroundIndex = 0;

    window.setInterval(() => {
      document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
      backgroundIndex += 1;
    }, 1000);
  };




  Controller.prototype.renderPorts = function (ports)

  {
    const portsElement = document.querySelector('#port');
    portsElement.style.width = '0px';



    ports.forEach((port, index) => {
      const newPortElement = document.createElement('div');

      newPortElement.className = 'port';
      newPortElement.dataset.className = port.name;
      newPortElement.dataset.portIndex = index;

      portsElement.appendChild(newPortElement);

      const portsElementWidth = parseInt(portsElement.style.width,10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    });
  };



  Controller.prototype.renderShip = function () {
    const ship = this.ship;

    const shipPortIndex = ship.itinerary.ports.IndexOf(ship.CurrentPort);

    const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

    const shipElement = document.querySelector('#ship');

    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;
  };



  Controller.prototype.setSail = function () {
    const ship = this.ship

    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);

    const nextPortIndex = currentPortIndex + 1
    
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
    
    const shipElement = document.querySelector('#ship');
    
    if (!nextPortElement) {

        return alert('End of the line!');
    }

    

    const sailInterval = setInterval(() => {

      const shipLeft = parseInt(shipElement.style.left, 10);

      if (shipLeft === (nextPortElement.offsetLeft - 32)) {

        ship.dock();

        clearInterval(sailInterval);
      };

      shipElement.style.left = `${shipLeft + 1}px`;

    }, 20);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  };
}());
