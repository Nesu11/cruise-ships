 function Port(name) {
  this.name = name;
  this.ships = [];
};
Port.prototype.addShip = function (shipArrival) {
this.ships.push(shipArrival)
};

Port.prototype.removeShip = function (shipDeparture) {
const portIndex = this.ships.indexOf(shipDeparture)
 this.ships.splice(portIndex, 1); //1- delete count
}
module.exports = Port;
