// Type alias for a complex type
type Area = {
    x: number;
    y: number;
};

class Shape {
    // Using type alias
    public center: Area;

    constructor(center: Area) {
        this.center = center;
    }

    describe(): void {
        // console.log(`Area is (${this.center}, ${this.center}).`);
        console.log(
            this.center.x * this.center.y
        );
    }
}

const centerArea = { x: 5, y: 10 };
const shape = new Shape(centerArea);
shape.describe(); 