"use strict";
class Shape {
    constructor(center) {
        this.center = center;
    }
    describe() {
        // console.log(`Area is (${this.center}, ${this.center}).`);
        console.log(this.center.x * this.center.y);
    }
}
const centerArea = { x: 5, y: 10 };
const shape = new Shape(centerArea);
shape.describe();
