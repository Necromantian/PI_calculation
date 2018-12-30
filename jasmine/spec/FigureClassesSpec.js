describe("Class Figure should be", function () {
    it("an abstract class", function () {

        function figureTest() {
            let figure = new Figure();
        }

        expect(figureTest).toThrowError(AbstractClassException);
    });
});

describe("Class Circle should have", function () {

    function circleTest() {
        let circle = new Circle(null, 100);
        return { sx: circle.sx, sy: circle.sy, r: circle.r }
    }

    it("correctly calculated sx", function () {
        expect(circleTest().sx).toEqual(50);
    });
    it("correctly calculated sy", function () {
        expect(circleTest().sy).toEqual(50);
    });
    it("correctly calculated r", function () {
        expect(circleTest().r).toEqual(50);
    });
});

describe("Class Point should", function () {

    function testPoint() {
        let point = new Point(null, 100);
        return point;
    }

    let circle = new Circle(null, 100);

    for (let i = 0; i < 10; ++i) {
        it("have random x value in given range", function () {
            expect(testPoint().x).not.toBeLessThan(0);
            expect(testPoint().x).not.toBeGreaterThan(100);
        });
        it("have random y value in given range", function () {
            expect(testPoint().y).not.toBeLessThan(0);
            expect(testPoint().y).not.toBeGreaterThan(100);
        });
    }

    it("correctly check if point is inside the circle", function () {
        let point = testPoint();
        point.x=40;
        point.y=40;
        expect(point.checkIfInCircle(circle)).toBeTruthy();
    });

    it("correctly check if point is outside the circle", function () {
        let point = testPoint();
        point.x=1;
        point.y=1;
        expect(point.checkIfInCircle(circle)).not.toBeTruthy();
    });
});