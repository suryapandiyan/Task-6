class UberPriceCalculator {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
      this.baseFare = 2.5;
      this.costPerMinute = 0.3;
      this.costPerMile = 1.75;
      this.minimumFare = 7;
    }
  
    calculatePrice() {
      const timeCost = this.time * this.costPerMinute;
      const distanceCost = this.distance * this.costPerMile;
      const subtotal = this.baseFare + timeCost + distanceCost;
      const total = subtotal < this.minimumFare ? this.minimumFare : subtotal;
      return `$${total.toFixed(2)}`;
    }
  }
  const calculator = new UberPriceCalculator(5, 10);  
const price = calculator.calculatePrice();
console.log(price);  
