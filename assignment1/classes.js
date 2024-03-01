var Car = /** @class */ (function () {
    function Car(x, y, z) {
        this.make = x;
        this.model = y;
        this.year = z;
    }
    Car.prototype.displayinfo = function () {
        console.log(this.make + " " + this.model + " " + this.year);
    };
    return Car;
}());
var ob = new Car("TATA", "nexon", 2022);
var ob1 = new Car("TOYOTA", "innova", 2020);
ob.displayinfo();
ob1.displayinfo();
