class Car {
  constructor({maxSpeed, price}) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    return console.log(
      `Max Speed: ${car.maxSpeed}, Speed: ${car.speed}, Is On: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price += newPrice);
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      return (this.speed += value);
    }
    
  }
  
  decelerate(value) {
    if (this.speed - value >= 0) {
      return this.speed -= value;
    } else {
      return this.speed = 0
    }
  }

  drive(hours) {
    if (this.isOn === true) {
     return this.distance += hours * this.speed
    }
 }
}

const mustang = new Car({maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.decelerate(25)
mustang.drive(3)
mustang.price = 100
console.log(mustang.price);

Car.getSpecs(mustang);
