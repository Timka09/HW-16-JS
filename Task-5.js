class Car {
  constructor(settings) {
    this.carMaxSpeed = settings.maxSpeed;
    this.carSpeed = settings.speed;
    this.carIsOn = settings.isOn;
    this.carDistance = settings.distance;
    this.carPrice = settings.price;
  }

  static getSpecs(car) {
    return console.log(
      `Max Speed: ${car.carMaxSpeed}, Speed: ${car.carSpeed}, Is On: ${car.carIsOn}, Distance: ${car.carDistance}, Price: ${car.carPrice}`
    );
  }

  get price() {
    return this.carPrice;
  }

  set price(newPrice) {
    return (this.carPrice += newPrice);
  }

  turnOn() {
    return (this.carIsOn = true);
  }

  turnOff() {
    return (this.carIsOn = false), (this.carSpeed = 0);
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if ((this.carSpeed + value <= this.carMaxSpeed)) {
      return this.carSpeed += value
    } else {
      return this.carSpeed = this.carMaxSpeed
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {}

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {}
}

const settings = new Car({
  maxSpeed: 200,
  speed: 0,
  isOn: false,
  distance: 0,
  price: 1000,
});

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.accelerate()

Car.getSpecs(mustang);
